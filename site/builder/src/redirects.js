const fire_redirect = (location) => {
  return {
    statusCode: 301,
    headers: {
      Location: location,
    },
  }
}

exports.handler = async function (event, context) {
  const files = $REDIRECTS
  const url_parts = event.path.split('/')
  if (url_parts.length !== 3) {
    return fire_redirect('/')
  } else {
    const slug_parts = url_parts[2].split('--')
    if (slug_parts.length !== 2) {
      return fire_redirect('/')
    } else {
      const key = slug_parts[1]
      if (files[key]) {
        return fire_redirect(files[key])
      } else {
        return fire_redirect('/')
      }
    }
  }

  return fire_redirect('/')

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     note: 'wwww',
  //     original_path: event.path,
  //     key: key,
  //     redirect_to: redirect_to,
  //   }),
  // }
}
