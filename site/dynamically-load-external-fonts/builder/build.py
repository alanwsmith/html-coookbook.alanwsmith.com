#!/usr/bin/env python3

import json
import re
import urllib.parse


from datetime import datetime
from string import Template
from html import escape

main_dir = "/Users/alan/workshop/html-css-js.alanwsmith.com/site/dynamically-load-external-fonts"

print(f"Building: {datetime.now()}")

with open(f'{main_dir}/src/config.json') as _config:
    config = json.load(_config)

with open(f'{main_dir}/src/content.html') as _content:
    content = _content.read()

with open(f'{main_dir}/src/head.html') as _head:
    head = _head.read()

with open(f'{main_dir}/src/js.js') as _js:
    js = _js.read()

with open(f'{main_dir}/src/css.css') as _css:
    css = _css.read()

with open(f'{main_dir}/src/template.html') as _template:
    template = _template.read()

references = []
for reference in config['references']:
    references.append(f'''
<li><a href="{reference['url']}">{reference['title']}</a><br />{reference['extra']}</li>
''')
    print(reference)

skeleton = Template(template)
output = skeleton.substitute(
    TITLESLUG=config['titleSlug'],
    DESCRIPTION=config['description'],
    CONTENT=content,
    HEAD=head,
    CSS=css,
    JS=js,
    ESCAPED_HTML=escape(content),
    ESCAPED_JS=escape(js),
    REFERENCES="\n".join(references),
    IMAGESLUG=urllib.parse.quote(config['titleSlug'])
)

with open(f'{main_dir}/index.html', 'w') as _output:
    _output.write(output)


