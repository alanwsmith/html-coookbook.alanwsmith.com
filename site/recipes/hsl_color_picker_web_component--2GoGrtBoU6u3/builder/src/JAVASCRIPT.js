////////////////////////////////////////////////////
// This is the component itself

class hslaPicker extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        const makeValueObject = (key) => {
            const valueObject = {
                wrapper: document.createElement('div'),
                background: document.createElement('div'),
                slider: document.createElement('input'),
            }

            valueObject.wrapper.style.position = 'relative'
            valueObject.wrapper.style.width = '180px'
            valueObject.wrapper.style.height = '26px'

            valueObject.background.style.width = '180px'
            valueObject.background.style.height = '15px'
            valueObject.background.style.padding = '0'
            valueObject.background.style.margin = '0'
            valueObject.background.style.border = '1px solid white'
            valueObject.background.style.borderRadius = '30px'
            valueObject.background.style.position = 'absolute'

            valueObject.wrapper.appendChild(valueObject.background)

            return valueObject
        }

        this.sliders = {
            h: makeValueObject(),
            s: makeValueObject(),
            l: makeValueObject(),
            a: makeValueObject(),
        }

        this.shadowRoot.append(this.sliders.s.wrapper)
        this.shadowRoot.append(this.sliders.l.wrapper)
        this.shadowRoot.append(this.sliders.h.wrapper)
    }

    connectedCallback() {
        if (!this.hasAttribute('h')) {
            this.setAttribute('h', 140)
        }
        console.log(this)
    }
}

customElements.define('hsla-picker', hslaPicker)

////////////////////////////////////////////////////
// This would to in the main script

const init = () => {}

document.addEventListener('DOMContentLoaded', init)
