const canvas = document.getElementById('canvas1')
const context = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const particleArray = []
let hue = 0


window.addEventListener('resize', function() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})


const mouse = {
    x: undefined,
    y: undefined
}

canvas.addEventListener('click', function(event) {
    mouse.x = event.x
    mouse.y = event.y
    for (let i = 0 ; i < 100; i++) {
        particleArray.push(new Particle())

    }
})


class Particle {
    constructor() {
        this.x = mouse.x
        this.y = mouse.y
        //this.x = Math.random() * canvas.width
        //this.y = Math.random() * canvas.height
        this.size =  Math.random() * 15 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY =  Math.random() * 3 - 1.5
        this.color = 'hsl(' + hue + ', 100%, 50%)'
    }
    update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.size > 0.2) this.size -= 0.1
    }
    draw() {
        context.fillStyle = this.color
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.fill()
    }
}

function handleParticles() {
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update()
        particleArray[i].draw()
        for (let j = i; j < particleArray.length; j++) {
            const dx = particleArray[i].x - particleArray[j].x
            const dy = particleArray[i].y - particleArray[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
                context.beginPath()
                context.strokeStyle = particleArray[i].color
                context.lineWidth = 1
                context.moveTo(particleArray[i].x, particleArray[i].y)
                context.lineTo(particleArray[j].x, particleArray[j].y)
                context.stroke()
                context.closePath()
            }
        }

        if (particleArray[i].size <= 0.3) {
            particleArray.splice(i, 1)
            i--
        }
    }
}
canvas.addEventListener('mousemove', function(event) {
    mouse.x = event.x
    mouse.y = event.y
    for (let i = 0 ; i < 5; i++) {
        particleArray.push(new Particle())

    }
})

function animate() {
    //context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = 'rgba(0,0,0,0.02)'
    context.fillRect(0, 0, canvas.width, canvas.height)
    handleParticles()
    hue+=2
    requestAnimationFrame(animate)

}

animate()