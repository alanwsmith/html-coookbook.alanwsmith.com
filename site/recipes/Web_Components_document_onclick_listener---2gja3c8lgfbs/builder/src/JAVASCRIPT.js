class ClickCatcher extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' })
        this.clickCount = 0

        const wrapper = document.createElement('span')
        wrapper.innerText = this.clickCount

        const handleDocumentClick = () => {
            this.clickCount += 1
            wrapper.innerText = this.clickCount
        }

        document.addEventListener('click', handleDocumentClick)
        this.shadowRoot.append(wrapper)
    }
}

customElements.define('click-catcher', ClickCatcher)
