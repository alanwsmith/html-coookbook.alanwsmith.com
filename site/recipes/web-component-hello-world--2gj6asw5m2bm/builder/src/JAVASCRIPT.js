class HelloComponent extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' })
        const wrapper = document.createElement('span')
        wrapper.innerText = 'Hello, Component!'

        this.shadowRoot.append(wrapper)
    }
}

customElements.define('hello-component', HelloComponent)
