/* ==========================================================
   TERMINAL TYPING ENGINE
========================================================== */

const terminal = document.getElementById("terminalBody");

/* ==========================================================
   SETTINGS
========================================================== */

const TYPE_SPEED = 22;

/* ==========================================================
   TYPE LINE
========================================================== */

function typeLine(text){

    return new Promise(resolve=>{

        const line = document.createElement("div");

        line.className = "terminal-line";

        terminal.appendChild(line);

        let i = 0;

        const timer = setInterval(()=>{

            line.textContent = "> " + text.substring(0,i);

            terminal.scrollTop = terminal.scrollHeight;

            i++;

            if(i > text.length){

                clearInterval(timer);

                resolve();

            }

        },TYPE_SPEED);

    });

}

/* ==========================================================
   TYPE MULTIPLE LINES
========================================================== */

async function typeLines(lines){

    for(const line of lines){

        await typeLine(line);

        await wait(120);

    }

}

/* ==========================================================
   CLEAR TERMINAL
========================================================== */

function clearTerminal(){

    terminal.innerHTML = "";

}

/* ==========================================================
   BLINK CURSOR
========================================================== */

function addCursor(){

    const cursor=document.createElement("span");

    cursor.id="terminalCursor";

    cursor.textContent="█";

    terminal.appendChild(cursor);

}

function removeCursor(){

    const cursor=document.getElementById("terminalCursor");

    if(cursor){

        cursor.remove();

    }

}
/* ==========================================================
   WAIT
========================================================== */

function wait(ms){

    return new Promise(resolve=>{

        setTimeout(resolve,ms);

    });

}
