const handleInsideMutations = (mutationList, observer) => {
    for (const mutation of mutationList) {
        // if (mutation.type === 'attributes') {
        // Make a note about skipping the 'if' here for attirbute
        // type check since you're only watching for attribute changes
        if (mutation.attributeName === 'amount') {
            const oldValue = mutation.oldValue
            const newValue = mutation.target.attributes.getNamedItem(
                mutation.attributeName
            ).value
            if (newValue !== oldValue) {
                document.getElementById('outside-slider').value = newValue
                document.getElementById('outside-display').innerText = newValue
            }
        }
        // }
    }
}

const handleOutsideInput = (event) => {
    // TODO: Figure out if this is going to eat itself
    const newValue = event.target.value
    document.getElementById('outside-display').innerText = newValue
    document.getElementById('the-link').setAttribute('amount', newValue)
}

const init = () => {
    const theLink = document.getElementById('the-link')
    document
        .getElementById('outside-slider')
        .addEventListener('input', handleOutsideInput)
    const observer = new MutationObserver(handleInsideMutations)
    observer.observe(theLink, { attributes: true })
}

document.addEventListener('DOMContentLoaded', init)
