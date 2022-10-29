class UseAttributes extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        const component = document.createElement('span')
        component.innerText = 'Hello, Component!'

        this.shadowRoot.append(component)
    }

    connectedCallback() {
        if (this.hasAttribute('ping')) {
            console.log(this.getAttribute('ping'))
        }
    }
}

customElements.define('use-attributes', UseAttributes)
