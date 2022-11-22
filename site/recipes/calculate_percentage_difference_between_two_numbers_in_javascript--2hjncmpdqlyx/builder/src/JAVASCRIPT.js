const els = {}

const calculatePct = (a, b) => {
    return (a / b) * 100
}

const updatePct = () => {
    const a = parseInt(els['a'].value, 10)
    const b = parseInt(els['b'].value, 10)
    els.pct.innerHTML = calculatePct(a, b)
}

const init = () => {
    console.log('init')
    els['a'] = document.getElementById('a')
    els['b'] = document.getElementById('b')
    els['pct'] = document.getElementById('pct')

    els.a.addEventListener('input', updatePct)
    els.b.addEventListener('input', updatePct)

    updatePct()
}

document.addEventListener('DOMContentLoaded', init)
