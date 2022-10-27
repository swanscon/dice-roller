let adv = false;
let dis = false;
let rollValue = 0;
let secondValue = 0;

export function roll() {
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
    document.querySelector("#total").innerHTML = (rollValue + 1);
    if (rollValue === 0) {
        document.querySelector("#emote").innerHTML = "Natural 1...";
    } else if (rollValue === 19) {
        document.querySelector("#emote").innerHTML = "Natural 20!!!";
    } else {
        document.querySelector("#emote").innerHTML = "...";
    }
}

export function advantage() {
    if (adv === false) {
        adv = true;
        document.querySelector("#total").innerHTML = "Roll with Advantage";
    }
}

export function disadvantage() {
    if (dis === false) {
        dis = true;
        document.querySelector("#total").innerHTML = "Roll with Disadvantage";
    }
}