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
  "2gbdpbawq2ab": "/recipes/Javascript-Class-Example--2gbdpbawq2ab/index.html",
  "2gbiapbo7xxq": "/recipes/Detect-Enter-Key-In-Input-Field--2gbiapbo7xxq/index.html",
  "2gbih2r7rted": "/recipes/Search-Input-Example--2gbih2r7rted/index.html",
  "2gbil3x471fa": "/recipes/Dynamically-Load-External-Fonts--2gbil3x471fa/index.html",
  "2gbisklayoew": "/recipes/Details-Element-Example--2gbisklayoew/index.html",
  "2gbiukceyxah": "/recipes/Autocomplete-Select-Menu--2gbiukceyxah/index.html",
  "2gc2v5bvvngh": "/recipes/Font-Download-Test--2gc2v5bvvngh/index.html",
  "2ggjxa4tvm9x": "/recipes/M-Dash-Input-Select-Autocomplete-Test--2ggjxa4tvm9x/index.html",
  "2gj4p8avxist": "/recipes/Strict-Selection-Menu-Form-Control--2gj4p8avxist/index.html",
  "2gn6720koljv": "/recipes/Prevent-A-Form-From-Submitting-To-View-Data--2gn6720koljv/index.html",
  "Absolute-And-Relative-Positioning": "/recipes/CSS--Absolute-And-Relative-Positioning--2glvtfmqasay/index.html",
  "Create-and-Send-Event": "/recipes/Web-Components--Create-and-Send-Event--2gmdsyscqjnv/index.html",
  "Custom-Input-Element": "/recipes/Web-Component--Custom-Input-Element--2gmvxjjsmlcb/index.html",
  "Document-Click-Listener": "/recipes/Web-Components--Document-Click-Listener--2gja3c8lgfbs/index.html",
  "Hello-World": "/recipes/Web-Components--Hello-World--2gj6asw5m2bm/index.html",
  "Include-Value-On-Form-Submit": "/recipes/Web-Component--Include-Value-On-Form-Submit--2gn2p9a4zdjr/index.html",
  "Use-Internal-Elements": "/recipes/Web-Components--Use-Internal-Elements--2gjuqnwy1dko/index.html"
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
