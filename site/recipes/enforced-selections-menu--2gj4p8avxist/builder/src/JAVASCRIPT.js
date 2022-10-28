class EnforcedSelector extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.defaultOptions = {}

        const log = (msg) => {
            console.log(msg)
        }

        const handleDocumentClick = (event) => {
            if (event.target !== this) {
                removeMenu()
            }
        }

        const handleInputFocus = () => {
            renderOptions()
        }

        const loadDefaultOptions = () => {
            const defaultOptions = this.getElementsByTagName('option')
            for (let i = 0; i < defaultOptions.length; i++) {
                this.defaultOptions[defaultOptions[i].value] = {
                    index: i,
                    text: defaultOptions[i].innerText,
                }
            }
        }

        const removeMenu = () => {
            if (this.select) {
                while (this.select.firstChild) {
                    this.select.firstChild.remove()
                }
                this.select.blur()
                this.select.remove()
                this.select = null
            }
        }

        const renderOptions = () => {
            if (!this.select) {
                // log('- Adding Menu')
                this.select = document.createElement('select')
                this.select.size = 5
            }

            for (const optionKey in this.defaultOptions) {
                const option = document.createElement('option')
                option.value = this.defaultOptions[optionKey].value
                option.innerText = this.defaultOptions[optionKey].text
                this.select.appendChild(option)
            }

            this.wrapper.appendChild(this.select)
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
