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

let timeoutIdForBlurTransition = null

const fullList = []
const fullKeys = {}
const currentList = []

let state = {
    activeSelection: '',
}

// let activeFont = ''

// // Setup ids for each item
// const prepIds = () => {
//     for (const rawItem of rawItems) {
//         const itemId = rawItem.toLowerCase().replaceAll(/ /g, '')
//         fullList.push({
//             id: itemId,
//             name: rawItem,
//         })
//         fullKeys[itemId] = rawItem
//     }
// }

// const clearItems = () => {
//     // Clear any existing items
//     let itemWrapper = document.getElementById('menuItems')
//     while (itemWrapper.firstChild) {
//         console.log('x')
//         itemWrapper.removeChild(itemWrapper.firstChild)
//     }
// }

// const updateItems = (filter) => {
//     // Get the wrapper
//     let itemWrapper = document.getElementById('menuItems')
//     // Clear any existing items
//     activeList.length = 0
//     while (itemWrapper.firstChild) {
//         console.log('x')
//         itemWrapper.removeChild(itemWrapper.firstChild)
//     }
//     // Only add items if there's a filter
//     if (filter) {
//         const pattern = new RegExp(filter, 'gi')
//         listIds.forEach((item) => {
//             const compareItem = item.name.toLowerCase()
//             if (item.name.toLowerCase().match(pattern)) {
//                 activeList.push(item)
//             }
//         })
//     }
//     // Output zero or more things
//     const itemCount = Math.min(5, activeList.length)
//     for (let i = 0; i < itemCount; i++) {
//         const newItem = document.createElement('button')
//         newItem.id = `item--${activeList[i].id}`
//         newItem.innerHTML = activeList[i].name
//         itemWrapper.appendChild(newItem)
//     }
// }

// const handleMenuClick = (event) => {
//     console.log(event.target.id)
//     idParts = event.target.id.split('--')
//     for (const listItem of listIds) {
//         if (idParts[1] === listItem.id) {
//             setActiveItem(listItem.name)
//             updateItems()
//         }
//     }
//     // updateItems(null)
//     // document.getElementById('font-input-field').contentEditable = false
//     // document.getElementById('font-input-field').contentEditable = true
//     // document.getElementById('test-focus-target').focus()
//     // document.getElementById('font-input-field').blur()
// }

// const handleMenuInput = (event) => {
//     console.log(event)
//     const textFilter = document
//         .getElementById('font-input-field')
//         .innerText.trim()
//     updateItems(textFilter)
// }

// const setActiveItem = (itemName) => {
//     console.log(`The new item is: ${itemName}`)
//     document.getElementById('active-font').innerText = itemName
//     document.getElementById('font-input-field').innerText = itemName
//     activeList.length = 0
//     activeFont = itemName
//     // See this: for the bounce here to fix the safari bug about
//     // things not bluring
//     document.getElementById('font-input-field').blur()
//     document.getElementById(
//         'tmp-focus-target-for-safari-fix'
//     ).contentEditable = true
//     document.getElementById('tmp-focus-target-for-safari-fix').focus()
//     document.getElementById('tmp-focus-target-for-safari-fix').blur()
//     document.getElementById(
//         'tmp-focus-target-for-safari-fix'
//     ).contentEditable = false
// }

// const handleKeyUp = (event) => {
//     // TODO: Handle escape
//     // TODO: Handle arrow keys
//     if (event.key.toLowerCase() === 'enter') {
//         console.log('Caught enter')
//         if (activeList[0]) {
//             setActiveItem(activeList[0].name)
//             updateItems()
//         }
//         document.getElementById('font-input-field').innerText = document
//             .getElementById('font-input-field')
//             .innerText.replaceAll(/\n/g, '')
//     }
// }

const handleInputFocus = (event) => {
    if (timeoutIdForBlurTransition) {
        clearTimeout(timeoutIdForBlurTransition)
    }
    event.target.innerText = ''
    const selectionsEl = document.getElementById('selections')
    while (selectionsEl.firstChild) {
        selectionsEl.removeChild(selectionsEl.firstChild)
    }
    for (let i = 0; i < 5; i++) {
        const newItem = document.createElement('button')
        newItem.id = `option--${options[i].key}`
        newItem.innerHTML = options[i].value
        newItem.className = 'option--button'
        newItem.addEventListener('focus', handleButtonFocus)
        newItem.addEventListener('blur', handleButtonBlur)
        newItem.addEventListener('click', handleButtonClick)
        selections.appendChild(newItem)
    }
}

const handleButtonClick = (event) => {
    const selectionsEl = document.getElementById('selections')
    while (selectionsEl.firstChild) {
        selectionsEl.removeChild(selectionsEl.firstChild)
    }
    const parts = event.target.id.split('--')
    state.activeSelection = fullKeys[parts[1]]
    console.log(state.activeSelection)
    document.getElementById(
        'active-selection'
    ).innerText = `Active Selection: ${state.activeSelection}`
    document.getElementById('selection-text-field').innerText =
        state.activeSelection
}

const handleButtonFocus = () => {
    if (timeoutIdForBlurTransition) {
        clearTimeout(timeoutIdForBlurTransition)
    }
}

const handleButtonBlur = () => {
    if (timeoutIdForBlurTransition) {
        clearTimeout(timeoutIdForBlurTransition)
    }
    timeoutIdForBlurTransition = setTimeout(() => {
        const selectionsEl = document.getElementById('selections')
        while (selectionsEl.firstChild) {
            selectionsEl.removeChild(selectionsEl.firstChild)
        }
    }, 30)
}

const handleInputBlur = () => {
    console.log('-- Input blur')
    if (timeoutIdForBlurTransition) {
        clearTimeout(timeoutIdForBlurTransition)
    }
    timeoutIdForBlurTransition = setTimeout(() => {
        const selectionsEl = document.getElementById('selections')
        while (selectionsEl.firstChild) {
            selectionsEl.removeChild(selectionsEl.firstChild)
        }
        document.getElementById(
            'active-selection'
        ).innerText = `Active Selection: ${state.activeSelection}`
    }, 30)
}

// const handleBlur = (event) => {
//     event.target.innerText = activeFont
//     // if (timeoutIdFixForBlur) {
//     //     clearTimeout(timeoutIdFixForBlur)
//     // }
//     // timeoutIdFixForBlur = setTimeout(() => {
//     //     event.target.innerText = activeFont
//     //     let itemWrapper = document.getElementById('menuItems')
//     //     while (itemWrapper.firstChild) {
//     //         console.log('x')
//     //         itemWrapper.removeChild(itemWrapper.firstChild)
//     //     }
//     // }, 100)
// }

const kickoff = () => {
    console.log(`Kickoff: ${new Date().getTime()}`)
    // prepIds()
    document
        .getElementById('selection-text-field')
        .addEventListener('focus', handleInputFocus)
    document
        .getElementById('selection-text-field')
        .addEventListener('blur', handleInputBlur)

    // document
    //     .getElementById('menuItems')
    //     .addEventListener('click', handleMenuClick)
    // document
    //     .getElementById('menuWrapper')
    //     .addEventListener('input', handleMenuInput)
    // document
    //     .getElementById('menuWrapper')
    //     .addEventListener('keyup', handleKeyUp)

    // updateItems()
}

document.addEventListener('DOMContentLoaded', kickoff)
