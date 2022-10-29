class WrapperComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        this.upperCasedOptions = []
        this.output = document.createElement('span')

        const loadOptions = () => {
            const options = this.getElementsByTagName('option')
            for (const option of options) {
                this.upperCasedOptions.push(option.value.toUpperCase())
            }
            this.output.innerText = this.upperCasedOptions.join(' ')
        }

        this.shadowRoot.append(this.output)
        document.addEventListener('DOMContentLoaded', loadOptions)
    }
}

customElements.define('wrapper-component', WrapperComponent)
