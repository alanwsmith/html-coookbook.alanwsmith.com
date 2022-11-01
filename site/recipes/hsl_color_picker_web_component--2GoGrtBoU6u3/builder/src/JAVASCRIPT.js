////////////////////////////////////////////////////
// This is the component itself

class hslaPicker extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        this.hueValue = 0
        this.saturationValue = 0
        this.lightnessValue = 0
        this.alphaValue = 1

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
        // VIA: https://stackoverflow.com/a/44134328/102401
        const convertHslToHex = (h, s, l) => {
            l /= 100
            const a = (s * Math.min(l, 1 - l)) / 100
            const f = (n) => {
                const k = (n + h / 30) % 12
                const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
                return Math.round(255 * color)
                    .toString(16)
                    .padStart(2, '0') // convert to Hex and prefix "0" if needed
            }
            return `#${f(0)}${f(8)}${f(4)}`
        }

        // VIA: https://www.30secondsofcode.org/js/s/hsl-to-rgb
        const convertHslToRgb = (h, s, l) => {
            s /= 100
            l /= 100
            const k = (n) => (n + h / 30) % 12
            const a = s * Math.min(l, 1 - l)
            const f = (n) =>
                l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
            // return [255 * f(0), 255 * f(8), 255 * f(4)]
            return {
                r: Math.round(255 * f(0)),
                g: Math.round(255 * f(8)),
                b: Math.round(255 * f(4)),
            }
        }

        const sendColorChanged = () => {
            this.dispatchEvent(
                new CustomEvent('color-changed', {
                    detail: {
                        // see if this is dupliated
                        hslaString: `hsla(${this.hueValue}, ${this.saturationValue}%, ${this.lightnessValue}%, ${this.alphaValue})`,
                        hslaNums: {
                            h: this.hueValue,
                            s: this.saturationValue,
                            l: this.lightnessValue,
                            a: this.alphaValue,
                        },
                        hex: convertHslToHex(
                            this.hueValue,
                            this.saturationValue,
                            this.lightnessValue
                        ),
                        hexInt: convertHslToHex(
                            this.hueValue,
                            this.saturationValue,
                            this.lightnessValue
                        ).replace(/#/, ''),
                        rgb: convertHslToRgb(
                            this.hueValue,
                            this.saturationValue,
                            this.lightnessValue
                        ),
                    },
                    composed: true,
                    bubbles: true,
                })
            )
        }

        this.updateHSL = () => {
            // see if this is duplicated
            console.log(`updateHSL`)
            const hslValue = `hsla(${this.hueValue}, ${this.saturationValue}%, ${this.lightnessValue}%, ${this.alphaValue})`
            updateHueDisplay()
            updateSaturationDisplay()
            updateLightnessDisplay()
            sendColorChanged()
        }

        const updateHueDisplay = () => {
            this.hueDisplay.style.background = `linear-gradient(
            0.25turn,
            hsl(0, ${this.saturationValue}%, ${this.lightnessValue}%),
            hsl(45, ${this.saturationValue}%, ${this.lightnessValue}%),
            hsl(90, ${this.saturationValue}%, ${this.lightnessValue}%),
            hsl(135, ${this.saturationValue}%, ${this.lightnessValue}%),
            hsl(180, ${this.saturationValue}%, ${this.lightnessValue}%),
            hsl(225, ${this.saturationValue}%, ${this.lightnessValue}%),
            hsl(270, ${this.saturationValue}%, ${this.lightnessValue}%),
            hsl(315, ${this.saturationValue}%, ${this.lightnessValue}%),
            hsl(360, ${this.saturationValue}%, ${this.lightnessValue}%))`
        }

        const updateSaturationDisplay = () => {
            this.saturationDisplay.style.background = `linear-gradient(
            0.25turn,
            hsl(${this.hueValue}, 0%, ${this.lightnessValue}%),
            hsl(${this.hueValue}, 100%, ${this.lightnessValue}%))`
        }

        const updateLightnessDisplay = () => {
            this.lightnessDisplay.style.background = `linear-gradient(
            0.25turn,
            hsl(${this.hueValue}, ${this.saturationValue}%, 0%),
            hsl(${this.hueValue}, ${this.saturationValue}%, 50%),
            hsl(${this.hueValue}, ${this.saturationValue}%, 100%)`
        }

        const handleHueInput = (event) => {
            this.hueValue = event.target.value
            // this.setAttribute('h', event.target.value)
            this.updateHSL()
        }

        const handleSaturationInput = (event) => {
            this.saturationValue = event.target.value
            // this.setAttribute('s', event.target.value)
            this.updateHSL()
        }

        const handleLightnessInput = (event) => {
            this.lightnessValue = event.target.value
            // this.setAttribute('l', event.target.value)
            this.updateHSL()
        }

        this.lightnessDiv = document.createElement('div')
        this.lightnessDiv.style.position = 'relative'
        this.lightnessDiv.style.width = '180px'
        this.lightnessDiv.style.height = '26px'
        this.lightnessDisplay = document.createElement('div')
        this.lightnessDisplay.style.width = '180px'
        this.lightnessDisplay.style.height = '15px'
        this.lightnessDisplay.style.padding = '0'
        this.lightnessDisplay.style.margin = '0'
        this.lightnessDisplay.style.border = '1px solid white'
        this.lightnessDisplay.style.borderRadius = '30px'
        this.lightnessDisplay.style.position = 'absolute'
        this.lightnessSlider = document.createElement('input')
        this.lightnessSlider.setAttribute('id', 'lightness-slider')
        this.lightnessSlider.setAttribute('name', 'lightness-slider')
        this.lightnessSlider.setAttribute('type', 'range')
        this.lightnessSlider.setAttribute('min', '0')
        this.lightnessSlider.setAttribute('max', '100')
        this.lightnessSlider.setAttribute('value', this.lightnessValue)
        this.lightnessSlider.style.position = 'absolute'
        this.lightnessSlider.style.padding = '0'
        this.lightnessSlider.style.margin = '0'
        this.lightnessSlider.addEventListener('input', handleLightnessInput)
        this.lightnessDiv.appendChild(this.lightnessDisplay)
        this.lightnessDiv.appendChild(this.lightnessSlider)

        this.saturationDiv = document.createElement('div')
        this.saturationDiv.style.position = 'relative'
        this.saturationDiv.style.width = '180px'
        this.saturationDiv.style.height = '26px'
        this.saturationDisplay = document.createElement('div')
        this.saturationDisplay.style.width = '180px'
        this.saturationDisplay.style.height = '15px'
        this.saturationDisplay.style.padding = '0'
        this.saturationDisplay.style.margin = '0'
        this.saturationDisplay.style.border = '1px solid white'
        this.saturationDisplay.style.borderRadius = '30px'
        this.saturationDisplay.style.position = 'absolute'
        this.saturationSlider = document.createElement('input')
        this.saturationSlider.setAttribute('id', 'saturation-slider')
        this.saturationSlider.setAttribute('name', 'saturation-slider')
        this.saturationSlider.setAttribute('type', 'range')
        this.saturationSlider.setAttribute('min', '0')
        this.saturationSlider.setAttribute('max', '100')
        this.saturationSlider.setAttribute('value', this.saturationValue)
        this.saturationSlider.addEventListener('input', handleSaturationInput)
        this.saturationSlider.style.padding = '0'
        this.saturationSlider.style.margin = '0'
        this.saturationSlider.style.position = 'absolute'
        this.saturationDiv.appendChild(this.saturationDisplay)
        this.saturationDiv.appendChild(this.saturationSlider)

        this.hueDiv = document.createElement('div')
        this.hueDiv.style.position = 'relative'
        this.hueDiv.style.width = '180px'
        this.hueDiv.style.height = '26px'
        this.hueDisplay = document.createElement('div')
        this.hueDisplay.style.width = '180px'
        this.hueDisplay.style.height = '15px'
        this.hueDisplay.style.padding = '0'
        this.hueDisplay.style.margin = '0'
        this.hueDisplay.style.border = '1px solid white'
        this.hueDisplay.style.borderRadius = '30px'
        this.hueDisplay.style.position = 'absolute'
        this.hueSlider = document.createElement('input')
        this.hueSlider.setAttribute('id', 'hue-slider')
        this.hueSlider.setAttribute('name', 'hue-slider')
        this.hueSlider.setAttribute('type', 'range')
        this.hueSlider.setAttribute('min', '0')
        this.hueSlider.setAttribute('max', '360')
        this.hueSlider.setAttribute('value', this.hueValue)
        this.hueSlider.style.position = 'absolute'
        this.hueSlider.style.padding = '0'
        this.hueSlider.style.margin = '0'
        this.hueSlider.addEventListener('input', handleHueInput)
        this.hueDiv.appendChild(this.hueDisplay)
        this.hueDiv.appendChild(this.hueSlider)

        this.updateHSL()
        // this.shadowRoot.append(display)
        this.shadowRoot.append(styles)
        this.shadowRoot.append(this.lightnessDiv)
        this.shadowRoot.append(this.saturationDiv)
        this.shadowRoot.append(this.hueDiv)

        // Send the initial color update
        document.addEventListener('DOMContentLoaded', sendColorChanged)
    }

    connectedCallback() {
        if (this.hasAttribute('h')) {
            this.hueValue = parseInt(this.getAttribute('h'), 10)
        } else {
            this.hueValue = 140
        }
        if (this.hasAttribute('s')) {
            this.saturationValue = parseInt(this.getAttribute('s'), 10)
        } else {
            this.saturationValue = 60
        }
        if (this.hasAttribute('l')) {
            this.lightnessValue = parseInt(this.getAttribute('l'), 10)
        } else {
            this.lightnessValue = 30
        }

        this.updateHSL()
        this.hueSlider.setAttribute('value', this.hueValue)
        this.saturationSlider.setAttribute('value', this.saturationValue)
        this.lightnessSlider.setAttribute('value', this.lightnessValue)
    }

    static get observedAttributes() {
        return ['h', 's', 'l']
    }

    attributeChangedCallback(attr, old_value, new_value) {
        if (old_value !== null) {
            console.log(`${attr} - ${old_value} - ${new_value}`)
            if (old_value !== new_value) {
                if (attr === 'h') {
                    this.hueValue = new_value
                    this.hueSlider.setAttribute('value', this.hueValue)
                    console.log(`h now: ${this.hueValue}`)
                } else if (attr === 's') {
                    this.saturationValue = new_value
                    this.saturationSlider.setAttribute(
                        'value',
                        this.saturationValue
                    )
                    console.log(`s now: ${this.saturationValue}`)
                } else if (attr === 'l') {
                    this.lightnessValue = new_value
                    this.lightnessSlider.setAttribute(
                        'value',
                        this.lightnessValue
                    )
                    console.log(`l now: ${this.lightnessValue}`)
                }
                this.updateHSL()
            }
        }
    }
}

