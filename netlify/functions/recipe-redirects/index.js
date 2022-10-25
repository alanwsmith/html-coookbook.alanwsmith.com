const fire_redirect = (location) => {
  return {
    statusCode: 301,
    headers: {
      Location: location,
    },
  }
}

exports.handler = async function (event, context) {
  const files = {
  "2GbDpBAwq2AB": "/recipes/javascript-class-example--2GbDpBAwq2AB/index.html",
  "2GbIL3X471Fa": "/recipes/dynamically-load-external-fonts--2GbIL3X471Fa/index.html",
  "2GbISkLaYoEW": "/recipes/details-element-example--2GbISkLaYoEW/index.html",
  "2GbIUkcEyxaH": "/recipes/autocomplete-select-menu--2GbIUkcEyxaH/index.html",
  "2GbIaPbO7xXQ": "/recipes/detect-enter-key-in-input-field--2GbIaPbO7xXQ/index.html",
  "2GbIh2R7rTEd": "/recipes/search-input-example--2GbIh2R7rTEd/index.html",
  "2Gc2v5BVvNGH": "/recipes/font-download-test--2Gc2v5BVvNGH/index.html"
}
  const url_parts = event.path.split('/')
  // console.log(url_parts)
  if (url_parts.length !== 4) {
    // console.log('1')
    return fire_redirect('/')
  } else {
    // console.log('2')
    const slug_parts = url_parts[2].split('--')
    if (slug_parts.length !== 2) {
      // console.log('3')
      return fire_redirect('/')
    } else {
      const key = slug_parts[1]
      if (files[key]) {
        // console.log('hit')
        return fire_redirect(files[key])
      } else {
        // console.log('4')
        return fire_redirect('/')
      }
    }
  }

  return fire_redirect('/')
}
