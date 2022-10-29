class CustomInput extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        const gotData = (event) => {
            console.log(event)
            event.formData.append('x', 'y')
        }

        const input = document.createElement('input')
        input.name = 'customInput'
        input.value = 'Alfa Bravo'

        this.shadowRoot.append(input)

        document.addEventListener('formdata', gotData)
    }
}

customElements.define('custom-input', CustomInput)
