exports.handler = async function (event, context) {
  const files = $REDIRECTS
  return {
    statusCode: 200,
    body: JSON.stringify(event.path),
  }
}
