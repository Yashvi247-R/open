/* ==========================================================
   ELEMENTS
========================================================== */

const terminalBody = document.getElementById("terminalBody");

const loadingFill = document.getElementById("loadingFill");
const loadingPercent = document.getElementById("loadingPercent");

const mainTitle = document.getElementById("mainTitle");
const subTitle = document.getElementById("subTitle");

const identityStatus = document.getElementById("identityStatus");
const threatStatus = document.getElementById("threatStatus");
const firewallStatus = document.getElementById("firewallStatus");

/* ==========================================================
   SYSTEM LOGS
========================================================== */

const bootLogs = [

    "Initializing AI Security Core...",
    "Loading Quantum Firewall...",
    "Verifying Encryption Keys...",
    "Loading Threat Database...",
    "Connecting Security Nodes...",
    "Synchronizing AI Modules...",
    "Scanning Local Environment...",
    "Starting Neural Engine...",
    "Preparing Facial Scanner...",
    "Checking Firewall Integrity...",
    "Launching Secure Interface..."

];

/* ==========================================================
   START
========================================================== */

window.addEventListener("load", () => {

    startBootSequence();

});

/* ==========================================================
   BOOT SEQUENCE
========================================================== */

async function startBootSequence(){

    await terminalSequence();

    await loadingSequence();

    await finishBoot();

}

/* ==========================================================
   TERMINAL
========================================================== */

function terminalSequence(){

    return new Promise(resolve=>{

        let index = 0;

        const timer = setInterval(()=>{

            if(index >= bootLogs.length){

                clearInterval(timer);

                resolve();

                return;

            }

            addTerminalLine(bootLogs[index]);

            index++;

        },450);

    });

}

/* ==========================================================
   ADD TERMINAL LINE
========================================================== */

function addTerminalLine(text){

    const line = document.createElement("div");

    line.textContent = "> " + text;

    terminalBody.appendChild(line);

    terminalBody.scrollTop = terminalBody.scrollHeight;

}

/* ==========================================================
   LOADING
========================================================== */

function loadingSequence(){

    return new Promise(resolve=>{

        let progress = 0;

        const timer = setInterval(()=>{

            progress++;

            loadingFill.style.width = progress + "%";

            loadingPercent.textContent = progress + "%";

            if(progress >= 100){

                clearInterval(timer);

                resolve();

            }

        },35);

    });

}

/* ==========================================================
   BOOT COMPLETE
========================================================== */

function finishBoot(){

    return new Promise(resolve=>{

       setTitle(

    "SYSTEM READY",

    "Waiting For Incoming Visitor"

);

        identityStatus.textContent = "UNKNOWN";

        threatStatus.textContent = "LOW";

        firewallStatus.textContent = "SECURED";

        addTerminalLine("");

        addTerminalLine("System Boot Completed.");

        addTerminalLine("Monitoring Environment...");

       setTimeout(async()=>{

    resolve();

    await startSecurityAlert();

},2000);

    });

}

/* ==========================================================
   SECURITY ALERT
========================================================== */

const redFlash = document.getElementById("redFlash");

/* ==========================================================
   ALERT LOGS
========================================================== */

const alertLogs = [

    "Unknown presence detected...",
    "Identity verification failed...",
    "Running deep facial scan...",
    "Searching global database...",
    "No matching profile found...",
    "Threat level increasing...",
    "Emergency protocol activated...",
    "Firewall entering defense mode..."

];

/* ==========================================================
   START SECURITY ALERT
========================================================== */

async function startSecurityAlert(){

    flashRed();

    mainTitle.textContent = "SECURITY ALERT";

    subTitle.textContent = "Unauthorized Entity Detected";

    setThreat("CRITICAL");

    firewallStatus.textContent = "DEFENDING";

    identityStatus.textContent = "UNKNOWN";

    terminalBody.innerHTML = "";

    await alertTerminal();

    await firewallCountdown();

}

