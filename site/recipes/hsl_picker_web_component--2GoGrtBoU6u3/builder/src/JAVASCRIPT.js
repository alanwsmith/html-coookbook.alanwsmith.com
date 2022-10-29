class WebComponent extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' })
        const component = document.createElement('span')
        component.innerText = 'Hello, Component!'

        this.shadowRoot.append(component)
    }
}

customElements.define('w-c', WebComponent)
