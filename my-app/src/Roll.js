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

let dice = document.querySelectorAll("img");
let emote = document.querySelector("#emote");
let total = document.querySelector("#total");

export function roll() {
    document.getElementById("first").style.display = "inline";
    document.getElementById("emote").style.display = "none";
    document.getElementById("total").style.display = "none";
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        document.getElementById("emote").style.display = "inline";
        document.getElementById("total").style.display = "inline";
        dice.forEach(function(die){
            die.style.display = "none";
            die.classList.remove("shake");
        });
    },
    1000
    );
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
};

export function advantage() {
    if (adv === false) {
        adv = true;
        document.getElementById("second").style.display = "inline";
        document.querySelector("#total").innerHTML = "Roll with Advantage";
    }
};

export function disadvantage() {
    if (dis === false) {
        dis = true;
        document.getElementById("second").style.display = "inline";
        document.querySelector("#total").innerHTML = "Roll with Disadvantage";
    }
};

export default DiceMod;