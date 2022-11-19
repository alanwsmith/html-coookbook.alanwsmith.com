const convertHSLToRGB = (h, s, l) => {
    s /= 100
    l /= 100
    const k = (n) => (n + h / 30) % 12
    const a = s * Math.min(l, 1 - l)
    const f = (n) =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
    return [
        Math.round(255 * f(0)),
        Math.round(255 * f(8)),
        Math.round(255 * f(4)),
    ]
}

const kickoff = () => {
    console.log(convertHSLToRGB(140, 20, 80))
}

document.addEventListener('DOMContentLoaded', kickoff)
