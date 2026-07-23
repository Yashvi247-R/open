/* ==========================================================
   GLITCH ENGINE
========================================================== */

const glitchScreen = document.getElementById("glitchscreen");

/* ==========================================================
   VARIABLES
========================================================== */

let glitchTimer = null;
let glitchRunning = false;

/* ==========================================================
   START
========================================================== */

function triggerGlitch() {

    if (glitchRunning) return;

    glitchRunning = true;

    startGlitch();

}

/* ==========================================================
   STOP
========================================================== */

function stopGlitch() {

    glitchRunning = false;

    clearInterval(glitchTimer);

    glitchScreen.style.transform = "";
    glitchScreen.style.filter = "";
    glitchScreen.style.clipPath = "";
    glitchScreen.style.opacity = "1";

}

/* ==========================================================
   MAIN LOOP
========================================================== */

function startGlitch() {

    glitchTimer = setInterval(() => {

        randomGlitch();

    }, 80);

}

/* ==========================================================
   RANDOM GLITCH
========================================================== */

function randomGlitch() {

    if (!glitchRunning) return;

    const x = random(-10, 10);
    const y = random(-8, 8);

    const hue = random(-40, 40);

    const brightness = random(70, 130);

    const sliceTop = random(0, 80);

    const sliceBottom = random(sliceTop + 5, 100);

    glitchScreen.style.transform =
        `translate(${x}px,${y}px)`;

    glitchScreen.style.filter =
        `hue-rotate(${hue}deg)
         brightness(${brightness}%)
         contrast(180%)`;

    glitchScreen.style.clipPath =
        `inset(${sliceTop}% 0 ${100 - sliceBottom}% 0)`;

    glitchScreen.style.opacity =
        Math.random() > 0.92 ? ".6" : "1";

    setTimeout(resetFrame, 40);

}

/* ==========================================================
   RESET
========================================================== */

function resetFrame() {

    if (!glitchRunning) return;

    glitchScreen.style.transform = "";

    glitchScreen.style.filter = "";

    glitchScreen.style.clipPath = "";

    glitchScreen.style.opacity = "1";

}

/* ==========================================================
   RANDOM
========================================================== */

function random(min, max) {

    return Math.floor(

        Math.random() * (max - min + 1)

    ) + min;

}