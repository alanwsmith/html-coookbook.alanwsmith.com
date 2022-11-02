#!/usr/bin/env python3

import glob
import json 
import os

class SnippetDocumentor():

    def __init__(self):
        self.source = []
        self.docs = []
        self.content = []

    def assemble_content(self, output_path):
        for doc in self.docs:
            parts = doc.split('---')
            meta = json.loads(parts[1])
            self.content.append(parts[0])
            self.content.append('<pre class="language-py"><code class="language-py">')
            for line_group in meta['lines']:
                for line_index in range(line_group[0] - 1, line_group[1]):
                    self.content.append(
                        f"{line_index + 1}&nbsp;&nbsp;{self.source[line_index]}"
                    )
            self.content.append('</pre></code>')

        with open(output_path, 'w') as _out:
            _out.write("\n".join(self.content))

    def load_source(self, source_path):
        with open(source_path) as _source:
            self.source = _source.read().split("\n")

    def load_docs(self, docs_dir):
        local_file_list = [
            file for file in glob.glob(f"{docs_dir}/*")
            if os.path.isfile(file)
        ]
        local_file_list.sort()
        for local_file in local_file_list:
            with open(local_file) as _in:
                self.docs.append(_in.read())

if __name__ == "__main__":
    working_dir = os.path.dirname(os.path.realpath(__file__))

    sd = SnippetDocumentor()
    sd.load_source(__file__)
    sd.load_docs(f"{working_dir}/docs")
    sd.assemble_content(f"{working_dir}/DOCSCONTENT.html")

