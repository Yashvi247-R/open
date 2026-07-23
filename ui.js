/* ==========================================================
   UI ELEMENTS
========================================================== */

const ui = {

    title: document.getElementById("mainTitle"),

    subtitle: document.getElementById("subTitle"),

    loadingFill: document.getElementById("loadingFill"),

    loadingPercent: document.getElementById("loadingPercent"),

    identity: document.getElementById("identityStatus"),

    threat: document.getElementById("threatStatus"),

    firewall: document.getElementById("firewallStatus"),

    statusText: document.getElementById("statusText"),

    statusDot: document.getElementById("statusDot")

};

/* ==========================================================
   TITLE
========================================================== */

function setTitle(title, subtitle){

    ui.title.textContent = title;

    ui.subtitle.textContent = subtitle;

}

/* ==========================================================
   LOADING
========================================================== */

function setProgress(value){

    value = Math.max(0, Math.min(100, value));

    ui.loadingFill.style.width = value + "%";

    ui.loadingPercent.textContent = value + "%";

}

/* ==========================================================
   STATUS
========================================================== */

function setIdentity(value){

    ui.identity.textContent = value;

}

function setThreat(value){

    ui.threat.textContent = value;

}

function setFirewall(value){

    ui.firewall.textContent = value;

}

/* ==========================================================
   SYSTEM STATE
========================================================== */

function setSystemState(state){

    switch(state){

        case "ONLINE":

            ui.statusText.textContent = "ONLINE";

            ui.statusDot.style.background="#00ff55";

            ui.statusDot.style.boxShadow=
            "0 0 12px #00ff55";

        break;

        case "WARNING":

            ui.statusText.textContent="WARNING";

            ui.statusDot.style.background="#ffaa00";

            ui.statusDot.style.boxShadow=
            "0 0 12px orange";

        break;

        case "CRITICAL":

            ui.statusText.textContent="CRITICAL";

            ui.statusDot.style.background="#ff0000";

            ui.statusDot.style.boxShadow=
            "0 0 20px red";

        break;

        case "OFFLINE":

            ui.statusText.textContent="OFFLINE";

            ui.statusDot.style.background="#666";

            ui.statusDot.style.boxShadow="none";

        break;

    }

}

/* ==========================================================
   RESET
========================================================== */

function resetUI(){

    setTitle(

        "INITIALIZING...",

        "Preparing Secure Environment"

    );

    setProgress(0);

    setIdentity("UNKNOWN");

    setThreat("LOW");

    setFirewall("SECURED");

   setSystemState("WARNING");

}