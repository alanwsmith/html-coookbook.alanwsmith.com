const handleInput = (event) => {
    document.getElementById('alfaValue').innerHTML = event.target.value
}

const init = () => {
    document.getElementById('alfa').addEventListener('input', handleInput)
}

document.addEventListener('DOMContentLoaded', init)
