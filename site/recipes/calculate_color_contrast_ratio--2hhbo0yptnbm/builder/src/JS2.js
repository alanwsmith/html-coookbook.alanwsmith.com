const inputs = {}

const updateRatio = () => {
    const color1 = inputs.color1.value
    const color2 = inputs.color2.value

    if (color1.match(/^#\w{6}$/) && color2.match(/^#\w{6}$/)) {
        const ratio = calculateContrastRatio(color1, color2)
        document.getElementById('ratio').innerText = `${ratio}:1`
    }
}

const init = () => {
    inputs.color1 = document.getElementById('color1')
    inputs.color1.addEventListener('input', updateRatio)
    inputs.color2 = document.getElementById('color2')
    inputs.color2.addEventListener('input', updateRatio)

    updateRatio()
}

document.addEventListener('DOMContentLoaded', init)
