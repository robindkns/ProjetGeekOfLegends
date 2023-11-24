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
let cimetiere = [];

for (let i = 0; i < randomAttacked.length; i++) {
    // if (randomAttacked[i].posture[1] == "Défensif") {
    //     let moreChance = randomAttacked[i];
    //     randomAttacked.push(moreChance);
    //     cpt++;
    //     i++;
    // }
    if (randomAttacked[i] == heroArc) {
        cimetiere.push(randomAttacked[i]);
        randomAttacked.splice(randomAttacked.indexOf(randomAttacked[i]),1);
    }
}

console.log("Cimetiere");
console.log(cimetiere);
console.log("Perso en vie");
console.log(randomAttacked);
// console.log(randomAttacked);

// for (let i = 0; i < cpt; i++) {
//     randomAttacked.pop();
// }

// console.log(randomAttacked);


// let randomMana = Math.floor(Math.random() * 3);

// console.log(randomMana);

