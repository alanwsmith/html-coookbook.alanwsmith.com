const els = {}

const updateRatio = () => {
    const hex1 = els.in1.value
    const hex2 = els.in2.value

    // punt if the inputs don't look like hex values
    if (!hex1.match(/^#\w\w\w\w\w\w$/) || !hex2.match(/^#\w\w\w\w\w\w$/)) {
        return null
    }

    const antecedent = calculateContrastRatioAntecedent(hex1, hex2)
    const ratio = `${antecedent.toFixed(2)}:1`
    els.ratio.innerHTML = ratio
}

const init = () => {
    els.in1 = document.getElementById('in1')
    els.in2 = document.getElementById('in2')
    els.ratio = document.getElementById('ratio')

    els.in1.addEventListener('input', updateRatio)
    els.in2.addEventListener('input', updateRatio)

    updateRatio()
}

document.addEventListener('DOMContentLoaded', init)
