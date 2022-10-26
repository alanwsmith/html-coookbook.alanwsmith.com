const options = [
    { key: 'roboto', value: 'Roboto' },
    { key: 'opensans', value: 'OpenSans' },
    { key: 'montserrat', value: 'Montserrat' },
    { key: 'lato', value: 'Lato' },
    { key: 'poppins', value: 'Poppins' },
    { key: 'sourcesanspro', value: 'Source Sans Pro' },
    { key: 'robotocondensed', value: 'Roboto Condensed' },
    { key: 'oswald', value: 'Oswald' },
    { key: 'robotomono', value: 'Roboto Mono' },
    { key: 'raleway', value: 'Raleway' },
    { key: 'inter', value: 'Inter' },
    { key: 'notosans', value: 'Noto Sans' },
    { key: 'ubuntu', value: 'Ubuntu' },
    { key: 'mukta', value: 'Mukta' },
    { key: 'robotoslab', value: 'Roboto Slab' },
    { key: 'nunito', value: 'Nunito' },
    { key: 'playfairdisplay', value: 'Playfair Display' },
    { key: 'ptsans', value: 'PT Sans' },
    { key: 'nunitosans', value: 'Nunito Sans' },
    { key: 'merriweather', value: 'Merriweather' },
    { key: 'rubik', value: 'Rubik' },
    { key: 'notosanskr', value: 'Noto Sans KR' },
    { key: 'worksans', value: 'Work Sans' },
    { key: 'lora', value: 'Lora' },
    { key: 'firasans', value: 'Fira Sans' },
]

// // let timeoutIdForBlurTransition = null
// const fullList = []
// const fullKeys = {}
// const currentList = []

// TODO: Move stuff into this:
const state = {
    activeSelection: '',
    // fullList: [],
    fullKeys: {},
    // currentList: [],
    // timeoutIdForBlurTransition: null,
}

const prepKeys = () => {
    options.forEach((option) => {
        state.fullKeys[option.key] = option.value
    })
}

const handleInputFocus = (event) => {
    // if (timeoutIdForBlurTransition) {
    //     clearTimeout(timeoutIdForBlurTransition)
    // }
    event.target.innerText = ''
    const selectionsEl = document.getElementById('awsselectmenu--selections')
    while (selectionsEl.firstChild) {
        selectionsEl.removeChild(selectionsEl.firstChild)
    }
    for (let i = 0; i < 6; i++) {
        const newItem = document.createElement('button')
        const buttonId = `awsselectmenu--choice-id--${options[i].key}`
        newItem.id = buttonId
        newItem.innerHTML = options[i].value
        // // newItem.addEventListener('focus', handleButtonFocus)
        // // newItem.addEventListener('blur', handleButtonBlur)
        // // newItem.addEventListener('click', handleButtonClick)
        selectionsEl.appendChild(newItem)
        // // document
        // //     .getElementById(buttonId)
        // //     .addEventListener('click', handleButtonClick)
        // // document.getElementById(buttonId).addEventListener('click', () => {
        // //     console.log('asdfasdfasdf')
        // // })
    }
}

// const handleButtonClick = (event) => {
//     console.log('click')
//     const selectionsEl = document.getElementById('selectionsWrapper')
//     while (selectionsEl.firstChild) {
//         selectionsEl.removeChild(selectionsEl.firstChild)
//     }
//     const parts = event.target.id.split('--')
//     console.log(parts)
//     // state.activeSelection = fullKeys[parts[1]]
//     // console.log(state.activeSelection)
//     // document.getElementById(
//     //     'active-selection'
//     // ).innerText = `Active Selection: ${state.activeSelection}`
//     // // document.getElementById('selection-text-field').innerText =
//     //     state.activeSelection
// }

// const handleButtonFocus = () => {
//     if (timeoutIdForBlurTransition) {
//         clearTimeout(timeoutIdForBlurTransition)
//     }
// }

// const handleButtonBlur = () => {
//     if (timeoutIdForBlurTransition) {
//         clearTimeout(timeoutIdForBlurTransition)
//     }
//     timeoutIdForBlurTransition = setTimeout(() => {
//         const selectionsEl = document.getElementById('selectionsWrapper')
//         while (selectionsEl.firstChild) {
//             selectionsEl.removeChild(selectionsEl.firstChild)
//         }
//     }, 30)
// }

// // This closes things if you don't tab over to a button
// // Setting time timeout at 30ms was too fast. The
// // buttons closed before the click registered.
// const handleInputBlur = () => {
//     if (timeoutIdForBlurTransition) {
//         clearTimeout(timeoutIdForBlurTransition)
//     }
//     timeoutIdForBlurTransition = setTimeout(() => {
//         const selectionsEl = document.getElementById('selectionsWrapper')
//         while (selectionsEl.firstChild) {
//             selectionsEl.removeChild(selectionsEl.firstChild)
//         }
//         document.getElementById(
//             'active-selection'
//         ).innerText = `Active Selection: ${state.activeSelection}`
//     }, 150)
// }

const makeSelection = () => {
    // TODO: deal with if there isn't a valid option
    console.log('Making selection')
    const theInput = document.getElementById('selection-text-field')
    console.log(theInput.innerText)
    theInput.innerText = ''
}

const handleKeyup = (event) => {
    // TODO: Handle tab and escape
    const pressedKey = event.key.toLowerCase()
    if (pressedKey === 'enter') {
        makeSelection()
    } else {
        state.currentSearch = document.getElementById(
            'selection-text-field'
        ).innerText
        console.log(state.currentSearch)
    }
}

const removeSelections = () => {
    const selectionsEl = document.getElementById('awsselectmenu--selections')
    while (selectionsEl.firstChild) {
        selectionsEl.removeChild(selectionsEl.firstChild)
    }
}

const setSelectionFromKey = (key) => {
    state.activeKey = key
    console.log(state.activeKey)
    removeSelections()
    setPlaceholder()
}

const setPlaceholder = () => {
    const inputField = document.getElementById('awsselectmenu--search-text')
    if (state.activeKey) {
        inputField.innerText = state.fullKeys[state.activeKey]
    } else {
        inputField.innerText = 'Select a font'
    }
}

// This is here to deal with clicking away from
// the input field so it can be closed without
// haveing to set a timer to keep the buttons from
// closing for a bit before they disappear
const handlePageClick = (event) => {
    const clickId = event.target.id
    if (clickId) {
        const idParts = clickId.split('--')
        if (idParts[0] !== 'awsselectmenu') {
            removeSelections()
        } else {
            if (idParts[1] === 'choice-id') {
                setSelectionFromKey(idParts[2])
            }
        }
    } else {
        removeSelections()
    }
}

const kickoff = () => {
    console.log(`Kickoff: ${new Date().getTime()}`)
    prepKeys()
    document
        .getElementById('awsselectmenu--search-text')
        .addEventListener('focus', handleInputFocus)

    // document
    //     .getElementById('selection-text-field')
    //     .addEventListener('blur', handleInputBlur)

    // document
    //     .getElementById('selection-text-field')
    //     .addEventListener('keyup', handleKeyup)

    // document
    //     .getElementById('selectionsWrapper')
    //     .addEventListener('click', handleButtonClick)

    document.addEventListener('click', handlePageClick)
    setPlaceholder()
}

document.addEventListener('DOMContentLoaded', kickoff)
