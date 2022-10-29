class hslaPicker extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        this.hueValue = 180
        this.saturationValue = 50
        this.lightnessValue = 50
        this.alphaValue = 1

        const assembleHSL = () => {
            const hslValue = `hsla(${this.hueValue}, ${this.saturationValue}%, ${this.lightnessValue}%, ${this.alphaValue})`
            console.log(hslValue)
            return hslValue
        }

        const updateHSL = () => {
            const hslValue = `hsla(${this.hueValue}, ${this.saturationValue}%, ${this.lightnessValue}%, ${this.alphaValue})`
            console.log(hslValue)
            display.style.backgroundColor = hslValue
        }

        const display = document.createElement('div')
        // display.style.backgroundColor = assembleHSL()
        display.style.width = '100px'
        display.style.height = '100px'
        updateHSL()
        // display.innerHTML = 'x'

        const handleHueInput = (event) => {
            console.log(event.target.value)
            this.hueValue = event.target.value
            updateHSL()
        }

        const handleSaturationInput = (event) => {
            console.log(event.target.value)
            this.saturationValue = event.target.value
            updateHSL()
        }

        const hue = document.createElement('input')
        hue.setAttribute('id', 'hue-slider')
        hue.setAttribute('name', 'hue-slider')
        hue.setAttribute('type', 'range')
        hue.setAttribute('min', '0')
        hue.setAttribute('max', '360')
        hue.setAttribute('size', '190')
        hue.style.width = '200px'
        hue.addEventListener('input', handleHueInput)

        const saturation = document.createElement('input')
        saturation.setAttribute('id', 'hue-slider')
        saturation.setAttribute('name', 'hue-slider')
        saturation.setAttribute('type', 'range')
        saturation.setAttribute('min', '0')
        saturation.setAttribute('max', '100')
        saturation.setAttribute('size', '190')
        saturation.style.width = '200px'
        saturation.addEventListener('input', handleSaturationInput)

        this.shadowRoot.append(display)
        this.shadowRoot.append(hue)
        this.shadowRoot.append(saturation)
    }
}

customElements.define('hsla-picker', hslaPicker)