customElements.define('hsla-picker', hslaPicker)

////////////////////////////////////////////////////
// This would to in the main script

const handleColorChanged = (event) => {
    const previewBlock = document.getElementById('preview-block')
    previewBlock.style.backgroundColor = event.detail.hslaString
    console.log(event.detail)
}

const handleTheSetterClick = (event) => {
    console.log('got setter click')
    const thePicker = document.getElementById('the-picker')

    console.log(event.target)
    thePicker.setAttribute('h', event.target.getAttribute('h'))
    thePicker.setAttribute('s', event.target.getAttribute('s'))
    thePicker.setAttribute('l', event.target.getAttribute('l'))
    // thePicker.saturationValue = event.target.getAttribute('s')
    // thePicker.lightnessValue = event.target.getAttribute('l')
    // console.log(thePicker)
    // thePicker.hueSlider.setAttribute('value', event.target.getAttribute('h'))
    //thePicker.saturationSlider.setAttribute(
    // 'value',
    // event.target.getAttribute('s')
    // )
    // thePicker.lightnessSlider.setAttribute(
    // 'value',
    // event.target.getAttribute('l')
    // )
    // thePicker.updateHSL()
}

const init = () => {
    document.addEventListener('color-changed', handleColorChanged)
    document
        .getElementById('the-setter')
        .addEventListener('click', handleTheSetterClick)
}

document.addEventListener('DOMContentLoaded', init)
