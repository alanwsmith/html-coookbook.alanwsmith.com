#!/usr/bin/env python3

from string import Template

with open('html.html') as _html:
    html = _html.read()

with open('js.js') as _js:
    js = _js.read()

with open('css.css') as _css:
    css = _css.read()

with open('template.html') as _template:
    template = _template.read()

skeleton = Template(template)
output = skeleton.substitute(
    HTML=html,
    CSS=css,
    JS=js
)

with open('../index.html', 'w') as _output:
    _output.write(output)


