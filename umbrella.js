export class Umbrella {
    x;
    y;
    width = 25;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    update(mouse) {
        this.x = mouse.x;
        this.y = mouse.y;
    }
    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width / 2, 0, Math.PI * 2);
        ctx.fill();
    }
}