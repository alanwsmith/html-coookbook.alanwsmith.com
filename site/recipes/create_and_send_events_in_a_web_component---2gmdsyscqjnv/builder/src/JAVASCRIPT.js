///////////////////////////////////////////////////////
// The Component
//
class EventExample extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        const sendEvent = (name, value) => {
            console.log('here')
            this.dispatchEvent(
                new CustomEvent(name, {
                    detail: { value: value },
                    composed: true,
                    bubbles: true,
                })
            )
        }

        const button = document.createElement('button')
        button.innerHTML = 'Click Here'
        button.addEventListener('click', (event) => {
            sendEvent('clicked', { event })
        })

        // const sendEvent = (event) => {
        //     console.log('EVENT SENT')
        //     this.button.dispatchEvent(
        //         new CustomEvent('clicked', {
        //             detail: {
        //                 value: new Date().getTime(),
        //             },
        //             composed: true,
        //             bubbles: true,
        //         })
        //     )
        // }
        // this.button = document.createElement('button')
        // this.button.innerHTML = 'Click Here'
        // this.button.addEventListener('click', sendEvent)

        // // This works too
        // this.button = document.createElement('button')
        // this.button.innerHTML = 'Click Here'
        // this.button.addEventListener('click', (event) => {
        //     console.log('SEND')
        //     this.button.dispatchEvent(
        //         new CustomEvent('clicked', {
        //             detail: {
        //                 value: new Date().getTime(),
        //             },
        //             composed: true,
        //             bubbles: true,
        //         })
        //     )
        // })

        // // This works too
        // const sendEvent = (event) => {
        //     const componentEvent = new CustomEvent('clicked', {
        //         detail: {
        //             value: new Date().getTime(),
        //         },
        //         composed: true,
        //         bubbles: true,
        //     })
        //     this.dispatchEvent(componentEvent)
        // }
        // const button = document.createElement('button')
        // button.addEventListener('click', sendEvent)
        // button.innerHTML = 'Click Here'

        // // This works too
        // const sendEvent = (event) => {
        //     this.dispatchEvent(
        //         new CustomEvent('clicked', {
        //             detail: {
        //                 value: new Date().getTime(),
        //             },
        //             composed: true,
        //             bubbles: true,
        //         })
        //     )
        // }
        // const button = document.createElement('button')
        // button.innerHTML = 'Click Here'
        // button.addEventListener('click', sendEvent)

        // const button = document.createElement('button')
        // // button.addEventListener('click', sendEvent)
        // button.innerHTML = 'Click Here'
        // const sendTheEvent = (event) => {
        //     console.log('cccccccccc')
        //     const theEventThing = new CustomEvent('clicked', {
        //         detail: {
        //             value: new Date().getTime(),
        //             composed: true,
        //             bubbles: true,
        //         },
        //     })
        //     console.log('werwer')
        //     button.dispatchEvent(theEventThing)
        //     console.log('werwer')
        // }
        // button.addEventListener('click', sendTheEvent)

        // this.addEventListener('click', (event) => {
        //     console.log('wwwwwwwwwwwwwwww')
        //     const newEvent = new CustomEvent('clicked', {
        //         detail: {
        //             value: new Date().getTime(),
        //             composed: true,
        //             bubbles: true,
        //         },
        //     })
        //     this.dispatchEvent(newEvent)
        // })

        // this.addEventListener('click', (event) => {
        //     console.log('wwwwwwwwwwwwwwww')
        //     const newEvent = new CustomEvent('clicked', {
        //         detail: {
        //             value: new Date().getTime(),
        //             composed: true,
        //             bubbles: true,
        //         },
        //     })
        //     this.dispatchEvent(newEvent)
        // })

        // button.addEventListener('click', (event) => {
        //     console.log('wwwwwwwwwwwwwwww')
        //     button.dispatchEvent(
        //         new CustomEvent('componentClicked', {
        //             detail: {
        //                 value: new Date().getTime(),
        //                 composed: true,
        //                 bubbles: true,
        //             },
        //         })
        //     )
        // })

        // button.addEventListener('click', () => {
        //     console.log('here')
        //     button.dispatchEvent(
        //         new CustomEvent('componentClicked', {
        //             detail: {
        //                 value: new Date().getTime(),
        //                 composed: true,
        //                 bubbles: true,
        //             },
        //         })
        //     )
        // })

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

const handleComponentClicked = (event) => {
    console.log('EVENT RECEIVED')
    const display = document.getElementById('display')
    display.innerHTML = `New Value: ${event.detail.value}`
}

document.addEventListener('clicked', handleComponentClicked)
