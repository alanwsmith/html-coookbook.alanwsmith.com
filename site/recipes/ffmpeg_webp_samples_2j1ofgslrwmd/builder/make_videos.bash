#!/bin/bash

IN="in.mp4"
SCALE="fps=15,scale=200:-2"

ffmpeg -i "$IN" -vf "$SCALE" -loop 0 -y alfa.webp


