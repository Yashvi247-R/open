/* ==========================================================
   CAMERA SHAKE ENGINE
========================================================== */

const shakeScreen = document.getElementById("screen");

/* ==========================================================
   VARIABLES
========================================================== */

let shakeAnimation = null;
let shakeIntensity = 0;
let shaking = false;

/* ==========================================================
   START SHAKE
========================================================== */

function triggerShake(intensity = 18, duration = 2000){

    if(shaking) return;

    shaking = true;

    shakeIntensity = intensity;

    const startTime = performance.now();

    function animate(now){

        const elapsed = now - startTime;

        if(elapsed >= duration){

            stopShake();

            return;

        }

        const progress = elapsed / duration;

        const currentIntensity = shakeIntensity * (1 - progress);

        const x = randomFloat(-currentIntensity, currentIntensity);
        const y = randomFloat(-currentIntensity, currentIntensity);
        const rotate = randomFloat(-1.2, 1.2);

        shakeScreen.style.transform =
            `translate(${x}px, ${y}px) rotate(${rotate}deg)`;

        shakeAnimation = requestAnimationFrame(animate);

    }

    shakeAnimation = requestAnimationFrame(animate);

}

/* ==========================================================
   IMPACT SHAKE
========================================================== */

function impactShake(){

    triggerShake(35,600);

}

/* ==========================================================
   MICRO SHAKE
========================================================== */

function microShake(){

    triggerShake(5,250);

}

/* ==========================================================
   EARTHQUAKE
========================================================== */

function earthquakeShake(){

    triggerShake(25,4000);

}

/* ==========================================================
   STOP
========================================================== */

function stopShake(){

    shaking = false;

    cancelAnimationFrame(shakeAnimation);

    shakeScreen.style.transform = "";

}

/* ==========================================================
   RANDOM FLOAT
========================================================== */

function randomFloat(min,max){

    return Math.random()*(max-min)+min;

}