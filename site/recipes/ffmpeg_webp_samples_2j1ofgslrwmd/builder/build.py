#!/usr/bin/env python3

import json
import os
import re
import urllib.parse

from datetime import datetime
from string import Template
from html import escape
import subprocess
import sys

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
        self.video_dir = f'{self.base_dir}/builder/videos'
        self.config_file = f'{self.source_dir}/config.json'
        self.content_files = []
        self.parts = {}
        self.scale = 'fps=15,scale=400:-2'


        self.ffmpeg_commands = [
                {
                    "name": "alfa",
                    "notes": "This is the basic command that just does a resize, sets the fps to 15, and triggers an infinate loop. These are the base settings that will be used for the test of the samples unless otherwise noted",
                    "command": ['/opt/homebrew/bin/ffmpeg', 
                        '-i', f"{self.video_dir}/input_1.mp4", 
                        '-vf', self.scale,
                        '-loop', '0',
                        '-y', f"{self.base_dir}/samples/alfa.webp"
                    ]
                }, 
                {
                    "name": "bravo",
                    "notes": "This sets `-vcodec libwebp`",
                    "command": ['/opt/homebrew/bin/ffmpeg', 
                        '-i', f"{self.video_dir}/input_1.mp4", 
                        '-vf', self.scale,
                        '-loop', '0',
                        '-vcodec', 'libwebp',
                        '-y', f"{self.base_dir}/samples/bravo.webp"
                    ]
                },

                {
                    "name": "charlie",
                    "notes": "This sets `-compression_level 0`",
                    "command": ['/opt/homebrew/bin/ffmpeg', 
                        '-i', f"{self.video_dir}/input_1.mp4", 
                        '-vf', self.scale,
                        '-loop', '0',
                        '-vcodec', 'libwebp',
                        '-compression_level', '0',
                        '-y', f"{self.base_dir}/samples/charlie.webp"
                    ]
                },

                {
                    "name": "delta",
                    "notes": "This sets `-compression_level 6`",
                    "command": ['/opt/homebrew/bin/ffmpeg', 
                        '-i', f"{self.video_dir}/input_1.mp4", 
                        '-vf', self.scale,
                        '-loop', '0',
                        '-vcodec', 'libwebp',
                        '-compression_level', '6',
                        '-y', f"{self.base_dir}/samples/delta.webp"
                    ]
                },

                {
                    "name": "echo",
                    "notes": "This sets `-compression_level 6` and `-quality` to 85 (default is 75)",
                    "command": ['/opt/homebrew/bin/ffmpeg', 
                        '-i', f"{self.video_dir}/input_1.mp4", 
                        '-vf', self.scale,
                        '-loop', '0',
                        '-vcodec', 'libwebp',
                        '-compression_level', '6',
                        '-quality', '85',
                        '-y', f"{self.base_dir}/samples/echo.webp"
                    ]
                },

                {
                    "name": "foxtrot",
                    "notes": "This sets `-compression_level 6` and `-quality` to 95 (default is 75)",
                    "command": ['/opt/homebrew/bin/ffmpeg', 
                        '-i', f"{self.video_dir}/input_1.mp4", 
                        '-vf', self.scale,
                        '-loop', '0',
                        '-vcodec', 'libwebp',
                        '-compression_level', '6',
                        '-quality', '95',
                        '-y', f"{self.base_dir}/samples/foxtrot.webp"
                    ]
                },

                {
                    "name": "golf",
                    "notes": "This sets `-compression_level 6` and `-quality` to 100 (default is 75)",
                    "command": ['/opt/homebrew/bin/ffmpeg', 
                        '-i', f"{self.video_dir}/input_1.mp4", 
                        '-vf', self.scale,
                        '-loop', '0',
                        '-vcodec', 'libwebp',
                        '-compression_level', '6',
                        '-quality', '100',
                        '-y', f"{self.base_dir}/samples/golf.webp"
                    ]
                },

                {
                    "name": "hotel",
                    "notes": "This sets `-compression_level 6` and `-quality` to 65 (default is 75)",
                    "command": ['/opt/homebrew/bin/ffmpeg', 
                        '-i', f"{self.video_dir}/input_1.mp4", 
                        '-vf', self.scale,
                        '-loop', '0',
                        '-vcodec', 'libwebp',
                        '-compression_level', '6',
                        '-quality', '65',
                        '-y', f"{self.base_dir}/samples/hotel.webp"
                    ]
                },

                {
                    "name": "india",
                    "notes": "Back to defaut quality but adding `-preset none`",
                    "command": ['/opt/homebrew/bin/ffmpeg', 
                        '-i', f"{self.video_dir}/input_1.mp4", 
                        '-vf', self.scale,
                        '-loop', '0',
                        '-vcodec', 'libwebp',
                        '-compression_level', '6',
                        '-preset', 'none',
                        '-y', f"{self.base_dir}/samples/india.webp"
                    ]
                },

                {
                    "name": "juliett",
                    "notes": "Back to defaut quality but adding `-preset picture`",
                    "command": ['/opt/homebrew/bin/ffmpeg', 
                        '-i', f"{self.video_dir}/input_1.mp4", 
                        '-vf', self.scale,
                        '-loop', '0',
                        '-vcodec', 'libwebp',
                        '-compression_level', '6',
                        '-preset', 'picture',
                        '-y', f"{self.base_dir}/samples/juliett.webp"
                    ]
                },

                {
                    "name": "kilo",
                    "notes": "Back to defaut quality but adding `-preset photo`",
                    "command": ['/opt/homebrew/bin/ffmpeg', 
                        '-i', f"{self.video_dir}/input_1.mp4", 
                        '-vf', self.scale,
                        '-loop', '0',
                        '-vcodec', 'libwebp',
                        '-compression_level', '6',
                        '-preset', 'photo',
                        '-y', f"{self.base_dir}/samples/kilo.webp"
                    ]
                },

                {
                    "name": "lima",
                    "notes": "Back to defaut quality but adding `-preset drawing`",
                    "command": ['/opt/homebrew/bin/ffmpeg', 
                        '-i', f"{self.video_dir}/input_1.mp4", 
                        '-vf', self.scale,
                        '-loop', '0',
                        '-vcodec', 'libwebp',
                        '-compression_level', '6',
                        '-preset', 'drawing',
                        '-y', f"{self.base_dir}/samples/lima.webp"
                    ]
                },

                {
                    "name": "mike",
                    "notes": "Back to defaut quality but adding `-preset icon`",
                    "command": ['/opt/homebrew/bin/ffmpeg', 
                        '-i', f"{self.video_dir}/input_1.mp4", 
                        '-vf', self.scale,
                        '-loop', '0',
                        '-vcodec', 'libwebp',
                        '-compression_level', '6',
                        '-preset', 'icon',
                        '-y', f"{self.base_dir}/samples/mike.webp"
                    ]
                },

                {
                    "name": "november",
                    "notes": "Back to defaut quality but adding `-preset text`",
                    "command": ['/opt/homebrew/bin/ffmpeg', 
                        '-i', f"{self.video_dir}/input_1.mp4", 
                        '-vf', self.scale,
                        '-loop', '0',
                        '-vcodec', 'libwebp',
                        '-compression_level', '6',
                        '-preset', 'text',
                        '-y', f"{self.base_dir}/samples/november.webp"
                    ]
                },

            ]



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
                <h2>Details</h2>
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

        self.parts['BODY'] = ''

        new_stuff = []
        for cmd in self.ffmpeg_commands:
            print(cmd)
            new_stuff.append(f'''
<div>
<div>{cmd['name']}</div>
<img src="samples/{cmd['name']}.webp" >
<div>{cmd['notes']}</div>
<div>{" ".join(cmd['command'])}</div>
</div>
 <hr />
                             ''')


        self.parts['BODY'] = "\n".join(new_stuff)


        if self.parts['HEAD'] != '':
            self.parts['ESCAPED_HEAD'] = f'''
            <h2>&lt;head&gt;</h2>
            <pre><code class="language-html">{escape(self.parts['HEAD'])}</code></pre>
            '''

        if self.parts['BODY'] != '':
            self.parts['ESCAPED_BODY'] = f'''
            <h2>HTML</h2>
            <pre><code class="language-html">{escape(self.parts['BODY'])}</code></pre>
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

    def render_files(self):
        for output in self.ffmpeg_commands:
            print(subprocess.run(output['command']))

    def get_file_sizes(self):
        for source in self.ffmpeg_commands:
            source_path = f"{self.base_dir}/samples/{source['name']}.webp"
            source['size'] = f"{os.path.getsize(source_path):,}"
            # print(source)



if __name__ == "__main__":
    b = Builder()
    #b.render_files()
    b.content_files = ['BODY.html', 'HEAD.html', 'JAVASCRIPT.js', 'CSS.css', 'TEMPLATE.html']
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


