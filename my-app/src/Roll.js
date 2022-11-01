import { useState } from 'react';

let currentMod = 0;
let currentSymbol = '';

function DiceMod() {
    const [mod, setMod] = useState('')
    if (mod >= 0) {
        currentSymbol = '+'
    } else if (mod < 0){
        currentSymbol = '-'
    };
    currentMod = mod;

    return (
        <div>
            <p id="modifier">Modifier: {currentSymbol}{Math.abs(mod)}</p>
                <input type="range" min="-20" max="20" defaultValue="0" className="modifier" step="1" onChange={(e) => setMod(e.target.value)}/>
        </div>
)};

let adv = false;
let dis = false;
let rollValue = 0;
let secondValue = 0;

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
    document.querySelector("#emote").innerHTML = (rollValue + 1 + Number(currentMod));
    if (rollValue === 0) {
        document.querySelector("#total").innerHTML = "You rolled a natural 1... " + currentSymbol + ' ' + String(Math.abs(currentMod));
    } else if (rollValue === 19) {
        document.querySelector("#total").innerHTML = "You rolled a natural 20! " + currentSymbol + ' ' + String(Math.abs(currentMod));
    } else {
        document.querySelector("#total").innerHTML = "You rolled " + (rollValue + 1) + ' ' + currentSymbol + ' ' + String(Math.abs(currentMod));
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

export default DiceMod;