'use strict'

import { Particle } from './particle.js'

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const mouse = {
    x: 0,
    y: 0
}

document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
})



for (let i = 0; i < 500; i++) {
    particles.push(new Particle(mouse));
}

function animate() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach(particle => {
        particle.fall();
        particle.draw(ctx);
    })
    requestAnimationFrame(animate);
}

animate();