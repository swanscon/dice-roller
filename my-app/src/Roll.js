let adv = false;
let dis = false;
let rollValue = 0;
let secondValue = 0;
let currentMod = 0;

export function roll() {
    document.getElementById("second").style.display = "none";
    rollValue = Math.floor(Math.random()*20);
    if (adv === true) {
        secondValue = Math.floor(Math.random()*20);
        if (secondValue > rollValue) {
            rollValue = secondValue;
        }
        adv = false;
    }
    if (dis === true) {
        secondValue = Math.floor(Math.random()*20);
        if (secondValue < rollValue) {
            rollValue = secondValue;
        }
        dis = false;
    }
    document.querySelector("#emote").innerHTML = (rollValue + 1);
    if (rollValue === 0) {
        document.querySelector("#total").innerHTML = "Natural 1...";
    } else if (rollValue === 19) {
        document.querySelector("#total").innerHTML = "Natural 20!!!";
    } else {
        document.querySelector("#total").innerHTML = "...";
    }
}

export function advantage() {
    if (adv === false) {
        adv = true;
        document.getElementById("second").style.display = "inline";
        document.querySelector("#total").innerHTML = "Roll with Advantage";
    }
}

export function disadvantage() {
    if (dis === false) {
        dis = true;
        document.getElementById("second").style.display = "inline";
        document.querySelector("#total").innerHTML = "Roll with Disadvantage";
    }
}

export function diceMod() {
    currentMod = document.getElementById("modifier");
    console.log(currentMod);
}