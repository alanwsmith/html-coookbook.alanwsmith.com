class StyledComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        const styles = document.createElement('style')
        styles.innerText = `
            span{ 
                background: #123423;
                color: #873742;
                font-size: 2rem;
            }`

        const content = document.createElement('span')
        content.innerText = 'bravo'

        this.shadowRoot.append(styles)
        this.shadowRoot.append(content)
    }
}

customElements.define('styled-component', StyledComponent)
