const rawItems = [
    'Roboto',
    'OpenSans',
    'Montserrat',
    'Lato',
    'Poppins',
    'Source Sans Pro',
    'Roboto Condensed',
    'Oswald',
    'Roboto Mono',
    'Raleway',
    'Inter',
    'Noto Sans',
    'Ubuntu',
    'Mukta',
    'Roboto Slab',
    'Nunito',
    'Playfair Display',
    'PT Sans',
    'Nunito Sans',
    'Merriweather',
    'Rubik',
    'Noto Sans KR',
    'Work Sans',
    'Lora',
    'Fira Sans',
]

let timeoutIdForBlurTransition = null

const fullList = []
const currentList = []

// let activeFont = ''

// Setup ids for each item
const prepIds = () => {
    for (const rawItem of rawItems) {
        fullList.push({
            id: rawItem.toLowerCase().replaceAll(/ /g, ''),
            name: rawItem,
        })
    }
}

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
        newItem.id = `selection--${fullList[i].id}`
        newItem.innerHTML = fullList[i].name
        newItem.className = 'selection--button'
        newItem.addEventListener('focus', handleButtonFocus)
        newItem.addEventListener('blur', handleButtonBlur)
        selections.appendChild(newItem)
    }
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
    prepIds()
    document
        .getElementById('font-input-field')
        .addEventListener('focus', handleInputFocus)
    document
        .getElementById('font-input-field')
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
