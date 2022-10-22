let counter = 0

const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
        counter++
        document.getElementById('the-count').innerText = counter
    }
}

const kickoff = () => {
    document
        .getElementById('input-field')
        .addEventListener('keyup', handleKeyUp)
}

document.addEventListener('DOMContentLoaded', kickoff)
