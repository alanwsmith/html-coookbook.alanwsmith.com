///////////////////////////////////////////////////////
// The Component
//
class EventExample extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        // const event = new Event('build')
        // // Listen for the event.
        // this.addEventListener(
        //     'build',
        //     (e) => {
        //         console.log('asdf')
        //     },
        //     false
        // )
        // // Dispatch the event.
        // this.dispatchEvent(event)

        // const wrapper = document.createElement('span')
        // wrapper.innerText = 'Hello, Component!'

        const sendEvent = (event) => {
            const componentEvent = new CustomEvent('componentActivated', {
                detail: {
                    value: new Date().getTime(),
                },
                composed: true,
                bubbles: true,
            })
            this.dispatchEvent(componentEvent)
        }

        const button = document.createElement('button')
        button.addEventListener('click', sendEvent)
        button.innerHTML = 'Click Here'

        // () => {

        // // const bbb = new Event('bbb')
        // const bbb = new CustomEvent('bbb', {
        //     detail: 'this is the detail',
        //     // cancelable: true,
        //     composed: true,
        //     bubbles: true,
        // })
        // this.addEventListener('bbb', (e) => {
        //     console.log(`caught locallly: ${e.detail}`)
        // })
        // // this.addEventListener('bbb', (e) => {}, false)
        // setTimeout(() => {
        //     console.log('timout triggered')
        //     this.dispatchEvent(bbb)
        // }, 1000)

        this.shadowRoot.append(button)
    }
}

customElements.define('event-example', EventExample)

///////////////////////////////////////////////////////
// Global

const updateValue = (event) => {
    const display = document.getElementById('display')
    display.innerHTML = `New Value: ${event.detail.value}`
}

document.addEventListener('componentActivated', updateValue)
