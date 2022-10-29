const stopSubmission = (event) => {
    event.preventDefault()
    const theData = new FormData(event.target)
    for (const key of theData.keys()) {
        console.log(`${key} = ${theData.get(key)}`)
    }
}

document.addEventListener('submit', stopSubmission)
