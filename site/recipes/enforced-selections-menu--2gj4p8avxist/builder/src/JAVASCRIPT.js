class EnforcedSelector extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.defaultOptions = {}
        this.placeholder = 'Select'

        const log = (msg) => {
            console.log(msg)
        }

        const getFilteredOptions = () => {
            const filteredOptions = []
            for (const optionKey in this.defaultOptions) {
                const defaultOption = this.defaultOptions[optionKey]
                if (
                    defaultOption.text.toLowerCase().includes(this.input.value)
                ) {
                    filteredOptions.push(defaultOption)
                }
            }
            return filteredOptions
        }

        const handleDocumentClick = (event) => {
            if (event.target !== this) {
                removeMenu()
            }
        }

        const handleInputFocus = () => {
            this.input.setAttribute('placeholder', '')
            renderOptions()
        }

        const handleInputKeyup = (event) => {
            const keyCheck = event.key.toLowerCase()
            if (keyCheck === 'enter') {
                registerSelection()
            } else if (keyCheck === 'escape') {
                this.input.value = ''
                removeMenu()
                this.input.blur()
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
            if (this.input.value !== '') {
                if (getFilteredOptions().length > 0) {
                    const firstOption = getFilteredOptions()[0]
                    this.placeholder = firstOption.text
                    this.input.setAttribute('placeholder', this.placeholder)
                    this.input.value = ''
                    removeMenu()
                    this.input.blur()
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
                this.select = document.createElement('select')
                this.select.size = 5
                this.wrapper.appendChild(this.select)
            }

            while (this.select.firstChild) {
                this.select.firstChild.remove()
            }

            getFilteredOptions().forEach((option) => {
                const optionEl = document.createElement('option')
                optionEl.value = option.value
                optionEl.innerText = option.text
                this.select.appendChild(optionEl)
            })
        }

        this.wrapper = document.createElement('div')
        this.wrapper.style.display = 'inline'

        this.input = document.createElement('input')
        this.input.setAttribute('type', 'text')
        this.input.setAttribute('placeholder', this.placeholder)
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
