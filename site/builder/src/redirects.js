exports.handler = async function (event, context) {
  const files = $REDIRECTS
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
