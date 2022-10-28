class EventExample extends HTMLElement {
    constructor() {
        super()

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

        this.attachShadow({ mode: 'open' })
        const wrapper = document.createElement('span')
        wrapper.innerText = 'Hello, Component!'

        this.shadowRoot.append(wrapper)

        // const bbb = new Event('bbb')
        const bbb = new CustomEvent('bbb', {
            detail: 'this is the detail',
            // cancelable: true,
            composed: true,
            bubbles: true,
        })

        this.addEventListener('bbb', (e) => {
            console.log(`caught locallly: ${e.detail}`)
        })
        // this.addEventListener('bbb', (e) => {}, false)

        setTimeout(() => {
            console.log('timout triggered')
            this.dispatchEvent(bbb)
        }, 1000)
    }
}

customElements.define('event-example', EventExample)

const hb = (event) => {
    console.log(event)
}

document.addEventListener('bbb', hb)
