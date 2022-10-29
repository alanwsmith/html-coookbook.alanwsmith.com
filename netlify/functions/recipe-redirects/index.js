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
  "2gbdpbawq2ab": "/recipes/Javascript_class_example---2gbdpbawq2ab/index.html",
  "2gbiapbo7xxq": "/recipes/Detect_enter_keypress_in_an_input_field---2gbiapbo7xxq/index.html",
  "2gbih2r7rted": "/recipes/Search_input_example---2gbih2r7rted/index.html",
  "2gbil3x471fa": "/recipes/Dynamically_load_external_fonts---2gbil3x471fa/index.html",
  "2gbisklayoew": "/recipes/Details_element_example---2gbisklayoew/index.html",
  "2gbiukceyxah": "/recipes/Autocomplete_select_menu---2gbiukceyxah/index.html",
  "2gc2v5bvvngh": "/recipes/Font_download_test---2gc2v5bvvngh/index.html",
  "2ggjxa4tvm9x": "/recipes/M-Dash_input_select_autocomplete_test---2ggjxa4tvm9x/index.html",
  "2gj4p8avxist": "/recipes/Strict_selection_menu_form_control---2gj4p8avxist/index.html",
  "2gj6asw5m2bm": "/recipes/Web_Components_hello_world---2gj6asw5m2bm/index.html",
  "2gja3c8lgfbs": "/recipes/Web_Components_document_onclick_listener---2gja3c8lgfbs/index.html",
  "2gjuqnwy1dko": "/recipes/Web_Components_use_internal_elements---2gjuqnwy1dko/index.html",
  "2glvtfmqasay": "/recipes/CSS_absolute_and_relative_positioning---2glvtfmqasay/index.html",
  "2gmdsyscqjnv": "/recipes/Web_Components_create_and_send_events---2gmdsyscqjnv/index.html",
  "2gmvxjjsmlcb": "/recipes/Web_Components_custom_input_element---2gmvxjjsmlcb/index.html",
  "2gn2p9a4zdjr": "/recipes/Web_Components_include_value_on_form_submit---2gn2p9a4zdjr/index.html",
  "2gn6720koljv": "/recipes/Prevent_a_form_from_submitting_to_view_data---2gn6720koljv/index.html"
}
  const url_parts = event.path.split('/')
  // console.log(url_parts)
  if (url_parts.length !== 4) {
    // console.log('1')
    return fire_redirect('/')
  } else {
    // console.log('2')
    const slug_parts = url_parts[2].split('---')
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
