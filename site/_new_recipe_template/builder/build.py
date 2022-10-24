#!/usr/bin/env python3

import json
import os
import re
import urllib.parse

from datetime import datetime
from string import Template
from html import escape

class Builder():
    def __init__(self):
        print(f"Building: {datetime.now()}")
        self.base_dir = os.path.join(
            os.path.dirname(
                os.path.dirname(
                    os.path.realpath(__file__)
                )
            ), 
        )
        self.source_dir = f'{self.base_dir}/src'
        self.config_file = f'{self.source_dir}/config.json'
        self.content_files = []
        self.content_parts = {}

    def escape_parts(self):
        part_keys = [key for key in self.content_parts.keys()]
        for part_key in part_keys:
            self.content_parts[f'ESCAPED_{part_key}'] = escape(self.content_parts[part_key])

        print(self.content_parts.keys())

    def load_config(self):
        with open(self.config_file) as _config:
            self.config = json.load(_config)
            self.content_parts['TITLE'] = self.config['TITLE']
            self.content_parts['DESCRIPTION'] = self.config['DESCRIPTION']
            self.content_parts['IMAGESLUG'] = urllib.parse.quote(self.config['TITLE'])

    def slurp_file(self, path):
        with open(path) as _file:
            return _file.read()

    def load_content_parts(self):
        for content_file in self.content_files:
            key = content_file.split('.')[0]
            path = f"{self.source_dir}/{content_file}"
            self.content_parts[key] = self.slurp_file(path)

    def load_details(self):
        if len(self.config['DETAILS']) > 0:
            items = []
            for item in self.config['DETAILS']:
                items.append(f'<li>{item}</li>')
            self.content_parts['DETAILS'] = f'''
                <h2>Deatils</h2>
                <ul>
                    {" ".join(items)}
                </ul>
                '''
        else:
            self.content_parts['DETAILS'] = ''

    def load_notes(self):
        if len(self.config['NOTES']) > 0:
            self.content_parts['NOTES'] = '<h2>Notes</h2>'
        else:
            self.content_parts['NOTES'] = ''

    def load_references(self):
        if len(self.config['REFERENCES']) > 0:
            self.content_parts['REFERENCES'] = '<h2>References</h2>'
        else:
            self.content_parts['REFERENCES'] = ''

    def do_output(self):
        skeleton = Template(self.content_parts['TEMPLATE'])
        output = skeleton.substitute(self.content_parts)
        with open(f"{self.base_dir}/index.html", 'w') as _output:
            _output.write(output)









# def load_content():
#     pass


# paths = ['html.html', 'head.html', 'script.js', 'styles.css', 'template.html']
# parts = {
#     "TITLE": config['TITLE'],
#     "DESCRIPTION": config['DESCRIPTION'],
#     "IMAGESLUG": urllib.parse.quote(config['TITLE']),
#     "DETAILS": '',
#     "NOTES": '',
#     "REFERENCES": '',
# }

# for path in paths:
#     parts = path.split('.')
#     key = parts[0].upper()



# for part_name in part_names:
#     tokens = part_name.split('.')
#     with open(f'{source_dir}/{part_name}') as _file:
#         file_contents = _file.read()
#         key = tokens[0].upper()
#         parts[key] = file_contents
#         parts[f'ESCAPED_{key}'] = escape(file_contents),

# for part in parts:
#     print('-----------------')
#     print(parts)


# with open(f'{source_dir}/src/head.html') as _head:
#     head = _head.read()
# with open(f'{source_dir}/src/script.js') as _script:
#     script = _script.read()
# with open(f'{source_dir}/src/css.css') as _css:
#     css = _css.read()
# with open(f'{source_dir}/src/template.html') as _template:
#     template = _template.read()

# references = []
# for reference in config['references']:
#     references.append(f'''
# <li><a href="{reference['url']}">{reference['title']}</a><br />{reference['extra']}</li>
# ''')
#     print(reference)

# skeleton = Template(parts['TEMPLATE'])

# output = skeleton.substitute(
#     parts
#     # {
#     #     "TITLE": config['TITLE'],
#     #     "DESCRIPTION": config['DESCRIPTION'],
#     #     "IMAGESLUG": urllib.parse.quote(config['TITLE']),
#     # }
#     # # CONTENT=content,
#     # HEAD=parts['HEAD'],
#     # STYLES=parts['STYLES'],
#     # SCRIPT=parts['SCRIPT']
#     # # ESCAPED_HTML=escape(content),
#     # # ESCAPED_JS=escape(js),
#     # # REFERENCES="\n".join(references),
# )

# with open(f'{base_dir}/index.html', 'w') as _output:
#     _output.write(output)



if __name__ == "__main__":
    b = Builder()
    b.content_files = ['HTML.html', 'HEAD.html', 'SCRIPT.js', 'STYLES.css', 'TEMPLATE.html']
    b.load_config()
    b.load_content_parts()
    b.escape_parts()
    b.load_details()
    b.load_notes()
    b.load_references()
    b.do_output()
    print(b.content_parts)


