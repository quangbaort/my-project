// snow effects
class SNOW {
    constructor() {
        this.snow = []
        this.canvas = document.createElement("canvas")
        this.ctx = this.canvas.getContext("2d")
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        this.canvas.style.position = "fixed"
        this.canvas.style.top = "0"
        this.canvas.style.left = "0"
        this.canvas.style.zIndex = "9999"
        this.canvas.style.pointerEvents = "none"
        document.body.appendChild(this.canvas)
        this.init()
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        this.ctx.beginPath()
        this.snow.forEach((s) => {
            this.ctx.moveTo(s.x, s.y)
            this.ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2, true)
        })
        this.ctx.fill()
        this.moveSnow()
    }
    moveSnow() {
        this.snow.forEach((s) => {
            s.y += s.d
            if (s.y > this.canvas.height) {
                s.y = -s.r
            }
        })
    }
    addSnow() {
        this.snow.push({
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            r: Math.random() * 10,
            d: Math.random() + 10,
        })
        this.draw()
        setTimeout(() => {
            this.addSnow()
        }, 200)
        setTimeout(() => {
            this.moveSnow()
        }, 1000 / 60)

    }
    init() {
        this.addSnow()
    }
}
