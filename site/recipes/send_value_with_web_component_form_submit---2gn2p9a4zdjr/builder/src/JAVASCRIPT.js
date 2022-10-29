class CustomInput extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        this.input = document.createElement('input')
        this.input.name = 'customInput'
        this.input.value = 'Alfa Bravo'

        const updateData = (event) => {
            event.formData.append(this.input.name, this.input.value)
        }

        this.shadowRoot.append(this.input)

        document.addEventListener('formdata', updateData)
    }
}

customElements.define('custom-input', CustomInput)
