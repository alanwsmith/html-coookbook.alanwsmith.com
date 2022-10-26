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
}

const deactivateSelector = () => {
    console.log('deactivateSelector')
    state.optionsEl.style.display = 'none'
    setPlaceholder()
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
    // console.log('handlerFilterKeyup')
    // console.log(event)
    const pressedKey = event.key.toLowerCase()
    if (pressedKey === 'enter') {
        console.log('ENTER - TODO: Do update here')
        // if (state.options.length > 0) {
        //     console.log(state.options[0])
        // } else {
        //     console.log('no valid selection')
        // }
    } else {
        setOptions()
    }
}

const handleOptionsInput = (event) => {
    console.log(event.target.value)
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
            console.log('GOT AN ITEM')
        }
    }

    // if (clickId) {
    //     const idParts = clickId.split('--')
    //     if (idParts[0] !== 'awsselectmenu') {
    //         removeSelections()
    //     } else {
    //         if (idParts[1] === 'choice-id') {
    //             setSelectionFromKey(idParts[2])
    //             defocusInput()
    //         }
    //     }
    // } else {
    //     removeSelections()
    // }
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
    state.options.forEach((font) => {
        const newOption = document.createElement('option')
        newOption.value = font.key
        newOption.innerHTML = font.value
        newOption.id = `awsselect--selection--${font.key}`
        state.optionsEl.appendChild(newOption)
    })
}

const kickoff = () => {
    console.log('kickoff')
    state.filterEl = document.getElementById('awsselect--filter')
    state.filterEl.addEventListener('focus', handleFilterFocus)
    // state.filterEl.addEventListener('blur', handleFilterBlur)
    state.filterEl.addEventListener('keyup', handleFilterKeyup)
    state.optionsEl = document.getElementById('awsselect--options')
    state.optionsEl.addEventListener('input', handleOptionsInput)
    setPlaceholder()
    updateOptions()
    document.addEventListener('click', handlePageClick)
}

document.addEventListener('DOMContentLoaded', kickoff)
