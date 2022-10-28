class EnforcedSelector extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.defaultOptions = {}
        this.placeholder = 'Select'
        this.options = []
        this.upArrowCheck = ''
        this.tabTimeout = null

        const log = (msg) => {
            console.log(msg)
        }

        const handleDocumentClick = (event) => {
            if (event.target !== this) {
                this.input.placeholder = this.placeholder
                this.input.value = ''
                removeMenu()
            }
        }

        const handleDOMContentLoaded = () => {
            this.style.display = 'inline'
            this.style.position = 'relative'
        }

        const handleInputFocus = () => {
            this.input.setAttribute('placeholder', '')
            renderOptions()
        }

        const handleInputKeydown = (event) => {
            const keyCheck = event.key.toLowerCase()
            if (keyCheck === 'tab') {
                event.preventDefault()
                setSelection(0)
                this.select.focus()
            }
        }

        const handleInputKeyup = (event) => {
            const keyCheck = event.key.toLowerCase()
            if (keyCheck === 'enter') {
                if (this.input.value !== '') {
                    if (this.options.length > 0) {
                        registerSelection()
                    }
                }
            } else if (keyCheck === 'arrowdown') {
                if (this.input.value === '') {
                    setSelection(0)
                } else {
                    setSelection(1)
                }
                this.select.focus()
            } else if (keyCheck === 'escape') {
                if (this.input.value !== '') {
                    this.input.value = ''
                    renderOptions()
                } else {
                    this.input.setAttribute('placeholder', this.placeholder)
                    removeMenu()
                    this.input.blur()
                }
            } else {
                renderOptions()
            }
        }

        const handleSelectKeydown = (event) => {
            const keyCheck = event.key.toLowerCase()
            if (keyCheck === 'tab') {
                if (this.tabTimeout) {
                    clearTimeout(this.tabTimeout)
                }
                this.tabTimeout = setTimeout(() => {
                    removeMenu()
                    this.input.value = ''
                    this.input.placeholder = this.placeholder
                }, 30)
            }
        }

        // TODO: Handle escape here
        const handleSelectKeyup = (event) => {
            const keyCheck = event.key.toLowerCase()
            // TODO: May need to be a check for items in the
            // options here.
            if (keyCheck === 'enter') {
                registerSelection()
            } else if (keyCheck === 'arrowup') {
                if (this.upArrowCheck === this.select.value) {
                    this.input.focus()
                    setSelection(null)
                }
            }
            if (this.select) {
                this.upArrowCheck = this.select.value
            }
        }

        const registerSelection = () => {
            for (let option of this.options) {
                if (this.select.value === option.value) {
                    this.placeholder = option.text
                    this.input.setAttribute('placeholder', this.placeholder)
                    this.input.value = ''
                    this.input.blur()
                }
            }
            removeMenu()
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
            this.select.addEventListener('keyup', handleSelectKeyup)
            this.select.size = 5
            this.select.style.position = 'absolute'

            for (let option of this.options) {
                this.select.appendChild(option)
            }

            this.wrapper.appendChild(this.select)

            if (this.input.value !== '' && this.options.length > 0) {
                setSelection(0)
            }

            this.upArrowCheck = null
        }

        const setSelection = (index = null) => {
            for (let option of this.options) {
                option.removeAttribute('selected')
            }
            if (index !== null) {
                this.upArrowCheck = this.options[index].value
                this.options[index].setAttribute('selected', true)
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
        document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)
    }
}

customElements.define('enforced-selector', EnforcedSelector)
