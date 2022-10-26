#!/usr/bin/env python3

import glob
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
        self.source_dir = "src"
        self.parts = {}

    def get_directories_and_titles(self):
        recipes_dir = os.path.join('..', 'recipes')
        self.recipe_dirs = [
            os.path.basename(dir) for dir in glob.glob(f"{recipes_dir}/*")
            if os.path.isdir(dir)
        ]

        published = []
        drafts = []
        prefetches = []

        for recipe_dir in self.recipe_dirs:
            config_file_path = f"../recipes/{recipe_dir}/builder/src/config.json"
            with open(config_file_path) as _config:
                config = json.load(_config)
                url_path = f"/recipes/{recipe_dir}/index.html"
                prefetches.append(f"""<link rel="prefetch" href="{url_path}" as="document" />""")
                li = f"""<li><a href="{url_path}">{config['TITLE']}</a></li>"""
                if config['STATUS'] == 'published':
                    published.append(li)
                if config['STATUS'] == 'draft':
                    drafts.append(li)
        published.sort()
        drafts.sort()
        self.parts['PUBLISHED'] = f"<ul>{''.join(published)}</ul>"
        self.parts['DRAFTS'] = f"<ul>{''.join(drafts)}</ul>"
        self.parts['PREFETCH'] = "\n".join(prefetches)

        # print(self.parts['PUBLISHED'])
        # print(self.parts['DRAFTS'])

    def load_parts(self):
        for content_file in self.content_files:
            print(f"Loading: {content_file}")
            key = content_file.split('.')[0]
            path = f"{self.source_dir}/{content_file}"
            self.parts[key] = self.slurp_file(path)

    def slurp_file(self, path):
        with open(path) as _file:
            return _file.read()

    def do_output(self):
        skeleton = Template(self.parts['TEMPLATE'])
        output = skeleton.substitute(self.parts)
        with open(f"../index.html", 'w') as _output:
            _output.write(output)

    def build_redirects(self):
        redirects = {}
        for recipe_dir in self.recipe_dirs:
            parts = recipe_dir.split('--')
            redirects[parts[1]] = f'/recipes/{recipe_dir}/index.html'
        print(redirects)

        with open("src/redirects.js") as _redirects_in:
            redirects_skeleton = Template(_redirects_in.read())
            redirects_output = redirects_skeleton.substitute(
                {"REDIRECTS": json.dumps(redirects, indent=2, sort_keys=True)}
            )
            with open("../../netlify/functions/recipe-redirects/index.js", "w") as _redirects_out:
                _redirects_out.write(redirects_output)

if __name__ == "__main__":
    b = Builder()
    b.content_files = ['TEMPLATE.html']
    # b.load_config()
    b.load_parts()
    b.get_directories_and_titles()

    # b.escape_parts()
    # b.load_details()
    # b.load_notes()
    # b.load_todos()
    # b.load_references()
    # b.wrap_escapes()

    b.do_output()
    b.build_redirects()

