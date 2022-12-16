const state = {
    images: [],
    images_loaded: false,
    started: false,
    current_image: 0,
}

const kickoff = () => {
    state.ctx.clearRect(0, 0, 150, 150)
    state.ctx.drawImage(state.images[state.current_image], 0, 0)
    console.log(state.current_image)
    if (state.current_image < state.images.length - 1) {
        state.current_image += 1
    } else {
        state.current_image = 0
    }
}

const checkImagesAreLoaded = () => {
    if (state.started === false) {
        state.images_loaded = true
        for (let i = 0; i < state.images.length; i++) {
            if (state.images[i].complete === false) {
                state.images_loaded = false
                break
            }
        }
        if (state.images_loaded === true) {
            state.started = true
            setInterval(kickoff, 33)
        }
    }
}

const init = () => {
    for (let i = 0; i < 30; i++) {
        state.images.push(new Image())
        state.images[i].src = `images/${i}.jpg`
        state.images[i].addEventListener('load', () => {
            checkImagesAreLoaded()
        })
    }
    state.canvas = document.getElementById('canvas')
    state.ctx = canvas.getContext('2d')
}

document.addEventListener('DOMContentLoaded', init)
