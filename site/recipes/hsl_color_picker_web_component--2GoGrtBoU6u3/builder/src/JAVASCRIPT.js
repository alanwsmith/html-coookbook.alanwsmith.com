////////////////////////////////////////////////////
// This is the component itself

class hslaPicker extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        this.styles = document.createElement('style')
        this.styles.innerText = `
input[type="range"] {
   -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 180px;
}
`
        this.keys = ['h', 's', 'l']

        // potential optimzation: debounce
        const handleSliderMovement = (event) => {
            this.keys.forEach((key) => {
                this.setAttribute(key, this.values[key].slider.value)
            })
            this.doUpdate()
        }

        this.doUpdate = () => {
            this.keys.forEach((key) => {
                this.values[key].slider.setAttribute(
                    'value',
                    this.getAttribute(key)
                )
            })

            this.values.h.background.style.background = `linear-gradient(
                0.25turn,
                hsl(0, ${this.getAttribute('s')}%, ${this.getAttribute('l')}%),
                hsl(45, ${this.getAttribute('s')}%, ${this.getAttribute('l')}%),
                hsl(90, ${this.getAttribute('s')}%, ${this.getAttribute('l')}%),
                hsl(135, ${this.getAttribute('s')}%, ${this.getAttribute(
                'l'
            )}%),
                hsl(180, ${this.getAttribute('s')}%, ${this.getAttribute(
                'l'
            )}%),
                hsl(225, ${this.getAttribute('s')}%, ${this.getAttribute(
                'l'
            )}%),
                hsl(270, ${this.getAttribute('s')}%, ${this.getAttribute(
                'l'
            )}%),
                hsl(315, ${this.getAttribute('s')}%, ${this.getAttribute(
                'l'
            )}%),
                hsl(360, ${this.getAttribute('s')}%, ${this.getAttribute('l')}%)
            )`

            this.values.s.background.style.background = `linear-gradient(
            0.25turn,
            hsl(${this.getAttribute('h')}, 0%, ${this.getAttribute('l')}%),
            hsl(${this.getAttribute('h')}, 100%, ${this.getAttribute('l')}%))`

            this.values.l.background.style.background = `linear-gradient(
            0.25turn,
            hsl(${this.getAttribute('h')}, ${this.getAttribute('s')}%, 0%),
            hsl(${this.getAttribute('h')}, ${this.getAttribute('s')}%, 50%),
            hsl(${this.getAttribute('h')}, ${this.getAttribute('s')}%, 100%)`
        }

        const makeValueObject = (key, max) => {
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
            valueObject.slider.setAttribute('id', `${key}-slider`)
            valueObject.slider.setAttribute('name', `${key}-slider`)
            valueObject.slider.setAttribute('type', 'range')
            valueObject.slider.setAttribute('min', '0')
            valueObject.slider.setAttribute('max', `${max}`)
            valueObject.slider.style.position = 'absolute'
            valueObject.slider.style.padding = '0'
            valueObject.slider.style.margin = '0'
            valueObject.slider.addEventListener('input', handleSliderMovement)

            valueObject.wrapper.appendChild(valueObject.background)
            valueObject.wrapper.appendChild(valueObject.slider)

            return valueObject
        }

        this.values = {
            h: makeValueObject('h', 360),
            s: makeValueObject('s', 100),
            l: makeValueObject('l', 100),
            // a: makeValueObject('a', 1),
        }

        this.shadowRoot.append(this.styles)
    }

    connectedCallback() {
        if (!this.hasAttribute('h')) {
            this.setAttribute('h', 280)
        }
        if (!this.hasAttribute('s')) {
            this.setAttribute('s', 20)
        }
        if (!this.hasAttribute('l')) {
            this.setAttribute('l', 40)
        }

        this.doUpdate()

        this.shadowRoot.append(this.values.s.wrapper)
        this.shadowRoot.append(this.values.l.wrapper)
        this.shadowRoot.append(this.values.h.wrapper)
    }
}

customElements.define('hsla-picker', hslaPicker)

////////////////////////////////////////////////////
// This would to in the main script

const init = () => {



}

document.addEventListener('DOMContentLoaded', init)
