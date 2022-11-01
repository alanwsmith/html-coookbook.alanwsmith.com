class ComLink extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        const handleInsideUpdate = (event) => {
            this.setAttribute('amount', event.target.value)
            this.rangeDisplay.innerText = event.target.value
        }

        this.rangeSlider = document.createElement('input')
        this.rangeSlider.type = 'range'

        this.rangeDisplay = document.createElement('div')
        this.rangeDisplay.innerText = '-'

        this.rangeSlider.addEventListener('input', handleInsideUpdate)
        this.shadowRoot.append(this.rangeSlider)
        this.shadowRoot.append(this.rangeDisplay)
    }

    static get observedAttributes() {
        return ['amount']
    }

    attributeChangedCallback(attribute, oldValue, newValue) {
        if (newValue !== oldValue) {
            this.setAttribute('amount', newValue)
            this.rangeDisplay.innerText = newValue
            this.rangeSlider.value = newValue
        }
    }
}

customElements.define('com-link', ComLink)
