exports.handler = async function (event, context) {
  const files = {
  "2GbDpBAwq2AB": "/recipes/javascript-class-example--2GbDpBAwq2AB/index.html",
  "2GbIL3X471Fa": "/recipes/dynamically-load-external-fonts--2GbIL3X471Fa/index.html",
  "2GbISkLaYoEW": "/recipes/details-element-example--2GbISkLaYoEW/index.html",
  "2GbIUkcEyxaH": "/recipes/autocomplete-select-menu--2GbIUkcEyxaH/index.html",
  "2GbIaPbO7xXQ": "/recipes/detect-enter-key-in-input-field--2GbIaPbO7xXQ/index.html",
  "2GbIh2R7rTEd": "/recipes/search-input-example--2GbIh2R7rTEd/index.html"
}
  const url_parts = event.path.split('/')
  const slug_parts = url_parts[2].split('--')
  const key = slug_parts[slug_parts.length - 1]
  const redirect_to = files[key]
  return {
    statusCode: 200,
    body: JSON.stringify({
      note: 'wwww',
      original_path: event.path,
      key: key,
      redirect_to: redirect_to,
    }),
  }
}
