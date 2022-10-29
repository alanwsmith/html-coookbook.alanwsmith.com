const itemList = [
    'Roboto',
    'Open Sans',
    'Noto Sans JP',
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

const activeList = []

const updateItems = (filter) => {
    const itemWrapper = document.getElementById('selections')
    while (itemWrapper.children.length > 0) {
        itemWrapper.children[0].remove()
    }
    if (filter) {
        activeList.length = 0
        const pattern = new RegExp(filter, 'gi')
        itemList.forEach((item) => {
            const compareItem = item.toLowerCase()
            if (item.toLowerCase().match(pattern)) {
                activeList.push(item)
            }
        })
    }
    const itemCount = Math.min(5, activeList.length)
    for (let i = 0; i < itemCount; i++) {
        const newItem = document.createElement('button')
        // TODO: Make this a valid key
        newItem.id = `item--${activeList[i]}`
        newItem.innerHTML = activeList[i]
        itemWrapper.appendChild(newItem)
    }
}

const handleClick = (event) => {
    console.log(event)
}

const handleInput = (event) => {
    console.log(event)
    const textFilter = document
        .getElementById('font-input-field')
        .innerText.trim()
    console.log(`-${textFilter}-`)
    updateItems(textFilter)
}

const handleKeyUp = (event) => {
    if (event.key.toLowerCase() === 'enter') {
        console.log(activeList[0])
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



const kickoff = () => {
    console.log(`Kickoff: ${new Date().getTime()}`)
    // clear for refreshes during testing
    document.getElementById('selection-text-field').value = ''
    document.getElementById('selections').addEventListener('click', handleClick)
    document
        .getElementById('selection-text-field')
        .addEventListener('input', handleInput)

    document
        .getElementById('selection-text-field')
        .addEventListener('keyup', handleKeyUp)

    updateItems()
}

document.addEventListener('DOMContentLoaded', kickoff)
