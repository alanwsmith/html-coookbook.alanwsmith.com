const kickoff = () => {
    const loadButton = document.getElementById('load-trigger')
    loadButton.addEventListener('click', handleClick)
}

const handleClick = () => {

    const font = 'Freehand'
    
    const link = document.createElement('link')
    link.href = `https://fonts.googleapis.com/css2?family=${font}`
    link.rel = 'stylesheet'
    
    const head = document.getElementsByTagName('head')[0]
    head.appendChild(link)
    
    const text = document.getElementById('text-to-update')
    text.style.fontFamily = font
    
}

document.addEventListener('DOMContentLoaded', kickoff)
