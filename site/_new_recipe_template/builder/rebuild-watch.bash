#!/bin/bash

fswatch -o -r src ./build.py | xargs -I{} ./build.py 

