const handleInsideMutations = (mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.type === 'attributes') {
            console.log(
                mutation.target.attributes.getNamedItem(mutation.attributeName)
                    .value
            )
        }
        // console.log(mutation.newValue)
    }
}

const init = () => {
    const theLink = document.getElementById('the-link')
    const observer = new MutationObserver(handleInsideMutations)
    observer.observe(theLink, { attributes: true })
}

document.addEventListener('DOMContentLoaded', init)
