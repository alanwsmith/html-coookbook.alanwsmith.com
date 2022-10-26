customElements.define('m-alert', class extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // One time render stuff
    this.classList.add('pad-all-md', 'flex', 'pos-relative');
    if (this.type === 'warn' || this.type === 'error') this.setAttribute('role', 'alert');

    const icon = document.createElement('m-icon');
    icon.classList.add('txt-lg', 'mar-r-md');
    const iconName = this.type === 'success' ? 'check' : this.type === 'warn' ? 'exclamation' : this.type === 'error' ? 'ban' : 'info';
    icon.setAttribute('name', iconName);

    const dismissBtn = document.createElement('button');
    dismissBtn.setAttribute('type', 'remove');
    dismissBtn.setAttribute('aria-label', 'Dismiss alert');
    dismissBtn.hidden = this.dismissible === 'false';
    dismissBtn.classList.add('pad-all-sm', 'txt-lg', 'pos-absolute', 'pin-t', 'pin-r');
    dismissBtn.addEventListener('click', () => this.dismiss());

    const content = document.createElement('div');
    content.append(...this.childNodes);

    this.append(icon, dismissBtn, content)
  }

  get dismissible() {
    return this.getAttribute('dismissible');
  }

  set dismissible(val) {
    this.setAttribute('dismissible', val === 'false' ? 'false' : 'true');
  }

  get type() {
    return this.getAttribute('type');
  }

  set type(val) {
    this.setAttribute('type', val);
  }

  static get observedAttributes() { return ['type', 'autodismiss', 'dismissible']; }

  // Called once before connectedCallback, which means children may not be present
  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case 'type':
        // TODO If oldVal is null, it's likely this is the first attr change, which we want to ignore.
        //  If we don't ignore then the first icon of the given content will get overridden since connectedCallback hasn't run yet.
        if (oldVal) {
          const iconName = this.type === 'success' ? 'check' : this.type === 'warn' ? 'exclamation' : this.type === 'error' ? 'ban' : 'info';
          const icon = this.querySelector('m-icon');
          if (icon) icon.setAttribute('name', iconName);
        }
      case 'dismissible':
        const dismissBtn = this.querySelector('button');
        if (dismissBtn) dismissBtn.hidden = newVal === 'false';
      case 'autodismiss':
        const seconds = newVal ? parseInt(newVal) * 1000 : 4000;
        if (seconds > 0) setTimeout(() => this.dismiss(), seconds);
    }
  }

  dismiss() {
    this.dispatchEvent(new CustomEvent('dismiss'));
    this.remove();
  }
});

class MdashAutocomplete extends HTMLElement {
  constructor() {
    super();
    this._boundClose = this.close.bind(this)
  }

  connectedCallback() {
    // Closes matching results when user clicks outside of it
    document.body.addEventListener('click', this._boundClose);

    // Close on esc keyup
    document.addEventListener('keyup', this._boundClose);

    this.results = [];

    // One time setup
    if (this.childElementCount === 0) {
      this._input = document.createElement('input');
      this._input.setAttribute('placeholder', this.getAttribute('placeholder') || '');
      this._input.addEventListener('select', e => e.stopPropagation()); // Prevents text select event
      this._input.addEventListener('keyup', e => this.search(e.currentTarget.value));

      this._matchesContainer = document.createElement('div');
      this._matchesContainer.classList.add('pos-absolute', 'bg-white', 'brd-all', 'brd-radius-sm');
      this._matchesContainer.addEventListener('click', e => {
        const li = e.target.closest('li');
        this.select(e, li.dataset.value, li.dataset.id);
      });
      this._matchesContainer.hidden = true;

      this.append(this._input, this._matchesContainer);
    }
  }

  disconnectedCallback() {
    document.body.removeEventListener('click', this._boundClose);
    document.removeEventListener('keyup', this._boundClose);
  }

