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

const state = {
    activeKey: null,
    fullKeys: {},
}

const defocusInput = () => {
    const actualElement = document.getElementById('awsselectmenu--search-text')
    const fixElement = document.getElementById(
        'awsselectmenu--current-selection'
    )
    actualElement.blur()
    fixElement.setAttribute('contenteditable', 'true')
    fixElement.focus()
    fixElement.blur()
    fixElement.setAttribute('contenteditable', 'false')
}

const handleInputFocus = (event) => {
    console.log('focus')
    /////////////////
    // Trying to fix safari issue where blanking text
    // removes the caret
    //
    // this didn't work for for getting the
    // caret to focus properly
    // jevent.target.innerHTML = '-'
    // event.target.innerHTML = ''
    //
    //
    // doing it explicitly by element didn't work
    const input = document.getElementById('awsselectmenu--search-text')
    input.innerText = 'a'
    // input.innerText = ''
    //

    // const selectionsEl = document.getElementById('awsselectmenu--selections')
    // while (selectionsEl.firstChild) {
    //     selectionsEl.removeChild(selectionsEl.firstChild)
    // }
    // for (let i = 0; i < 5; i++) {
    //     const newItem = document.createElement('button')
    //     const buttonId = `awsselectmenu--choice-id--${options[i].key}`
    //     newItem.id = buttonId
    //     newItem.innerHTML = options[i].value
    //     selectionsEl.appendChild(newItem)
    // }
}

const handleKeyup = (event) => {
    // TODO: Handle tab and escape
    const pressedKey = event.key.toLowerCase()
    if (pressedKey === 'enter') {
        console.log('ENTER')
        makeSelection()
    } else {
        state.currentSearch = document.getElementById(
            'awsselectmenu--search-text'
        ).innerText
        removeSelections()
        const selectionsEl = document.getElementById(
            'awsselectmenu--selections'
        )
        let counter = 0
        for (i = 0; i < options.length; i++) {
            const pattern = new RegExp(state.currentSearch, 'gi')
            if (options[i].value.toLowerCase().match(pattern)) {
                const newItem = document.createElement('button')
                const buttonId = `awsselectmenu--choice-id--${options[i].key}`
                newItem.id = buttonId
                newItem.innerHTML = options[i].value
                selectionsEl.appendChild(newItem)
                counter += 1
            }
            if (counter === 5) {
                break
            }
        }
        console.log(state.currentSearch)
    }
}

const makeSelection = () => {
    // TODO: deal with if there isn't a valid option
    console.log('Making selection')
    for (i = 0; i < options.length; i++) {
        const pattern = new RegExp(state.currentSearch, 'gi')
        if (options[i].value.toLowerCase().match(pattern)) {
            state.activeKey = options[i].key
            break
        }
    }
    setPlaceholder()
    removeSelections()
    defocusInput()
}

const prepKeys = () => {
    options.forEach((option) => {
        state.fullKeys[option.key] = option.value
    })
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
    setPlaceholder()
    defocusInput()
    removeSelections()
}

const setPlaceholder = () => {
    const inputField = document.getElementById('awsselectmenu--search-text')
    if (state.activeKey) {
        inputField.innerHTML = state.fullKeys[state.activeKey]
    } else {
        inputField.innerHTML = 'Select a font'
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
                defocusInput()
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
    document
        .getElementById('awsselectmenu--search-text')
        .addEventListener('keyup', handleKeyup)
    document.addEventListener('click', handlePageClick)
    setPlaceholder()
}

document.addEventListener('DOMContentLoaded', kickoff)
