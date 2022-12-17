const images = {
    alfa: { img: new Image() },
    bravo: { img: new Image() },
    charlie: { img: new Image() },
    delta: { img: new Image() },
    echo: { img: new Image() },
    foxtrot: { img: new Image() },
    golf: { img: new Image() },
    hotel: { img: new Image() },
    india: { img: new Image() },
}

let loaded_images = 0

const checkLoaded = () => {
    loaded_images += 1
    if (loaded_images == 2) {
        showImages()
    }
}

const showImages = () => {
    console.log('showing')
    document.getElementById('alfa_container').appendChild(images.alfa.img)
    document.getElementById('bravo_container').appendChild(images.bravo.img)
}

const init = () => {
    console.log('init')
    images.alfa.img.src = 'samples/alfa.webp'
    images.bravo.img.src = 'samples/bravo.webp'
    images.alfa.img.addEventListener('load', checkLoaded)
    images.bravo.img.addEventListener('load', checkLoaded)
}

document.addEventListener('DOMContentLoaded', init)
