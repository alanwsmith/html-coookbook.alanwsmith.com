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
  "2gbdpbawq2ab": "/recipes/javascript_class_example---2gbdpbawq2ab/index.html",
  "2gbiapbo7xxq": "/recipes/detect_enter_keypress_in_an_input_field---2gbiapbo7xxq/index.html",
  "2gbih2r7rted": "/recipes/search_input_example---2gbih2r7rted/index.html",
  "2gbil3x471fa": "/recipes/dynamically_load_external_fonts---2gbil3x471fa/index.html",
  "2gbisklayoew": "/recipes/details_element_example---2gbisklayoew/index.html",
  "2gbiukceyxah": "/recipes/autocomplete_select_menu---2gbiukceyxah/index.html",
  "2gc2v5bvvngh": "/recipes/font_download_test---2gc2v5bvvngh/index.html",
  "2ggjxa4tvm9x": "/recipes/m-dash_input_select_autocomplete_test---2ggjxa4tvm9x/index.html",
  "2gj4p8avxist": "/recipes/strict_selection_menu_form_control---2gj4p8avxist/index.html",
  "2gj6asw5m2bm": "/recipes/web_components_hello_world---2gj6asw5m2bm/index.html",
  "2gja3c8lgfbs": "/recipes/document_onclick_listener_for_web_components---2gja3c8lgfbs/index.html",
  "2gjuqnwy1dko": "/recipes/use_internal_elements_in_a_web_component---2gjuqnwy1dko/index.html",
  "2glvtfmqasay": "/recipes/css_absolute_and_relative_positioning---2glvtfmqasay/index.html",
  "2gmdsyscqjnv": "/recipes/create_and_send_events_in_a_web_component---2gmdsyscqjnv/index.html",
  "2gmvxjjsmlcb": "/recipes/create_a_custom_input_element_in_a_web_component---2gmvxjjsmlcb/index.html",
  "2gn2p9a4zdjr": "/recipes/send_value_with_web_component_form_submit---2gn2p9a4zdjr/index.html",
  "2gn6720koljv": "/recipes/prevent_a_form_from_submitting_to_view_data---2gn6720koljv/index.html",
  "apply_styles_to_a_web_component--2Gov695r3d8b": "/recipes/apply_styles_to_a_web_component--2Gov695r3d8b/index.html",
  "back_button_with_history_push_state--2imrt72t8sdv": "/recipes/back_button_with_history_push_state--2imrt72t8sdv/index.html",
  "calculate_color_contrast_ratio--2hhbo0yptnbm": "/recipes/calculate_color_contrast_ratio--2hhbo0yptnbm/index.html",
  "calculate_percentage_difference_between_two_numbers_in_javascript--2hjncmpdqlyx": "/recipes/calculate_percentage_difference_between_two_numbers_in_javascript--2hjncmpdqlyx/index.html",
  "center-a-pre-tag--2i9eqonyasa7": "/recipes/center-a-pre-tag--2i9eqonyasa7/index.html",
  "center-vertically-with-a-header-and-footer--2i9lfclfwj0y": "/recipes/center-vertically-with-a-header-and-footer--2i9lfclfwj0y/index.html",
  "change_the_browsers_url_without_reloading_the_page--2hpup1k3l8qz": "/recipes/change_the_browsers_url_without_reloading_the_page--2hpup1k3l8qz/index.html",
  "css_grid__basic_grid--2hzdlrjy0zus": "/recipes/css_grid__basic_grid--2hzdlrjy0zus/index.html",
  "css_grid_columns_2iwlzkz6yki4": "/recipes/css_grid_columns_2iwlzkz6yki4/index.html",
  "css_offset_side_column--2hcgibbj1nwt": "/recipes/css_offset_side_column--2hcgibbj1nwt/index.html",
  "css_two_column_grid_with_scrolling_column--2hz8jc50ad33": "/recipes/css_two_column_grid_with_scrolling_column--2hz8jc50ad33/index.html",
  "detect_key_press_anywhere_on_the_page--2hwzw66hch29": "/recipes/detect_key_press_anywhere_on_the_page--2hwzw66hch29/index.html",
  "double-encode-commas-and-slashes-for-cloudinary-text-overlays--2gc8mwmrfaw7": "/recipes/double-encode-commas-and-slashes-for-cloudinary-text-overlays--2gc8mwmrfaw7/index.html",
  "get_attributes_in_a_web_component--2gpiyozzemey": "/recipes/get_attributes_in_a_web_component--2gpiyozzemey/index.html",
  "hsl_color_picker_web_component--2GoGrtBoU6u3": "/recipes/hsl_color_picker_web_component--2GoGrtBoU6u3/index.html",
  "hsl_to_rgb_conversion_formula--2gqeuz8gn8fv": "/recipes/hsl_to_rgb_conversion_formula--2gqeuz8gn8fv/index.html",
  "html_canvas_draw_rectangle_2iz9dtmla7to": "/recipes/html_canvas_draw_rectangle_2iz9dtmla7to/index.html",
  "html_canvas_simulate_an_animated_gif_2iythtpjmuhh": "/recipes/html_canvas_simulate_an_animated_gif_2iythtpjmuhh/index.html",
  "html_input_range_type_with_floating_point_number--2itkxa97ogoe": "/recipes/html_input_range_type_with_floating_point_number--2itkxa97ogoe/index.html",
  "live_code_codes_maker_experiment_alpha--2gxv4l6iyo7v": "/recipes/live_code_codes_maker_experiment_alpha--2gxv4l6iyo7v/index.html",
  "system-dark-mode-preference--2icsgti1btei": "/recipes/system-dark-mode-preference--2icsgti1btei/index.html",
  "use_mutation_observers_between_web_components_and_parent_pages--2gxzzx78txjy": "/recipes/use_mutation_observers_between_web_components_and_parent_pages--2gxzzx78txjy/index.html"
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
