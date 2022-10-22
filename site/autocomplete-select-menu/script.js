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

const updateItems = (filter) => {
    const itemWrapper = document.getElementById('menuItems')
    while (itemWrapper.children.length > 0) {
        itemWrapper.children[0].remove()
    }

    const filteredItems = [...itemList]
    if (filter) {
        filteredItems.length = 0
        log(filter)
        const pattern = new RegExp(filter, 'gi')
        itemList.forEach((item) => {
            const compareItem = item.toLowerCase()
            if (item.toLowerCase().match(pattern)) {
                filteredItems.push(item)
            }
        })
    }

    const itemCount = Math.min(5, filteredItems.length)
    for (let i = 0; i < itemCount; i++) {
        const newItem = document.createElement('button')
        // TODO: Make this a valid key
        newItem.id = `item--${filteredItems[i]}`
        newItem.innerHTML = filteredItems[i]
        itemWrapper.appendChild(newItem)
    }
}

const log = (msg) => {
    console.log(msg)
}

const handleMenuClick = (event) => {
    log(event)
}

const handleMenuInput = (event) => {
    log(event)
    updateItems(event.target.value)
}

const kickoff = () => {
    log(`Kickoff: ${new Date().getTime()}`)
    document
        .getElementById('menuWrapper')
        .addEventListener('click', handleMenuClick)
    document
        .getElementById('menuWrapper')
        .addEventListener('input', handleMenuInput)
    updateItems()
}

document.addEventListener('DOMContentLoaded', kickoff)
