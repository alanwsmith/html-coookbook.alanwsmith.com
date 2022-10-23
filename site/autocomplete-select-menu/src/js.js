const itemList = [
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

const activeList = []
const listIds = []

// Setup ids for each item
const prepIds = () => {
    for (const item of itemList) {
        listIds.push({
            id: item.toLowerCase().replaceAll(/ /g, ''),
            name: item,
        })
    }
}

const updateItems = (filter) => {
    // Get the wrapper
    let itemWrapper = document.getElementById('menuItems')

    // Clear any existing items
    activeList.length = 0
    while (itemWrapper.firstChild) {
        console.log('x')
        itemWrapper.removeChild(itemWrapper.firstChild)
    }

    // Only add items if there's a filter
    if (filter) {
        const pattern = new RegExp(filter, 'gi')
        listIds.forEach((item) => {
            const compareItem = item.name.toLowerCase()
            if (item.name.toLowerCase().match(pattern)) {
                activeList.push(item)
            }
        })
    }

    // Output zero or more things
    const itemCount = Math.min(5, activeList.length)
    for (let i = 0; i < itemCount; i++) {
        const newItem = document.createElement('button')
        newItem.id = `item--${activeList[i].id}`
        newItem.innerHTML = activeList[i].name
        itemWrapper.appendChild(newItem)
    }
}

const handleMenuClick = (event) => {
    console.log(event.target.id)
    idParts = event.target.id.split('--')
    for (const listItem of listIds) {
        if (idParts[1] === listItem.id) {
            setActiveItem(listItem.name)
        }
    }
    updateItems(null)
}

const handleMenuInput = (event) => {
    console.log(event)
    const textFilter = document
        .getElementById('font-input-field')
        .innerText.trim()
    updateItems(textFilter)

    // console.log(`-${textFilter}-`)
    // if (textFilter.length > 0) {
    //     updateItems(textFilter)
    // } else {
    //     console.log('asdf')
    //     // activeList.length = 0
    //     updateItems(null)
    // }
}

const setActiveItem = (itemName) => {
    console.log(`The new item is: ${itemName}`)
    document.getElementById('active-font').innerText = itemName
    document.getElementById('font-input-field').innerText = ''
    activeList.length = 0
}

const handleKeyUp = (event) => {
    // TODO: Handle escape
    // TODO: Handle arrow keys
    // TODO: Handle if you delete all the way back it should clear
    if (event.key.toLowerCase() === 'enter') {
        console.log('Caught enter')
        if (activeList[0]) {
            setActiveItem(activeList[0].name)

            updateItems()
        }
        document.getElementById('font-input-field').innerText = document
            .getElementById('font-input-field')
            .innerText.replaceAll(/\n/g, '')
    }
}

const kickoff = () => {
    console.log(`Kickoff: ${new Date().getTime()}`)
    prepIds()
    document
        .getElementById('menuItems')
        .addEventListener('click', handleMenuClick)
    document
        .getElementById('menuWrapper')
        .addEventListener('input', handleMenuInput)

    document
        .getElementById('menuWrapper')
        .addEventListener('keyup', handleKeyUp)
    updateItems()
}
document.addEventListener('DOMContentLoaded', kickoff)
