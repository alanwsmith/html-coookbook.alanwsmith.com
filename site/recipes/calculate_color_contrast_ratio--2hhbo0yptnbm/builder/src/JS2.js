////////////////////////////////////////////////////////////////////////
// els
////////////////////////////////////////////////////////////////////////
//
// This is a convience object that holds the individual document
// elements
//
////////////////////////////////////////////////////////////////////////

const els = {}

////////////////////////////////////////////////////////////////////////
// init
////////////////////////////////////////////////////////////////////////
//
// The core initilization function. It loads the document elements
// into the `els` object, attachest listeners to them and then fires
// off the process once to load the initial values on the page
//
////////////////////////////////////////////////////////////////////////

const init = () => {
    els.in1 = document.getElementById('in1')
    els.in2 = document.getElementById('in2')
    els.ratio = document.getElementById('ratio')

    els.in1.addEventListener('input', updateRatio)
    els.in2.addEventListener('input', updateRatio)

    updateRatio()
}

////////////////////////////////////////////////////////////////////////
// updateRatio
////////////////////////////////////////////////////////////////////////
//
// This function grabs the current files from the input fields
// validates that they look like hex codes and assembles and
// displays a ratio string if they do.
//
// The hex check looks for any word character so it's possible to
// send in a string of 6 characters but include ones that are
// outisde of hex (e.g. 'z') which would break. The degree to
// which that is acceptable or needs to be updates is dependent
// on implementation.
//
////////////////////////////////////////////////////////////////////////

const updateRatio = () => {
    const hex1 = els.in1.value
    const hex2 = els.in2.value

    if (!hex1.match(/^#\w\w\w\w\w\w$/) || !hex2.match(/^#\w\w\w\w\w\w$/)) {
        return null
    } else {
        const antecedent = calculateContrastRatioAntecedent(hex1, hex2)
        const ratio = `${antecedent.toFixed(2)}:1`
        els.ratio.innerHTML = ratio
    }
}

// Kick everything off when the document is ready
document.addEventListener('DOMContentLoaded', init)
