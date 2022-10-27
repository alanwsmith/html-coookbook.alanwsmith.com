const fontsByPopularity = [
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
    filter: '',
    placeholder: 'Pick a font',
    filterEl: null,
    optionsEl: null,
    options: [],
    selection: null,
    upArrowCheck: null,
}

const deactivateSelector = () => {
    // console.log('deactivateSelector')
    state.optionsEl.style.display = 'none'
    setPlaceholder()
    state.filterEl.value = ''
    state.filterEl.blur()
}

// const handleFilterBlur = () => {
//     setPlaceholder()
// }

const handleFilterFocus = () => {
    state.optionsEl.style.display = 'inline'
    state.filterEl.placeholder = ''
    setOptions()
}

const handleFilterKeyup = (event) => {
    // TODO: Handle escape key
    // TODO: Handle arrow keys
    // TODO: Make tab key select first item
    const pressedKey = event.key.toLowerCase()
    console.log(pressedKey)
    if (pressedKey === 'enter') {
        // console.log('ENTER - TODO: Do update here')
        pickSelection()
    } else if (pressedKey === 'escape') {
        deactivateSelector()
    } else if (pressedKey === 'arrowdown') {
        state.optionsEl.focus()
        if (state.filterEl.value === '') {
            // TODO: Use class selectors for this so you can
            // multiple on the same page.
            state.optionsEl.querySelector('option').selected = 'selected'
        } else {
            state.optionsEl.querySelectorAll('option')[1].selected = 'selected'
        }
        state.upArrowCheck = state.optionsEl.value
    } else {
        setOptions()
    }
}

const handleOptionsKeyup = (event) => {
    const pressedKey = event.key.toLowerCase()
    if (pressedKey === 'enter') {
        pickSelection(event.target.value)
    } else if (pressedKey === 'escape') {
        deactivateSelector()
    } else if (pressedKey === 'arrowup') {
        console.log(state.optionsEl.value)
        if (state.upArrowCheck === state.optionsEl.value) {
            state.filterEl.focus()
        }
    }
    state.upArrowCheck = state.optionsEl.value
}

const handlePageClick = (event) => {
    // console.log('handlePageClick')
    if (!event.target.id) {
        deactivateSelector()
    } else {
        const idParts = event.target.id.split('--')
        if (idParts[0] !== 'awsselect') {
            deactivateSelector()
        } else {
            // console.log('Clicked on menu')
            // console.log(event.target)
            if (idParts[1] === 'selection') {
                // console.log(event.target.value)
                pickSelection(event.target.value)
            }
        }
    }
}

const pickSelection = (key = null) => {
    console.log(`pickSelection: ${key}`)
    if (key === null) {
        state.selection = state.options[0]
    } else {
        for (
            let fontIndex = 0;
            fontIndex < fontsByPopularity.length;
            fontIndex += 1
        ) {
            if (fontsByPopularity[fontIndex].key === key) {
                state.selection = fontsByPopularity[fontIndex]
                break
            }
        }
    }
    state.placeholder = state.selection.value
    console.log(state.placeholder)
    deactivateSelector()
}

const removeOptions = () => {
    const selectionsEl = document.getElementById('awsselect--options')
    while (selectionsEl.firstChild) {
        selectionsEl.removeChild(selectionsEl.firstChild)
    }
}

const setOptions = () => {
    state.options = []
    state.filter = state.filterEl.value
    fontsByPopularity.forEach((font) => {
        if (state.filter) {
            if (font.value.toLowerCase().includes(state.filter.toLowerCase())) {
                state.options.push(font)
            }
        } else {
            state.options.push(font)
        }
    })
    updateOptions()
}

const setPlaceholder = (newValue = null) => {
    if (newValue) {
        state.placeholder = newValue
    }
    state.filterEl.placeholder = state.placeholder
}

const updateOptions = () => {
    removeOptions()
    state.options.forEach((font, fontIndex) => {
        const newOption = document.createElement('option')
        newOption.value = font.key
        newOption.innerHTML = font.value
        newOption.id = `awsselect--selection--${font.key}`
        if (fontIndex === 0 && state.filterEl.value !== '') {
            newOption.selected = 'selected'
        }
        state.optionsEl.appendChild(newOption)
    })
    const spacingOption = document.createElement('option')
    spacingOption.innerHTML = '-----------------------------'
    spacingOption.disabled = 'disabled'
    state.optionsEl.appendChild(spacingOption)
}

const kickoff = () => {
    console.log('kickoff')
    state.filterEl = document.getElementById('awsselect--filter')
    state.filterEl.addEventListener('focus', handleFilterFocus)
    state.filterEl.addEventListener('keyup', handleFilterKeyup)
    state.optionsEl = document.getElementById('awsselect--options')
    // state.optionsEl.addEventListener('input', handleOptionsInput)

    state.optionsEl.addEventListener('keyup', handleOptionsKeyup)

    setPlaceholder()
    updateOptions()
    document.addEventListener('click', handlePageClick)
}

document.addEventListener('DOMContentLoaded', kickoff)
