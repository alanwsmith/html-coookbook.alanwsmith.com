let canvas = null
let ctx = null
let images = []
let images_loaded = false
let started = false
let current_image = 1

const doRender = () => {
    ctx.clearRect(0, 0, 500, 280)
    ctx.drawImage(images[current_image], 0, 0)
    if (current_image < images.length - 1) {
        current_image += 1
    } else {
        current_image = 0
    }
}

const checkImagesAreLoaded = () => {
    if (started === false) {
        images_loaded = true
        for (let i = 0; i < images.length; i++) {
            if (images[i].complete === false) {
                images_loaded = false
                break
            }
        }
        if (images_loaded === true) {
            started = true
            setInterval(doRender, 33)
        }
    }
}

const init = () => {
    for (let i = 0; i <= 60; i++) {
        images.push(new Image())
        images[i].src = `images/${i}.jpg`
        images[i].addEventListener('load', () => {
            checkImagesAreLoaded()
        })
    }
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
}

document.addEventListener('DOMContentLoaded', init)
