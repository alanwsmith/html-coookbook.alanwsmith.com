#!/usr/bin/env python3

from string import Template

main_dir = "/Users/alan/workshop/html-css-js-coookbook.alanwsmith.com/site/autocomplete-select-menu"

with open(f'{main_dir}/src/html.html') as _html:
    html = _html.read()

with open(f'{main_dir}/src/js.js') as _js:
    js = _js.read()

with open(f'{main_dir}/src/css.css') as _css:
    css = _css.read()

with open(f'{main_dir}/src/template.html') as _template:
    template = _template.read()

skeleton = Template(template)
output = skeleton.substitute(
    HTML=html,
    CSS=css,
    JS=js
)

with open(f'{main_dir}/index.html', 'w') as _output:
    _output.write(output)


