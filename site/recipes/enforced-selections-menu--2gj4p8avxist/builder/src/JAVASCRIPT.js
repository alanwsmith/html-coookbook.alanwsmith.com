class EnforcedSelector extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.defaultOptions = {}
        this.placeholder = 'Select'
        this.options = []

        const log = (msg) => {
            console.log(msg)
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

        const handleInputKeydown = (event) => {
            const keyCheck = event.key.toLowerCase()
            if (keyCheck === 'tab') {
                event.preventDefault()
                this.select.focus()
            }
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

        const handleSelectKeydown = (event) => {
            const keyCheck = event.key.toLowerCase()
            if (keyCheck === 'tab') {
                event.preventDefault()
                this.input.focus()
            }
        }

        const registerSelection = () => {
            // if (this.input.value !== '') {
            //     if (getFilteredOptions().length > 0) {
            //         const firstOption = getFilteredOptions()[0]
            //         this.placeholder = firstOption.text
            //         this.input.setAttribute('placeholder', this.placeholder)
            //         this.input.value = ''
            //         removeMenu()
            //         this.input.blur()
            //     }
            // }
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
            if (this.select) {
                while (this.select.firstChild) {
                    this.select.firstChild.remove()
                }
                this.select.blur()
                this.select.remove()
                this.select = null
            }

            updateOptions()

            this.select = document.createElement('select')
            this.select.addEventListener('keydown', handleSelectKeydown)
            this.select.size = 5

            for (let option of this.options) {
                this.select.appendChild(option)
            }

            this.wrapper.appendChild(this.select)

            // for (let option of this.options) {
            //     const optionEl = document.createElement('option')
            //     optionEl.value = option.value
            //     optionEl.innerText = option.text
            //     this.select.appendChild(optionEl)
            // }

            // if (this.input.value !== '') {
            //     setSelection(0)
            // }
        }

        const setSelection = (index = null) => {
            for (let option of this.options) {
                option.setAttribute('selected', false)
            }
            if (index !== null) {
                this.options[index].setAttribute('selected', 'selected')
            }
        }

        // this makes new object to avoid having to worry about
        // stuff with the outside set. but it looks at that
        // set every time to make it's stuff
        const updateOptions = () => {
            this.options = []
            for (let option of this.getElementsByTagName('option')) {
                if (option.text.toLowerCase().includes(this.input.value)) {
                    const optionEl = document.createElement('option')
                    optionEl.value = option.value
                    optionEl.innerText = option.text
                    this.options.push(optionEl)
                }
            }
        }

        this.wrapper = document.createElement('div')
        this.wrapper.style.display = 'inline'

        this.input = document.createElement('input')
        this.input.setAttribute('value', '')
        this.input.setAttribute('type', 'text')
        this.input.setAttribute('placeholder', this.placeholder)
        this.input.addEventListener('focus', handleInputFocus)
        this.input.addEventListener('keyup', handleInputKeyup)
        this.input.addEventListener('keydown', handleInputKeydown)
        this.input.setAttribute('autocorrect', false)
        this.input.setAttribute('spellcheck', false)

        this.wrapper.appendChild(this.input)
        this.shadowRoot.append(this.wrapper)

        document.addEventListener('mousedown', handleDocumentClick)
    }
}

customElements.define('enforced-selector', EnforcedSelector)
