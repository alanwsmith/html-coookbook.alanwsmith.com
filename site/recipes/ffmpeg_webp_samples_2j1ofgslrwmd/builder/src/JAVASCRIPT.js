const images = {
    raw: [],
    baseline: [],
    c0: [],
    c1: [],
    c2: [],
    c3: [],
    c4: [],
    c5: [],
    c6: [],
}

let loaded_images = 0

const checkLoaded = () => {
    loaded_images += 1
    if (loaded_images == 9) {
        showImages()
    }
}

const showImages = () => {
    console.log('showing')
    for (let image in images) {
        for (let i = 0; i < image.length; i++) {
            const id = `${image}${i}`
            console.log(id)
            const el = document.getElementById(`${image}${i}`)
            if (el) {
                el.appendChild(images[image][i])
            }
        }
    }
}

const init = () => {
    console.log('init')
    for (let name in images) {
        for (let i = 0; i < 4; i++) {
            images[name][i] = new Image()
            images[name][i].src = `samples/${name}.webp`
            images[name][i].addEventListener('load', checkLoaded)
        }
    }
}

document.addEventListener('DOMContentLoaded', init)
