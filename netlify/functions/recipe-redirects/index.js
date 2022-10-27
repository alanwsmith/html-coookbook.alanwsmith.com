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
  "2gbdpbawq2ab": "/recipes/javascript-class-example--2gbdpbawq2ab/index.html",
  "2gbiapbo7xxq": "/recipes/detect-enter-key-in-input-field--2gbiapbo7xxq/index.html",
  "2gbih2r7rted": "/recipes/search-input-example--2gbih2r7rted/index.html",
  "2gbil3x471fa": "/recipes/dynamically-load-external-fonts--2gbil3x471fa/index.html",
  "2gbisklayoew": "/recipes/details-element-example--2gbisklayoew/index.html",
  "2gbiukceyxah": "/recipes/autocomplete-select-menu--2gbiukceyxah/index.html",
  "2gc2v5bvvngh": "/recipes/font-download-test--2gc2v5bvvngh/index.html",
  "2ggjxa4tvm9x": "/recipes/mdash-input-select-autocomplete-test--2ggjxa4tvm9x/index.html",
  "2gj4p8avxist": "/recipes/enforced-selections-menu--2gj4p8avxist/index.html",
  "document-click-listener": "/recipes/web-components--document-click-listener--2gja3c8lgfbs/index.html",
  "hello-world": "/recipes/web-components--hello-world--2gj6asw5m2bm/index.html",
  "use-internal-elements": "/recipes/web-components--use-internal-elements--2gjuqnwy1dko/index.html"
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
