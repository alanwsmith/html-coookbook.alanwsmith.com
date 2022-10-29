const kickoff = () => {
    // Add the listener for button clicks
    const loadButton = document.getElementById('load-trigger')
    loadButton.addEventListener('click', handleClick)
    
}

const handleClick = () => {
    // Define the font to use
    const font = 'Freehand'
    
    // Create the <link> element to get the font
    const link = document.createElement('link')
    link.href = `https://fonts.googleapis.com/css2?family=${font}`
    link.rel = 'stylesheet'
    
    // Grab the <head> element and append the <link> to it
    const head = document.getElementsByTagName('head')[0]
    head.appendChild(link)
    
    // Grap the content to update and apply the font
    const text = document.getElementById('text-to-update')
    text.style.fontFamily = font
}

// Wait until the document is ready before doing stuff
document.addEventListener('DOMContentLoaded', kickoff)
