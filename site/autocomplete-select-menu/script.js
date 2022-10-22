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
    const itemCount = Math.min(5, itemList.length)
    for (let i = 0; i < itemCount; i++) {
        const parent = document.getElementById('menuItems')
        const newItem = document.createElement('button')
        newItem.id = `item--${itemList[i]}`
        newItem.innerHTML = itemList[i]
        parent.appendChild(newItem)
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
    // updateItems()
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
