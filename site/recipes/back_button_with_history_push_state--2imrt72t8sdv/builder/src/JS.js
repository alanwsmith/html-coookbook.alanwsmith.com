let number = THE_NUMBER

const handleNextClick = () => {
    setPage(number + 1)
}

const handlePrevClick = () => {
    setPage(number - 1)
}

const handlePopState = () => {
    console.log('TODO: Figure out if this is gonna work')
}

const init = () => {
    document
        .getElementById('prevButton')
        .addEventListener('click', handlePrevClick)
    document
        .getElementById('nextButton')
        .addEventListener('click', handleNextClick)
}

const setPage = (pageNum) => {
    number = pageNum
    document.getElementById('currentPage').innerHTML = number
    history.pushState({}, '', number + `.html`)
}

document.addEventListener('DOMContentLoaded', init)
window.addEventListener('popstate', handlePopState)
