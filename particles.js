/* ==========================================================
   PARTICLE ENGINE
========================================================== */

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

let particles = [];

/* ==========================================================
   RESIZE
========================================================== */

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

/* ==========================================================
   PARTICLE CLASS
========================================================== */

class Particle{

    constructor(x,y,color,size,speedX,speedY,life){

        this.x = x;
        this.y = y;

        this.color = color;

        this.size = size;

        this.speedX = speedX;
        this.speedY = speedY;

        this.life = life;
        this.maxLife = life;

    }

    update(){

        this.x += this.speedX;
        this.y += this.speedY;

        this.speedY += 0.08;

        this.life--;

    }

    draw(){

        ctx.save();

        ctx.globalAlpha = this.life / this.maxLife;

        ctx.fillStyle = this.color;

        ctx.shadowColor = this.color;
        ctx.shadowBlur = 18;

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fill();

        ctx.restore();

    }

}

/* ==========================================================
   CREATE PARTICLE
========================================================== */

function createParticle(x,y,color){

    particles.push(

        new Particle(

            x,
            y,

            color,

            random(1.5,4),

            randomFloat(-6,6),

            randomFloat(-7,-1),

            random(40,80)

        )

    );

}

/* ==========================================================
   CREATE EXPLOSION
========================================================== */

function createExplosion(x,y,count,color){

    for(let i=0;i<count;i++){

        createParticle(x,y,color);

    }

}

/* ==========================================================
   UPDATE LOOP
========================================================== */

function animateParticles(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let i=particles.length-1;i>=0;i--){

        const p = particles[i];

        p.update();

        p.draw();

        if(p.life<=0){

            particles.splice(i,1);

        }

    }

    requestAnimationFrame(animateParticles);

}

animateParticles();

/* ==========================================================
   RANDOM HELPERS
========================================================== */

function random(min,max){

    return Math.floor(
        Math.random()*(max-min+1)
    )+min;

}

function randomFloat(min,max){

    return Math.random()*(max-min)+min;

}