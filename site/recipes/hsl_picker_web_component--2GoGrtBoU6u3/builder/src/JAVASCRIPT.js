class hslaPicker extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.hueValue = 180
        this.saturationValue = 50
        this.lightnessValue = 50
        this.alphaValue = 1

        // const assembleHSL = () => {
        //     const hslValue = `hsla(${this.hueValue}, ${this.saturationValue}%, ${this.lightnessValue}%, ${this.alphaValue})`
        //     // console.log(hslValue)
        //     return hslValue
        // }

        const updateHSL = () => {
            const hslValue = `hsla(${this.hueValue}, ${this.saturationValue}%, ${this.lightnessValue}%, ${this.alphaValue})`
            // console.log(hslValue)
            display.style.backgroundColor = hslValue
            updateHueDisplay()
            updateSaturationDisplay()
            updateLightnessDisplay()
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
            console.log(this.saturationDisplay.style.background)
        }

        const updateLightnessDisplay = () => {
            // console.log(this.saturationValue)
            // console.log(this.hueValue)

            this.lightnessDisplay.style.background = `linear-gradient(
            0.25turn,
            hsl(${this.hueValue}, ${this.saturationValue}%, 0%),
            hsl(${this.hueValue}, ${this.saturationValue}%, 50%),
            hsl(${this.hueValue}, ${this.saturationValue}%, 100%))`
            console.log(this.lightnessDisplay.style.background)
        }

        const handleHueInput = (event) => {
            // console.log(event.target.value)
            this.hueValue = event.target.value
            updateHSL()
        }

        const handleSaturationInput = (event) => {
            // console.log(event.target.value)
            this.saturationValue = event.target.value
            updateHSL()
        }

        const handleLightnessInput = (event) => {
            // console.log(event.target.value)
            this.lightnessValue = event.target.value
            updateHSL()
        }

        const display = document.createElement('div')
        display.style.width = '180px'
        display.style.height = '30px'
        display.style.border = '2px solid black'

        this.hueDiv = document.createElement('div')
        // hueDiv.style.position = 'relative'

        const hueSlider = document.createElement('input')
        hueSlider.setAttribute('id', 'hue-slider')
        hueSlider.setAttribute('name', 'hue-slider')
        hueSlider.setAttribute('type', 'range')
        hueSlider.setAttribute('min', '0')
        hueSlider.setAttribute('max', '360')
        // hueSlider.setAttribute('size', '180')
        hueSlider.style.width = '180px'
        // hueSlider.style.position = 'absolute'
        hueSlider.style.padding = '0'
        hueSlider.style.margin = '0'
        hueSlider.addEventListener('input', handleHueInput)

        this.hueDisplay = document.createElement('div')
        this.hueDisplay.style.width = '180px'
        this.hueDisplay.style.height = '18px'
        this.hueDisplay.style.padding = '0'
        this.hueDisplay.style.margin = '0'
        // hueDisplay.style.position = 'absolute'
        this.hueDisplay.style.left = '10px'

        this.hueDiv.appendChild(this.hueDisplay)
        this.hueDiv.appendChild(hueSlider)

        // background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
        // linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
        // linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
        // background: linear-gradient(#e66465, #9198e5);
        // background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);

        this.saturationDiv = document.createElement('div')
        // this.saturationDiv.style.poisition = 'relative'
        this.saturationDisplay = document.createElement('div')
        this.saturationDisplay.style.width = '180px'
        this.saturationDisplay.style.height = '18px'
        this.saturationDisplay.style.padding = '0'
        this.saturationDisplay.style.margin = '0'
        // this.saturationDisplay.style.position = 'absolute'
        this.saturationDisplay.style.left = '10px'
        this.saturationSlider = document.createElement('input')
        this.saturationSlider.setAttribute('id', 'saturation-slider')
        this.saturationSlider.setAttribute('name', 'saturation-slider')
        this.saturationSlider.setAttribute('type', 'range')
        this.saturationSlider.setAttribute('min', '0')
        this.saturationSlider.setAttribute('max', '100')
        this.saturationSlider.setAttribute('size', '190')
        this.saturationSlider.style.width = '180px'
        this.saturationSlider.addEventListener('input', handleSaturationInput)
        this.saturationDiv.appendChild(this.saturationDisplay)
        this.saturationDiv.appendChild(this.saturationSlider)

        this.lightnessDiv = document.createElement('div')
        // this.lightnessDiv.style.poisition = 'relative'
        this.lightnessDisplay = document.createElement('div')
        this.lightnessDisplay.style.width = '180px'
        this.lightnessDisplay.style.height = '18px'
        this.lightnessDisplay.style.padding = '0'
        this.lightnessDisplay.style.margin = '0'

        // this.saturationDisplay.style.position = 'absolute'
        this.lightnessSlider = document.createElement('input')
        this.lightnessSlider.setAttribute('id', 'lightness-slider')
        this.lightnessSlider.setAttribute('name', 'lightness-slider')
        this.lightnessSlider.setAttribute('type', 'range')
        this.lightnessSlider.setAttribute('min', '0')
        this.lightnessSlider.setAttribute('max', '100')
        this.lightnessSlider.style.width = '180px'
        this.lightnessSlider.addEventListener('input', handleLightnessInput)
        this.lightnessDiv.appendChild(this.lightnessDisplay)
        this.lightnessDiv.appendChild(this.lightnessSlider)

        updateHSL()
        this.shadowRoot.append(display)
        this.shadowRoot.append(this.lightnessDiv)
        this.shadowRoot.append(this.saturationDiv)
        this.shadowRoot.append(this.hueDiv)
    }
}

customElements.define('hsla-picker', hslaPicker)