/* ==========================================================
   ALERT TERMINAL
========================================================== */

function alertTerminal(){

    return new Promise(resolve=>{

        let index = 0;

        const timer = setInterval(()=>{

            if(index >= alertLogs.length){

                clearInterval(timer);

                resolve();

                return;

            }

            addTerminalLine(alertLogs[index]);

            index++;

        },350);

    });

}

/* ==========================================================
   FIREWALL COUNTDOWN
========================================================== */

function firewallCountdown(){

    return new Promise(resolve=>{

        let integrity = 100;

        const timer = setInterval(async ()=>{

            integrity -= 5;

            setProgress(integrity);

            if(integrity > 70){

                setFirewall("STABLE");

            }

            else if(integrity > 40){

                setFirewall("UNDER ATTACK");

            }

            else if(integrity > 10){

                setFirewall("CRITICAL");

            }

            else{

                setFirewall("FAILED");

            }

            if(integrity <= 0){

                clearInterval(timer);

                setProgress(0);

                addTerminalLine("");

                addTerminalLine("Firewall Integrity Lost.");

                await beginFinalBreach();

                resolve();

            }

        },180);

    });

}
/* ==========================================================
   RED FLASH
========================================================== */

function flashRed(){

    redFlash.animate(

        [

            { opacity:0 },

            { opacity:.9 },

            { opacity:0 }

        ],

        {

            duration:250,

            iterations:5

        }

    );

}

/* ==========================================================
   AUDIO
========================================================== */

const alarmSound = document.getElementById("alarmSound");
const glitchSound = document.getElementById("glitchSound");
const explosionSound = document.getElementById("explosionSound");
const electricSound = document.getElementById("electricSound");
const successSound = document.getElementById("successSound");

/* ==========================================================
   FINAL BREACH
========================================================== */

async function beginFinalBreach(){

    playAlarm();

    addTerminalLine("");
    addTerminalLine("WARNING : Security Shield Offline...");
    addTerminalLine("WARNING : Multiple Firewall Breaches...");
    addTerminalLine("WARNING : AI Control Lost...");
    addTerminalLine("WARNING : Emergency Lockdown Failed...");

    mainTitle.textContent = "SYSTEM FAILURE";

    subTitle.textContent = "Critical Breach Detected";

    triggerGlitch();

    earthquakeShake();

    await sleep(2000);

    stopGlitch();

    impactShake();

triggerFirewallBreak();

    playExplosion();

    await sleep(1200);

    triggerRecovery();
}

/* ==========================================================
   RECOVERY
========================================================== */

function triggerRecovery(){

    stopAlarm();

    playSuccess();

    terminalBody.innerHTML = "";

    mainTitle.textContent = "RECOVERY MODE";

    subTitle.textContent = "Rebuilding AI Core";

    identityStatus.textContent = "ANALYZING";

    threatStatus.textContent = "UNKNOWN";

    firewallStatus.textContent = "REPAIRING";

    loadingFill.style.width = "0%";
    loadingPercent.textContent = "0%";

    addTerminalLine("Emergency Recovery Started...");
    addTerminalLine("Restoring AI Memory...");
    addTerminalLine("Rebuilding Firewall...");
    addTerminalLine("Rechecking Visitor...");
}

/* ==========================================================
   AUDIO HELPERS
========================================================== */

function playAlarm(){

    alarmSound.currentTime = 0;
    alarmSound.loop = true;
    alarmSound.play().catch(()=>{});

}

function stopAlarm(){

    alarmSound.pause();
    alarmSound.currentTime = 0;

}

function playExplosion(){

    explosionSound.currentTime = 0;
    explosionSound.play().catch(()=>{});

}

function playSuccess(){

    successSound.currentTime = 0;
    successSound.play().catch(()=>{});

}


/* ==========================================================
   SLEEP
========================================================== */

function sleep(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}
