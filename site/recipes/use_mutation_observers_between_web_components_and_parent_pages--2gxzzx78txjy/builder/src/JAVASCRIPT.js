class ComLink extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        const handleInsideUpdate = (event) => {
            this.setAttribute('amount', event.target.value)
        }

        this.rangeSlider = document.createElement('input')
        this.rangeSlider.addEventListener('input', handleInsideUpdate)
        this.rangeSlider.type = 'range'

        this.shadowRoot.append(this.rangeSlider)
    }

    static get observedAttributes() {
        return ['amount']
    }

    attributeChangedCallback(attribute, oldValue, newValue) {
        if (newValue !== oldValue) {
            this.setAttribute('amount', newValue)
            this.rangeSlider.value = newValue
        }
    }
}

customElements.define('com-link', ComLink)
