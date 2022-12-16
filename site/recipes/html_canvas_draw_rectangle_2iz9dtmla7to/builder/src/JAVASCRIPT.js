function Drawer(canvas) {
    this.canvas = canvas
    this.context = this.canvas.getContext('2d')
    this.drawing = false
    this.repositioning = false
    this.initialX = null
    this.initialY = null
    this.selectionWidth = null
    this.selecitonHeight = null

    const startDrawing = (event) => {
        this.drawing = true
        this.initialX = event.offsetX
        this.initialY = event.offsetY
    }

    const keepDrawing = (event) => {
        if (this.drawing) {
            if (this.repositioning) {
                this.initialX = event.offsetX - this.selectionWidth
                this.initialY = event.offsetY - this.selectionHeight
            } else {
                this.selectionWidth = event.offsetX - this.initialX
                this.selectionHeight = event.offsetY - this.initialY
            }
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.context.beginPath()
            this.context.rect(
                this.initialX,
                this.initialY,
                this.selectionWidth,
                this.selectionHeight
            )
            this.context.strokeStyle = 'red'
            this.context.lineWidth = 0.4
            this.context.stroke()
        }
    }

    const stopDrawing = () => {
        this.drawing = false
    }

    const handleKeyDown = (event) => {
        if (this.drawing) {
            if (event.key === ' ') {
                event.preventDefault()
                this.repositioning = true
            }
        }
    }

    const handleKeyUp = (event) => {
        this.repositioning = false
    }

    this.canvas.addEventListener('pointerdown', startDrawing)
    this.canvas.addEventListener('pointermove', keepDrawing)
    this.canvas.addEventListener('pointerup', stopDrawing)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
}

const init = () => {
    const theDrawer = new Drawer(document.getElementById('workArea'))
}

document.addEventListener('DOMContentLoaded', init)
