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
const listKeys = []

// Setup keys that can be used as IDs
const prepKeys = () => {
    for (const item of itemList) {
        // listKeys.push({`${item.toLowerCase().replaceAll(/ /g, '')}`: item })
        listKeys.push({
            id: item.toLowerCase().replaceAll(/ /g, ''),
            name: item,
        })
    }
}

const updateItems = (filter) => {
    // Clear any existing items
    const itemWrapper = document.getElementById('menuItems')
    while (itemWrapper.children.length > 0) {
        itemWrapper.children[0].remove()
    }

    // Only add stuff if there's input to filter off of
    if (filter) {
        activeList.length = 0
        const pattern = new RegExp(filter, 'gi')
        listKeys.forEach((item) => {
            const compareItem = item.name.toLowerCase()
            if (item.name.toLowerCase().match(pattern)) {
                activeList.push(item)
            }
        })
    }

    // // Only add stuff if there's input to filter off of
    // if (filter) {
    //     activeList.length = 0
    //     const pattern = new RegExp(filter, 'gi')
    //     itemList.forEach((item) => {
    //         const compareItem = item.toLowerCase()
    //         if (item.toLowerCase().match(pattern)) {
    //             activeList.push(item)
    //         }
    //     })
    // }

    const itemCount = Math.min(5, activeList.length)
    for (let i = 0; i < itemCount; i++) {
        const newItem = document.createElement('button')
        newItem.id = `item--${activeList[i].id}`
        newItem.innerHTML = activeList[i].name
        itemWrapper.appendChild(newItem)
    }
}

const handleMenuClick = (event) => {
    console.log(event)
}

const handleMenuInput = (event) => {
    console.log(event)
    const textFilter = document
        .getElementById('font-input-field')
        .innerText.trim()
    console.log(`-${textFilter}-`)
    updateItems(textFilter)
}

const handleKeyUp = (event) => {
    // TODO: Handle escape and tab
    // TODO: Handle arrow keys
    if (event.key.toLowerCase() === 'enter') {
        console.log('Caught enter')
        if (activeList[0]) {
            console.log(`THING: ${activeList[0]}`)
            document.getElementById('active-font').innerText =
                activeList[0].name
            document.getElementById('font-input-field').innerText = ''
            activeList.length = 0
            updateItems()
        }
        document.getElementById('font-input-field').innerText = document
            .getElementById('font-input-field')
            .innerText.replaceAll(/\n/g, '')
    }
}

const kickoff = () => {
    console.log(`Kickoff: ${new Date().getTime()}`)
    prepKeys()
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
