////////////////////////////////////////////////////
// This is the component itself

class hslaPicker extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        const styles = document.createElement('style')
        styles.innerText = `
input[type="range"] {
   -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 180px;
}
`

        const makeValueObject = (key) => {
            const valueObject = {}

            valueObject.wrapper = document.createElement('div')
            valueObject.wrapper.style.position = 'relative'
            valueObject.wrapper.style.width = '180px'
            valueObject.wrapper.style.height = '26px'

            valueObject.background = document.createElement('div')
            valueObject.background.style.position = 'absolute'
            valueObject.background.style.width = '180px'
            valueObject.background.style.height = '15px'
            valueObject.background.style.padding = '0'
            valueObject.background.style.margin = '0'
            valueObject.background.style.border = '1px solid white'
            valueObject.background.style.borderRadius = '30px'

            valueObject.slider = document.createElement('input')
            valueObject.slider.setAttribute('id', 'lightness-slider')
            valueObject.slider.setAttribute('name', 'lightness-slider')
            valueObject.slider.setAttribute('type', 'range')
            valueObject.slider.setAttribute('min', '0')
            valueObject.slider.setAttribute('max', '100')
            // valueObject.slider.setAttribute('value', this.lightnessValue)
            valueObject.slider.style.position = 'absolute'
            valueObject.slider.style.padding = '0'
            valueObject.slider.style.margin = '0'
            // valueObject.slider.addEventListener('input', handleLightnessInput)
            //

            valueObject.wrapper.appendChild(valueObject.background)
            valueObject.wrapper.appendChild(valueObject.slider)

            return valueObject
        }

        this.sliders = {
            h: makeValueObject(),
            s: makeValueObject(),
            l: makeValueObject(),
            a: makeValueObject(),
        }

        this.shadowRoot.append(styles)
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
