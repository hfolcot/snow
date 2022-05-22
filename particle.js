export class Particle {
    size;
    x;
    y;
    speed;
    mouse;
    constructor(mouse) {
        this.mouse = mouse;
        this.size = Math.random() * 10;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedY = Math.random() * 5 + 2;
        this.speedX = 0;
    }
    fall() {
        this.y += this.speedY;
        this.x += this.speedX;
        if (this.y > canvas.height) {
            this.size = Math.random() * 10;
            this.x = Math.random() * canvas.width;
            this.y = 0 - this.size;
            this.speedY = Math.random() * 5 + 2;
        }
        if (this.y > this.mouse.y - 50 &&
            this.y < this.mouse.y + 50 &&
            this.x > this.mouse.x - 50 &&
            this.x < this.mouse.x + 50 &&
            this.mouse.x > 0 &&
            this.mouse.x < canvas.width) {
            if (this.x > this.mouse.x - 50 && this.x < this.mouse.x) {
                this.speedX = -2;
            } else if (this.x < this.mouse.x + 50 && this.x > this.mouse.x) {
                this.speedX = 2;
            }
        } else {
            this.speedX = 0;
        }
    }
    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        ctx.fill();
    }
}