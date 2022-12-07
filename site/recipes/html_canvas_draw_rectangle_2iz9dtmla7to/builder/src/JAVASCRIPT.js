let canvas = null
let context = null
let drawing = false
let moving = false
let params = {}

const startDrawing = (event) => {
    drawing = true
    params.x = event.offsetX
    params.y = event.offsetY
    console.log(event)
}

const keepDrawing = (event) => {
    if (drawing) {
        console.log(event.offsetX)
        if (moving) {
            console.log('moving')
            params.x = event.offsetX - params.width
            params.y = event.offsetY - params.height
        } else {
            console.log('not moving')
            params.width = event.offsetX - params.x
            params.height = event.offsetY - params.y
        }
        context.clearRect(0, 0, canvas.width, canvas.height)
        context.beginPath()
        context.rect(params.x, params.y, params.width, params.height)
        context.strokeStyle = 'black'
        context.lineWidth = 1
        context.stroke()
    }
}

const stopDrawing = (event) => {
    drawing = false
}

const handleKeyDown = (event) => {
    if (drawing) {
        if (event.key === ' ') {
            event.preventDefault()
            moving = true
        }
    }
}

const handleKeyUp = (event) => {
    moving = false
}

const init = () => {
    canvas = document.getElementById('workArea')
    canvas.addEventListener('pointerdown', startDrawing)
    canvas.addEventListener('pointermove', keepDrawing)
    canvas.addEventListener('pointerup', stopDrawing)
    context = canvas.getContext('2d')
    context.fillStyle = 'green'
}

document.addEventListener('DOMContentLoaded', init)
document.addEventListener('keydown', handleKeyDown)
document.addEventListener('keyup', handleKeyUp)
