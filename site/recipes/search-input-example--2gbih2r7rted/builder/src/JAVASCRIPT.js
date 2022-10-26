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
}

const handleFilterBlur = () => {
    setPlaceholder()
}

const handleFilterFocus = () => {
    state.filterEl.placeholder = ''
}

const handleFilterKeyup = (event) => {
    const pressedKey = event.key.toLowerCase()
    if (pressedKey === 'enter') {
        console.log('ENTER')
    } else {
        console.log(state.filterEl.value)
    }
}

const handleOptionsInput = (event) => {
    console.log(event.target.value)
}

const removeOptions = () => {
    const selectionsEl = document.getElementById('awsselect--options')
    while (selectionsEl.firstChild) {
        selectionsEl.removeChild(selectionsEl.firstChild)
    }
}

const setPlaceholder = (newValue = null) => {
    if (newValue) {
        state.placeholder = newValue
    }
    state.filterEl.placeholder = state.placeholder
}

const updateOptions = () => {
    removeOptions()
    // <select id="awsselect--options" size="3">
    fontsByPopularity.forEach((font) => {
        const newOption = document.createElement('option')
        newOption.value = font.key
        newOption.innerHTML = font.value
        state.optionsEl.appendChild(newOption)
    })
}

const kickoff = () => {
    console.log('kickoff')
    state.filterEl = document.getElementById('awsselect--filter')
    state.filterEl.addEventListener('focus', handleFilterFocus)
    state.filterEl.addEventListener('blur', handleFilterBlur)
    state.filterEl.addEventListener('keyup', handleFilterKeyup)
    state.optionsEl = document.getElementById('awsselect--options')
    state.optionsEl.addEventListener('input', handleOptionsInput)
    setPlaceholder()
    updateOptions()
}

document.addEventListener('DOMContentLoaded', kickoff)