  close(e) {
    // Close with the Esc key
    if (e.type === 'keyup' && e.key === 'Escape') {
      this.clear();
    }
    // Close with off-target click
    else if (e.type === 'click' && !this._matchesContainer.contains(e.currentTarget)) {
      this.clear(true);
    }
  }
  
  async search(query) {
    if (query) {
      const source = this.getAttribute('source');
      const max = Number(this.getAttribute('max'));
      let results = [];

      // Try function source...
      if (MdashAutocomplete.prototype.sources[source]) {
        const result = await MdashAutocomplete.prototype.sources[source](query, max);

        // Verify the original query is still current since these are async calls
        if (result.query === this._input.value) {
          results = result.matches.slice(0, max || result.matches.length);

          // Normalize string results
          if (typeof results[0] === 'string') {
            results = results.map(value => ({value}))
          }
        }
      }
      // Try <datalist> source...
      else if (document.getElementById(source)) {
        const lowerCaseQuery = query.toLowerCase();
        Array.from(document.getElementById(source).options).forEach(option => {
          // There must always be option.value and it's always set to id.
          // If there's option.textContent, textContent is value; otherwise option.value is id and value.
          const match = option.value?.toLowerCase().includes(lowerCaseQuery) || option.textContent?.toLowerCase().includes(lowerCaseQuery);
          if (match) {
            const id = option.value;
            const value = option.textContent || id;
            results.push({value, id});
          }
        });
      }

      this.results = results;
      this.render(query);
    }
    else {
      this.clear();
    }
  }

  select(e, value, id) {
    e.stopPropagation();
    const source = this.getAttribute('source');
    this._input.value = value;
    this._input.focus();
    this.dispatchEvent(new CustomEvent('select', {detail: {source, value, id}}));
    this.clear();
  }

  clear(preventFocus) {
    this.results = [];
    this.render();
    if (!preventFocus) {
      this._input.focus();
    }
  }

  render(hasQuery) {
    this._matchesContainer.hidden = !hasQuery;
    this._matchesContainer.innerHTML = this.results.length ?
      `<ul type="none">
        ${this.results.reduce((acc, result) => acc +=`<li class="pad-all-sm pointer" data-id="${result.id}" data-value="${result.value}">${result.value}</li>`, '')}
      </ul>`
      :
      `<div class="pad-all-sm fnt-italic txt-gray-5">No results</div>`;
  }
}

MdashAutocomplete.prototype.sources = {};
window.MdashAutocomplete = MdashAutocomplete;
customElements.define('m-autocomplete', MdashAutocomplete);

/**
 * This element needs to match the HTMLDialogElement spec (except the m- prefix) so
 * it can be safely removed once browser support is good enough.
 *
 * Some notable naming choices:
 * "dialog" - this is what the native element is called, so we're just prefixing that
 * "open" - this is the correct attribute name
 * "close" - this is the correct event and method names
 * "returnValue" - this is the name of a special property that's optionally set when calling close
 * "show" and "showModal" - these are the correct method names for opening the dialog
 */
