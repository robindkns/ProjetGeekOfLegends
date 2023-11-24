let heroWar = {
    nom : "Warrior",
    posture : ["Warrior","Offensif"],
}
let heroMag = {
    nom : "Mage",
    posture : ["Mage","Défensif"],
}
let heroArc = {
    nom : "Archer",
    posture : ["Archer","Défensif"],
}

let randomAttacked = [heroWar,heroMag,heroArc];
let cpt = 0;

for (let i = 0; i < randomAttacked.length; i++) {
    if (randomAttacked[i].posture[1] == "Défensif") {
        let moreChance = randomAttacked[i];
        randomAttacked.push(moreChance);
        cpt++;
        i++;
    }
}

console.log(randomAttacked);

for (let i = 0; i < cpt; i++) {
    randomAttacked.pop();
}

console.log(randomAttacked);
// let randomMana = Math.floor(Math.random() * 3);

// console.log(randomMana);