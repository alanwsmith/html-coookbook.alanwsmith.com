const prepColor = (hex) => {
    payload = {
        hex: hex,
        hex_r: hex.substr(1, 2),
        hex_g: hex.substr(3, 2),
        hex_b: hex.substr(5, 2),
    }
    payload.rgb_r = parseInt(payload.hex_r, 16)
    payload.rgb_g = parseInt(payload.hex_g, 16)
    payload.rgb_b = parseInt(payload.hex_b, 16)

    payload.tmp_r = payload.rgb_r / 255
    payload.tmp_g = payload.rgb_g / 255
    payload.tmp_b = payload.rgb_b / 255

    payload.srgb_r =
        payload.tmp_r <= 0.03928
            ? payload.tmp_r / 12.92
            : Math.pow((payload.tmp_r + 0.055) / 1.055, 2.4)

    payload.srgb_g =
        payload.tmp_g <= 0.03928
            ? payload.tmp_g / 12.92
            : Math.pow((payload.tmp_g + 0.055) / 1.055, 2.4)

    payload.srgb_b =
        payload.tmp_b <= 0.03928
            ? payload.tmp_b / 12.92
            : Math.pow((payload.tmp_b + 0.055) / 1.055, 2.4)

    payload.lum_r = 0.2126 * payload.srgb_r
    payload.lum_g = 0.7152 * payload.srgb_g
    payload.lum_b = 0.0722 * payload.srgb_b

    payload.lum = payload.lum_r + payload.lum_g + payload.lum_b

    return payload
}

const calculateContrastRatio = (a, b) => {
    const c1 = prepColor(a)
    const c2 = prepColor(b)
    const ratio =
        (Math.max(c1.lum, c2.lum) + 0.05) / (Math.min(c1.lum, c2.lum) + 0.05)
    return ratio.toFixed(2)
}
