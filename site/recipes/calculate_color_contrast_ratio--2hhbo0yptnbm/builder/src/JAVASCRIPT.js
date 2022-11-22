////////////////////////////////////////////////////////////////////////
// calculateContrastRatioAntecedent
////////////////////////////////////////////////////////////////////////
//
// This function the main funciton that gets called with two hex
// values. It returns the antecedent as a float. Each hex value
// is first turned into a color object with a luminocity (lum)
// property via the `prepColor()` function before being used in
// the core calculation which produces the final value to return
//
////////////////////////////////////////////////////////////////////////

const calculateContrastRatioAntecedent = (hex1, hex2) => {
    const color1 = prepColor(hex1)
    const color2 = prepColor(hex2)

    const antecedent =
        (Math.max(color1.lum, color2.lum) + 0.05) /
        (Math.min(color1.lum, color2.lum) + 0.05)

    return antecedent
}

////////////////////////////////////////////////////////////////////////
//prepColor
////////////////////////////////////////////////////////////////////////
//
// This funciton contains all the math for the conversion from hex
// to a color object with the luminocity value. It starts by pulling
// the individual pairs of red, green, and blue hex values out of
// the input string and then runs them through the stack of calcluations
// before combining them at the end to produce the value
//
////////////////////////////////////////////////////////////////////////

const prepColor = (hex) => {
    color = {
        hex: hex,
        hex_r: hex.substr(1, 2),
        hex_g: hex.substr(3, 2),
        hex_b: hex.substr(5, 2),
    }

    color.rgb_r = parseInt(color.hex_r, 16)
    color.rgb_g = parseInt(color.hex_g, 16)
    color.rgb_b = parseInt(color.hex_b, 16)

    color.tmp_r = color.rgb_r / 255
    color.tmp_g = color.rgb_g / 255
    color.tmp_b = color.rgb_b / 255

    color.srgb_r =
        color.tmp_r <= 0.03928
            ? color.tmp_r / 12.92
            : Math.pow((color.tmp_r + 0.055) / 1.055, 2.4)

    color.srgb_g =
        color.tmp_g <= 0.03928
            ? color.tmp_g / 12.92
            : Math.pow((color.tmp_g + 0.055) / 1.055, 2.4)

    color.srgb_b =
        color.tmp_b <= 0.03928
            ? color.tmp_b / 12.92
            : Math.pow((color.tmp_b + 0.055) / 1.055, 2.4)

    color.lum_r = 0.2126 * color.srgb_r
    color.lum_g = 0.7152 * color.srgb_g
    color.lum_b = 0.0722 * color.srgb_b

    color.lum = color.lum_r + color.lum_g + color.lum_b

    return color
}
