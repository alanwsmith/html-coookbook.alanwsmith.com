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
                if (this.select) {
                    this.select.blur()
                    this.select.remove()
                }
            }
        }

        const handleInputFocus = () => {
            // TODO: Confirm there's no select and delte it if there is
            // because sometimes it seems one shows up and doesn't get
            // removed
            log('focus')
            this.select = document.createElement('select')
            this.select.size = 5

            for (const optionKey in this.defaultOptions) {
                const option = document.createElement('option')
                option.value = this.defaultOptions[optionKey].value
                option.innerText = this.defaultOptions[optionKey].text
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
