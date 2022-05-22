export class Particle {
    size;
    x;
    y;
    speed;
    mouse;
    constructor() {
        this.size = Math.random() * 10;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedY = Math.random() * 5 + 2;
        this.speedX = 0;
    }
    fall(mouse) {
        this.y += this.speedY;
        this.x += this.speedX;
        if (this.y > canvas.height) {
            this.size = Math.random() * 10;
            this.x = Math.random() * canvas.width;
            this.y = 0 - this.size;
            this.speedY = Math.random() * 5 + 2;
            this.speedX = 0;
        }
        if (this.y > mouse.y - 50 &&
            this.y < mouse.y + 50 &&
            this.x > mouse.x - 50 &&
            this.x < mouse.x + 50 &&
            mouse.x > 0 &&
            mouse.x < canvas.width) {
            if (this.x > mouse.x - 50 && this.x < mouse.x) {
                this.speedX += -0.2;
            } else if (this.x < mouse.x + 50 && this.x > mouse.x) {
                this.speedX += 0.2;
            }
        } else {
            if (this.speedX > 0) {
                this.speedX += -0.01;
            } else if (this.speedX < 0) {
                this.speedX += 0.05;
            }
        }
    }
    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        ctx.fill();
    }
}