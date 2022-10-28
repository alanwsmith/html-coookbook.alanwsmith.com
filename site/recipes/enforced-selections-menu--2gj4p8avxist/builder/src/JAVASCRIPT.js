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

        const handleInputKeyup = (event) => {
            const keyCheck = event.key.toLowerCase()
            if (keyCheck === 'enter') {
                registerSelection()
            } else {
                renderOptions()
            }
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

        const registerSelection = () => {
            log('asdfasdfasfasdf')
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
                this.select = document.createElement('select')
                this.select.size = 5
            }

            while (this.select.firstChild) {
                this.select.firstChild.remove()
            }

            for (const optionKey in this.defaultOptions) {
                const defaultOption = this.defaultOptions[optionKey]
                if (
                    defaultOption.text.toLowerCase().includes(this.input.value)
                ) {
                    const option = document.createElement('option')
                    option.value = this.defaultOptions[optionKey].value
                    option.innerText = this.defaultOptions[optionKey].text
                    this.select.appendChild(option)
                }
            }

            this.wrapper.appendChild(this.select)
        }

        this.wrapper = document.createElement('div')
        this.wrapper.style.display = 'inline'

        this.input = document.createElement('input')
        this.input.setAttribute('type', 'text')
        this.input.addEventListener('focus', handleInputFocus)
        this.input.addEventListener('keyup', handleInputKeyup)
        this.input.setAttribute('autocorrect', false)
        this.input.setAttribute('spellcheck', false)

        this.wrapper.appendChild(this.input)
        this.shadowRoot.append(this.wrapper)

        document.addEventListener('mousedown', handleDocumentClick)
        document.addEventListener('DOMContentLoaded', loadDefaultOptions)
    }
}

customElements.define('enforced-selector', EnforcedSelector)