customElements.define('m-dialog', class extends HTMLElement {
  constructor() {
    super();
    this._boundClose = e => e.key === 'Escape' ? this.close() : null;
  }

  connectedCallback() {
    this.returnValue = null;

    // Close on esc keyup
    document.addEventListener('keydown', this._boundClose);

    // One time render stuff
    const container = document.createElement('div');
    const role = this.getAttribute('role') === 'alertdialog' ? 'alertdialog' : 'dialog';
    container.setAttribute('role', role);
    container.classList.add('pos-relative', 'pad-all-lg');

    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('type', 'remove');
    closeBtn.setAttribute('aria-label', 'Close dialog');
    closeBtn.classList.add('pad-all-sm', 'txt-lg', 'pos-absolute', 'pin-t', 'pin-r');
    closeBtn.addEventListener('click', () => this.close());

    const content1 = document.createElement('div'); // Yes, both are needed
    const content2 = document.createElement('div');
    content2.append(...this.childNodes); // The supplied content
    content1.append(content2);

    container.append(closeBtn, content1);
    this.append(container);
  }

  disconnectedCallback() {
    document.removeEventListener('keydown', this._boundClose);
  }

  static get observedAttributes() { return ['open']; }

  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case 'open':
        if (newVal === null) this.close();
        if (newVal === '') {
          // Good UX and HTMLDialogElement spec says to do it
          const firstAutofocusField = this.querySelector('[autofocus]');
          if (firstAutofocusField) { firstAutofocusField.focus() }
        }
    }
  }

  get open() {
    return this.hasAttribute('open');
  }

  set open(isOpen) {
    isOpen ? this.setAttribute('open', '') : this.removeAttribute('open');
  }

  // MDN: "Closes the dialog. An optional DOMString may be passed as an argument, updating the returnValue of the the dialog."
  close(returnValue) {
    this.returnValue = returnValue || this.returnValue;
    this.style.pointerEvents = 'auto';
    this.open = false;
    this.dispatchEvent(new CustomEvent('close')); // MDN: "Fired when the dialog is closed."
  }

  // MDN: "Displays the dialog modelessly, i.e. still allowing interaction with content outside of the dialog."
  show() {
    this.style.pointerEvents = 'none'; // To "allow interaction outside dialog"
    this.open = true;
  }

  // MDN: "Displays the dialog as a modal, over the top of any other dialogs that might be present. Interaction outside the dialog is blocked."
  showModal() {
    this.open = true;
  }
});
customElements.define('m-menu', class extends HTMLElement {
  constructor() {
    super();
    this._boundClose = this.close.bind(this)
  }

  connectedCallback() {
    // Can expose later if desired
    const trigger = this.querySelector('[slot="trigger"]');
    if (trigger) {
      trigger.addEventListener('click', e => this.open = !this.open);
    }

    // Close menu if user clicks outside of a menu or navigates away
    document.body.addEventListener('click', this._boundClose);
    window.addEventListener('popstate', this._boundClose); // TODO popstate is ineffective if the link was a child of the menu
  }

  disconnectedCallback() {
    document.body.removeEventListener('click', this._boundClose);
    window.removeEventListener('popstate', this._boundClose);
  }

  close(e) {
    if (e && e.type === 'popstate' || !this.contains(e.target)) {
      this.open = false
    }
  }

  static get observedAttributes() { return ['open']; }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'open') this.dispatchEvent(new CustomEvent('toggle'));
  }

  get open() {
    return this.hasAttribute('open');
  }

  set open(isOpen) {
    isOpen ? this.setAttribute('open', '') : this.removeAttribute('open');
  }
});

customElements.define('m-tabs', class extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Get <m-tab> children and select one
    this.tabs = Array.from(this.querySelectorAll('m-tab'));
    const tab = this.tabs.find(tab => tab.hasAttribute('selected'));
    const index = tab ? this.tabs.indexOf(tab) : 0;
    this.select(index);

    // When <m-tabs> is clicked the correct <m-tab> will be found and selected
    this.addEventListener('click', e => {
      if (e.target.href) e.preventDefault(); // App is responsible to redirect/route with `href` in event detail
      const tab = e.composedPath().find(el => el.tagName === 'M-TAB');
      this.select(this.tabs.indexOf(tab), e.target.href);
    });

    // a11y
    this.setAttribute('role', 'tablist');
    this.tabs.forEach(tab => tab.setAttribute('role', 'tab'));
  }

  select(index, href) {
    const tab = this.tabs[index];
    if (!tab.hasAttribute('disabled')) {
      // Unselect current tab
      this.tabs.forEach(tab => {
        tab.removeAttribute('selected');
        tab.setAttribute('aria-selected', 'false');
      });

      // Select new tab and fire event
      tab.setAttribute('selected', 'selected');
      tab.setAttribute('aria-selected', 'true');
      this.dispatchEvent(new CustomEvent('select', {detail: {index, id: tab.id, href}}));
    }
  }

});