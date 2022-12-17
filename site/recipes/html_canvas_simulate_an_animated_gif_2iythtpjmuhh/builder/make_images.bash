#!/bin/bash

/opt/homebrew/bin/ffmpeg -ss 2:31 -to 2:33 -i "/Users/alan/GIFs/factory/Arteis 1 Launch/_source/Artemis-1-launches-CdTnwmLMaDY.mp4" -vf "scale=500:-2,fps=30" -q:v 5 -y "../images/%d.jpg"


# /opt/homebrew/bin/ffmpeg \
# -ss 2:31 \
# -to 2:33 \
# -i "/Users/alan/GIFs/factory/Arteis 1 Launch/_source/Artemis-1-launches-CdTnwmLMaDY.mp4" \
# -vf "scale=500:-2:flags=lanczos,fps=30,split[s0][s1];[s0]palettegen=max_colors=64:reserve_transparent=0[p];[s1][p]paletteuse" \
# -y "../example.gif"


# /opt/homebrew/bin/ffmpeg \
# -ss 2:31 \
# -to 2:33 \
# -i "/Users/alan/GIFs/factory/Arteis 1 Launch/_source/Artemis-1-launches-CdTnwmLMaDY.mp4" \
# -vf "scale=500:-2:flags=lanczos,fps=30,split[s0][s1];[s0]palettegen=max_colors=64:reserve_transparent=0[p];[s1][p]paletteuse" \
# -an -y "../example.webm"

# /opt/homebrew/bin/ffmpeg \
# -ss 2:31 \
# -to 2:33 \
# -i "/Users/alan/GIFs/factory/Arteis 1 Launch/_source/Artemis-1-launches-CdTnwmLMaDY.mp4" \
# -vf "scale=500:-2:flags=lanczos,fps=30,split[s0][s1];[s0]palettegen=max_colors=64:reserve_transparent=0[p];[s1][p]paletteuse" \
# -y "../example.webp"

ffmpeg \
-ss 2:31 \
-to 2:33 \
-i "assets/artemis.mp4" \
-vcodec libwebp -filter:v fps=fps=30 -lossless 0  -compression_level 3 -q:v 70 -loop 100 -preset picture -an -vsync 0 -s 500:280 -y "../example.webp"

