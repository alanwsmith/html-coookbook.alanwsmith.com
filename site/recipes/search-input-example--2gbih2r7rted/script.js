const kickoff = () => {
    console.log(`Kickoff: ${new Date().getTime()}`)

    // // clear for refreshes during testing
    // document.getElementById('font-input-field').value = ''
    // document
    //     .getElementById('menuWrapper')
    //     .addEventListener('click', handleMenuClick)
    // document
    //     .getElementById('menuWrapper')
    //     .addEventListener('input', handleMenuInput)
    // document
    //     .getElementById('menuWrapper')
    //     .addEventListener('keyup', handleKeyUp)
    // updateItems()
}

document.addEventListener('DOMContentLoaded', kickoff)
