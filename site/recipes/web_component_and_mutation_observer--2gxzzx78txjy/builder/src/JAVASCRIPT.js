class ComLink extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        const handleInsideUpdate = (event) => {
            this.setAttribute('amount', event.target.value)
            // console.log(event.target.value)
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
}

customElements.define('com-link', ComLink)
