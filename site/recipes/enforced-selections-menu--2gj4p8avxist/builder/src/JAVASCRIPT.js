class EnforcedSelector extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' }) // sets and returns 'this.shadowRoot'
        const wrapper = document.createElement('div')
        const input = document.createElement('input')
        input.setAttribute('type', 'text')
        wrapper.appendChild(input)
        this.shadowRoot.append(wrapper)
        // document.addEventListener('click', handleDocumentClick)
    }

    handleDocumentClick() {
        console.log('here')
    }
}

customElements.define('enforced-selector', EnforcedSelector)
