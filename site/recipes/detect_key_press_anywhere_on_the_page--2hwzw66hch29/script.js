let counter = 0

const handleKeyUp = (event) => {
    if (event.key.toLowerCase() === 'arrowup') {
        counter++
        document.getElementById('the-count').innerText = counter
    }
}

const kickoff = () => {
    document.addEventListener('keyup', handleKeyUp)
}

document.addEventListener('DOMContentLoaded', kickoff)
