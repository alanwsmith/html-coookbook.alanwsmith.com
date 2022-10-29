#!/bin/bash

fswatch -o -r src | xargs -I{} ./build.py 

