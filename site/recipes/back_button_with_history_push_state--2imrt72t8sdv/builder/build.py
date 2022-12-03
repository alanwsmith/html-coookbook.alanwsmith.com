#!/usr/bin/env python3

import os 
import sys

from datetime import datetime
from html import escape
from string import Template

class Builder():

    def __init__(self):
        self.script_dir = sys.path[0]
        self.source_dir = os.path.join(self.script_dir, 'src')
        self.template_file = os.path.join(self.source_dir, 'TEMPLATE.html')
        self.index_file = os.path.join(self.script_dir, '..', 'index-build-in-progress.html')
        self.html_dir = os.path.join(self.script_dir, '..')

    def make_index_page(self):
        with open(self.template_file) as _in:
            with open(self.index_file, 'w') as _index:
                _index.write(_in.read())

    def make_individual_pages(self):

        with open(f"{self.source_dir}/BODY.html") as _body:
            self.body_raw = _body.read()

        with open(f"{self.source_dir}/JS.js") as _js:
            self.js_raw = _js.read()

        data = {
                "TITLE": "Back Button With history.pushState()",
                "DESCRIPTION": "Getting the back button to work with history.pushState()",
                }


        with open(self.template_file) as _in:
            skeleton = Template(_in.read())
            for i in range(-10,10):
                data['NUMBER'] = i
                data['BODY'] = self.body_raw.replace('THE_NUMBER', str(i))
                data['JS'] = self.js_raw.replace('THE_NUMBER', str(i))
                data['BODY_CODE'] = f"""<pre><code class="language-html">{escape(self.body_raw)}</code></pre>"""
                data['JS_CODE'] = f"""<pre><code class="language-js">{escape(self.js_raw)}</code></pre>"""


                output_path = os.path.join(self.html_dir, f"{i}.html")
                with open(output_path, 'w') as _out:
                    _out.write(skeleton.substitute(data))


if __name__ == '__main__':
    print(f"Building {datetime.now()}")
    b = Builder()
    b.make_index_page()
    b.make_individual_pages()

