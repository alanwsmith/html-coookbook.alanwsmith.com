class EnforcedSelector extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.options = []
        this.defaultOptions = {}

        const log = (msg) => {
            console.log(msg)
        }

        const handleDocumentClick = (event) => {
            if (event.target !== this) {
                log('deactivating')
                for (const option of this.options) {
                    option.remove()
                }
                this.select.blur()
                this.select.remove()
            }
        }

        const handleInputFocus = () => {
            log('focus')
            this.select = document.createElement('select')
            this.select.size = 5
            this.options[0] = document.createElement('option')
            this.options[0].value = 'asdf'
            this.options[0].innerText = 'asdf'
            for (const option of this.options) {
                this.select.appendChild(option)
            }
            this.wrapper.appendChild(this.select)
        }

        const loadDefaultOptions = () => {
            const defaultOptions = this.getElementsByTagName('option')
            for (let i = 0; i < defaultOptions.length; i++) {
                this.defaultOptions[defaultOptions[i].value] = {
                    index: i,
                    text: defaultOptions[i].innerText,
                }
            }
            // log(this.defaultOptions)
        }

        this.wrapper = document.createElement('div')
        this.wrapper.style.display = 'inline'

        this.input = document.createElement('input')
        this.input.setAttribute('type', 'text')
        this.input.addEventListener('focus', handleInputFocus)

        this.wrapper.appendChild(this.input)
        this.shadowRoot.append(this.wrapper)

        document.addEventListener('mousedown', handleDocumentClick)
        document.addEventListener('DOMContentLoaded', loadDefaultOptions)
    }
}

customElements.define('enforced-selector', EnforcedSelector)
