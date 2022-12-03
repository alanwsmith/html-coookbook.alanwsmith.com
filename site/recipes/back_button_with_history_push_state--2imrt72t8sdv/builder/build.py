#!/usr/bin/env python3

import os 
import sys

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

        data = {
                "TITLE": "Back Button With history.pushState()",
                "DESCRIPTION": "Getting the back button to work with history.pushState()",
                "JAVASCRIPT": "js"
                }

        with open(self.template_file) as _in:
            skeleton = Template(_in.read())
            for i in range(1,5):
                output_path = os.path.join(self.html_dir, f"{i}.html")
                with open(output_path, 'w') as _out:
                    _out.write(skeleton.substitute(data))









if __name__ == '__main__':
    print("Building")
    b = Builder()
    b.make_index_page()
    b.make_individual_pages()

    print('here')
