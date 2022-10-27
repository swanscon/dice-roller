function attackRoll(mods) {
    let roll = (Math.floor(Math.random() * 20)) + 1;
    if (roll === 1) {
        return 'NATURAL 1...';
    } else if (roll === 20) {
        return 'NATURAL 20!!!';
    }
    for (let i = 0; i < mods.length; i++) {
        roll += mods[i];
    }
    if (roll === 8 || roll === 18) {
        return 'You rolled an ' + String(roll) + '!';
    } else {
        return 'You rolled a ' + String(roll) + '!';
    }
}

function damageRoll(weapon, mod) {
    let roll = (Math.floor(Math.random() * weapon)) + 1 + mod;
    return 'You hit for ' + String(roll) + ' damage!';
}

let proficiency = 2;

const abilityMod = {strength: 3, dexterity: 1, constitution: 1, wisdom: 1, intelligence: 0, charisma: -1};
let attackMod = abilityMod.strength;

const weapons = {dagger: 4, shortsword: 6, greataxe: 12};
let weapon = weapons.shortsword;
