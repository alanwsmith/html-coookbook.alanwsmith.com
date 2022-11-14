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
            }
        }
        // }
    }
}

const handleOutsideInput = (event) => {
    const newValue = event.target.value
    document.getElementById('the-link').setAttribute('amount', newValue)
}

const init = () => {
    document
        .getElementById('outside-slider')
        .addEventListener('input', handleOutsideInput)

    const theLink = document.getElementById('the-link')
    const observer = new MutationObserver(handleInsideMutations)
    observer.observe(theLink, { attributes: true })
}

document.addEventListener('DOMContentLoaded', init)
