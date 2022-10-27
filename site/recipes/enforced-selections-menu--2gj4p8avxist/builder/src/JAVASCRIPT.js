class EnforcedSelector extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        const handleDocumentClick = (event) => {
            if (event.target !== this) {
                log('deactivating')
            }
        }

        const handleInputFocus = () => {
            log('focus')
        }

        const log = (msg) => {
            console.log(msg)
        }

        this.wrapper = document.createElement('div')
        this.wrapper.style.display = 'inline'

        this.input = document.createElement('input')
        this.input.setAttribute('type', 'text')
        this.input.addEventListener('focus', handleInputFocus)

        this.input.id = 'asdfasdf'
        this.wrapper.appendChild(this.input)
        this.shadowRoot.append(this.wrapper)

        this.state = 'closed'

        document.addEventListener('click', handleDocumentClick)
    }
}

customElements.define('enforced-selector', EnforcedSelector)
