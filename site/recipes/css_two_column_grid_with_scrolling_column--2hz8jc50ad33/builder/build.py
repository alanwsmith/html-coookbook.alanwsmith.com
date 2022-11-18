#/usr/bin/env python3

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
        self.source_dir = f'{self.base_dir}/builder/src'
        self.config_file = f'{self.source_dir}/config.json'
        self.content_files = []
        self.parts = {}

    def escape_parts(self):
        part_keys = [key for key in self.parts.keys()]
        for part_key in part_keys:
            self.parts[f'ESCAPED_{part_key}'] = escape(self.parts[part_key])

        print(self.parts.keys())

    def load_config(self):
        with open(self.config_file) as _config:
            self.config = json.load(_config)
            self.parts['TITLE'] = self.config['TITLE']
            self.parts['DESCRIPTION'] = self.config['DESCRIPTION']
            self.parts['IMAGESLUG'] = urllib.parse.quote(self.config['TITLE'])
            # Fix for commas in Cloudinary
            self.parts['IMAGESLUG'] = re.sub('%2C', '%252C', self.parts['IMAGESLUG'])

    def slurp_file(self, path):
        with open(path) as _file:
            return _file.read()

    def load_parts(self):
        for content_file in self.content_files:
            key = content_file.split('.')[0]
            path = f"{self.source_dir}/{content_file}"
            self.parts[key] = self.slurp_file(path)

    def load_details(self):
        if len(self.config['DETAILS']) > 0:
            details = []
            for detail in self.config['DETAILS']:
                details.append(f'<li>{detail}</li>')
            self.parts['DETAILS'] = f'''
                <h2>Deatails</h2>
                <ul>
                    {" ".join(details)}
                </ul>
                '''
        else:
            self.parts['DETAILS'] = ''

    def load_notes(self):
        if len(self.config['NOTES']) > 0:
            notes = []
            for note in self.config['NOTES']:
                notes.append(f'<li>{note}</li>')
            self.parts['NOTES'] = f'''
                <h2>Notes</h2>
                <ul>
                    {" ".join(notes)}
                </ul>
            '''
        else:
            self.parts['NOTES'] = ''

    def load_todos(self):
        if len(self.config['TODOS']) > 0:
            todos = []
            for todo in self.config['TODOS']:
                todos.append(f'<li>{todo}</li>')
            self.parts['TODOS'] = f'''
                <h2>TODO</h2>
                <ul>
                    {" ".join(todos)}
                </ul>
            '''
        else:
            self.parts['TODOS'] = ''

    def load_references(self):
        if len(self.config['REFERENCES']) > 0:
            references = []
            for reference in self.config['REFERENCES']:
                reference_line = f'''<a href="{reference['url']}">{reference['title']}</a>'''
                if reference['extra'] != '':
                    reference_line += f''' - {reference['extra']}'''
                references.append(f'<li>{reference_line}</li>')
            self.parts['REFERENCES'] = f'''
                <h2>References</h2>
                <ul>
                    {" ".join(references)}
                </ul>
                '''
        else:
            self.parts['REFERENCES'] = ''

    def do_output(self):
        skeleton = Template(self.parts['TEMPLATE'])
        output = skeleton.substitute(self.parts)
        with open(f"{self.base_dir}/index.html", 'w') as _output:
            _output.write(output)

    def wrap_escapes(self):
        if self.parts['HEAD'] != '':
            self.parts['ESCAPED_HEAD'] = f'''
            <h2>&lt;head&gt;</h2>
            <pre><code class="language-html">{escape(self.parts['HEAD'])}</code></pre>
            '''

        if self.parts['HTML'] != '':
            self.parts['ESCAPED_HTML'] = f'''
            <h2>HTML</h2>
            <pre><code class="language-html">{escape(self.parts['HTML'])}</code></pre>
            '''

        if self.parts['CSS'] != '':
            self.parts['ESCAPED_CSS'] = f'''
            <h2>CSS</h2>
            <pre><code class="language-css">{escape(self.parts['CSS'])}</code></pre>
            '''

        if self.parts['JAVASCRIPT'] != '':
            self.parts['ESCAPED_JAVASCRIPT'] = f'''
            <h2>JavaScript</h2>
            <pre><code class="language-js">{escape(self.parts['JAVASCRIPT'])}</code></pre>
            '''






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
    b.content_files = ['HTML.html', 'HEAD.html', 'JAVASCRIPT.js', 'CSS.css', 'TEMPLATE.html']
    b.load_config()
    b.load_parts()
    b.escape_parts()
    b.load_details()
    b.load_notes()
    b.load_todos()
    b.load_references()
    b.wrap_escapes()
    b.do_output()
    # print(b.parts)


