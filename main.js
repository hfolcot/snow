'use strict'

import { Particle } from './particle.js'
import { Umbrella } from './umbrella.js';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const mouse = {
    x: -100,
    y: -100
}

const brolly = new Umbrella(-100, -100);

window.addEventListener('resize', e => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    populateParticles();
})

document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
})

document.addEventListener('touchstart', e => {
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;

})


function populateParticles() {
    particles = [];
    for (let i = 0; i < canvas.width; i++) {
        particles.push(new Particle(mouse));
    }

}

function animate() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach(particle => {
        particle.fall(mouse);
        particle.draw(ctx);
    })
    brolly.update(mouse);
    brolly.draw(ctx);
    requestAnimationFrame(animate);
}

populateParticles();
animate();