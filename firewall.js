/* ==========================================================
   FIREWALL ENGINE
========================================================== */

const firewallLayer = document.getElementById("crackLayer");

/* ==========================================================
   VARIABLES
========================================================== */

let firewallHealth = 100;
let firewallInterval = null;

/* ==========================================================
   START FIREWALL
========================================================== */

function initializeFirewall(){

    firewallHealth = 100;

    firewallLayer.style.opacity = "0";

    firewallLayer.style.backgroundImage = "";

}

/* ==========================================================
   FIREWALL BREAK
========================================================== */

function triggerFirewallBreak(){

    clearInterval(firewallInterval);

    firewallHealth = 100;

    firewallLayer.style.opacity = "1";

    firewallInterval = setInterval(updateFirewall,200);

}

/* ==========================================================
   UPDATE
========================================================== */

function updateFirewall(){

    firewallHealth -= 10;

    if(firewallHealth >= 90){

        setFirewallImage("images/crack1.png");

    }

    else if(firewallHealth >= 75){

        setFirewallImage("images/crack2.png");

    }

    else if(firewallHealth >= 60){

        setFirewallImage("images/crack3.png");

    }

    else if(firewallHealth >= 45){

        setFirewallImage("images/crack4.png");

    }

    else if(firewallHealth >= 30){

        setFirewallImage("images/crack5.png");

    }

    else if(firewallHealth >= 15){

        setFirewallImage("images/crack6.png");

    }

    else{

        destroyFirewall();

    }

}

/* ==========================================================
   CHANGE IMAGE
========================================================== */

function setFirewallImage(image){

    firewallLayer.style.backgroundImage =
        `url(${image})`;

}

/* ==========================================================
   DESTROY
========================================================== */

function destroyFirewall(){

    clearInterval(firewallInterval);

    firewallLayer.style.backgroundImage =
        "url(images/crack7.png)";

    firewallLayer.animate(

        [

            {

                transform:"scale(1)",

                opacity:1

            },

            {

                transform:"scale(1.08)",

                opacity:0

            }

        ],

        {

            duration:800,

            easing:"ease-out",

            fill:"forwards"

        }

    );

}