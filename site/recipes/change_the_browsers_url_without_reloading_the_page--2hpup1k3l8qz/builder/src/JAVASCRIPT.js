const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1
    const randomUrl = `/recipes/random_number_${randomNumber}_example--2hpup1k3l8qz/index.html`
    console.log(randomUrl)
}

const init = () => {
    const theButton = document.getElementById('urlChanger')
    theButton.addEventListener('click', handleClick)
}

document.addEventListener('DOMContentLoaded', init)
