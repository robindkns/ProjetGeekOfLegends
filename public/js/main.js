import {personnage,guerrier,archer,mage,boss} from "./classes.js";

function postureOff(perso) {
    perso.classe.push("Offensif");
    perso.ptsAtt = perso.ptsAtt * 1.4;
    perso.pdv= perso.pdv * 0.75;
    perso.ptsAtt = Math.round(perso.ptsAtt)
    perso.pdv = Math.round(perso.pdv)
}

function postureDef(perso) {
    perso.classe.push("Défensif");
    perso.ptsAtt = perso.ptsAtt * 0.5;
    perso.pdv = perso.pdv * 2.5;
    perso.ptsAtt = Math.round(perso.ptsAtt)
    perso.pdv = Math.round(perso.pdv)
    // Besoin d'ajouter 2 chances d'être attaqué
}

function combat(boss,heroWar,heroMag,heroArc) {
    while (boss.pdv > 0 || (heroWar.pdv > 0 && heroMag.pdv > 0 && heroArc.pdv > 0)) {
        
    }
}

// Les 3 boss

let sauron = new bossFinal("Sauron",500,40);
let chronos = new bossFinal("Chronos",300,65);
let lilith = new bossFinal("Lilith",400,50);

// les 3 héros

let heroGuerrier = new guerrier("",0,0,["Guerrier"]);
let heroMage = new mage("",0,0,["Mage"]);
let heroArcher = new archer("",0,0,["Archer"]);

//Début du jeu

alert("Veuillez ouvrir la console de commande (F12)");
console.log("⚔️ Bienvenue dans World of WarGeek ⚔️");
console.log("* Dans ce jeu, vous allez devoir allier toutes vos forces afin de venir à bout d'un des trois boss défendant le donjon de Molenkmar ! *");
console.log("* Un précieux trésor y est caché, richesses et fortune pour le restant de votre vie vous est promis si vous y parvenez... *");
console.log("* Dans cette quête, vous controlerez trois héros *");
console.log("* Tous possèdent des points de vie (PV) et des points d'attaque (PA) *");
console.log("* Chaque héros possède une caractéristique propre à lui-même *");
console.log("----------------------------------------------------------------------------");
console.log("🪓 LE GUERRIER 🪓");
console.log("🪓 Tous les tours le guerrier gagne 1 point de rage au bout de 4 points, 🪓");
console.log("🪓 le guerrier gagne 25% d'attaque supplémentaire durant 1 tours 🪓");
console.log("🪓 puis retombe à 0 de rage et perd ce bonus. 🪓");
console.log("----------------------------------------------------------------------------");
console.log("🧙‍♂️ LE MAGE 🧙‍♂️");
console.log("🧙‍♂️ Les attaques du mage lui coute 2 points quand il n'a plus assez de point de mana pour attaquer, 🧙‍♂️");
console.log("🧙‍♂️ il passe 1 tour sans attaquer et il récupère 7 points de mana 🧙‍♂️");
console.log("----------------------------------------------------------------------------");
console.log("🏹 L'ARCHER 🏹");
console.log("🏹 Les attaques de l'archer consomme deux flèches par tour et récupère une flèche chaque tour 🏹");
console.log("🏹 Quand il n'a plus de flèches il passe un tour et récupère 6 flèches 🏹");
console.log("----------------------------------------------------------------------------");

// L'utilisateur choisi le nom de chaque héros

heroGuerrier.nom = prompt("🪓 Comment s'appelle votre Guerrier ? 🪓 ");
heroMage.nom = prompt("🧙‍♂️ Comment s'appelle votre Mage ? 🧙‍♂️");
heroArcher.nom = prompt("🏹 Comment s'appelle votre Archer ? 🏹");

// Vous devez fixer un total de point de vies et de points d'attaques que l'utilisateur lui devra distribuer entre ses héros.
// PV = 320
// Attaque = 90

let totalPV = 320;
let totalPA = 90;

console.log("* Veuillez répartir les points de caractéristiques à vos héros *");

while (totalPV != 0) {
    heroGuerrier.pdv = +prompt(`🪓 Combien de PV souhaitez vous attribuer à votre Guerrier ? (Points restants à distribuer : ${totalPV}) 🪓`);
    totalPV = totalPV - heroGuerrier.pdv;
    heroMage.pdv = +prompt(`🧙‍♂️ Combien de PV souhaitez vous attribuer à votre Mage ? (Points restants à distribuer : ${totalPV}) 🧙‍♂️`);
    totalPV = totalPV - heroMage.pdv;
    heroArcher.pdv = +prompt(`🏹 Combien de PV souhaitez vous attribuer à votre Archer ? (Points restants à distribuer : ${totalPV}) 🏹`);
    totalPV = totalPV - heroArcher.pdv;

    if (totalPV < 0) {
        alert("❗ Vous avez distribuer trop de points. Veuillez recommencer ❗");
        totalPV = 320;
        heroGuerrier.pdv = 0;
        heroMage.pdv = 0;
        heroArcher.pdv = 0;
    } else if (totalPV > 0){
        alert("❗ Vous n'avez pas distribuer assez de points. Veuillez recommencer ❗");
        totalPV = 320;
        heroGuerrier.pdv = 0;
        heroMage.pdv = 0;
        heroArcher.pdv = 0;
    } else if (isNaN(heroGuerrier.pdv) || isNaN(heroMage.pdv) || isNaN(heroArcher.pdv)){
        alert("❗ Erreur d'entrée, veuillez ne rentrer que des nombres. Veuillez recommencer ❗");
        totalPV = 320;
        heroGuerrier.pdv = 0;
        heroMage.pdv = 0;
        heroArcher.pdv = 0;
    } else if (heroArcher.pdv < 10 || heroGuerrier.pdv < 10 || heroMage.pdv < 10){
        alert("❗ Tous vos héros doivent avoir un minimum de 10PV❗");
        totalPV = 320;
        heroGuerrier.pdv = 0;
        heroMage.pdv = 0;
        heroArcher.pdv = 0;
    }
}

while (totalPA != 0) {
    heroGuerrier.ptsAtt = +prompt(`🪓 Combien de PA souhaitez vous attribuer à votre Guerrier ? (Points restants à distribuer : ${totalPA}) 🪓`);
    totalPA = totalPA - heroGuerrier.ptsAtt;
    heroMage.ptsAtt = +prompt(`🧙‍♂️ Combien de PA souhaitez vous attribuer à votre Mage ? (Points restants à distribuer : ${totalPA}) 🧙‍♂️`);
    totalPA = totalPA - heroMage.ptsAtt;
    heroArcher.ptsAtt = +prompt(`🏹 Combien de PA souhaitez vous attribuer à votre Archer ? (Points restants à distribuer : ${totalPA}) 🏹`);
    totalPA = totalPA - heroArcher.ptsAtt;

    if (totalPA < 0) {
        alert("❗ Vous avez distribuer trop de points. Veuillez recommencer ❗");
        totalPA = 90;
        heroGuerrier.ptsAtt = 0;
        heroMage.ptsAtt = 0;
        heroArcher.ptsAtt = 0;
    } else if (totalPA > 0){
        alert("❗ Vous n'avez pas distribuer assez de points. Veuillez recommencer ❗");
        totalPA = 90;
        heroGuerrier.ptsAtt = 0;
        heroMage.ptsAtt = 0;
        heroArcher.ptsAtt = 0;
    } else if (isNaN(heroGuerrier.ptsAtt) || isNaN(heroMage.ptsAtt) || isNaN(heroArcher.ptsAtt)){
        alert("❗ Erreur d'entrée, veuillez ne rentrer que des nombres. Veuillez recommencer ❗");
        totalPA = 90;
        heroGuerrier.ptsAtt = 0;
        heroMage.ptsAtt = 0;
        heroArcher.ptsAtt = 0;
    } else if (heroArcher.ptsAtt < 5 || heroGuerrier.ptsAtt < 5 || heroMage.ptsAtt < 5){
        alert("❗ Tous vos héros doivent avoir un minimum de 10PV❗");
        totalPA = 90;
        heroGuerrier.ptsAtt = 0;
        heroMage.ptsAtt = 0;
        heroArcher.ptsAtt = 0;
    }
}


console.log("----------------------------------------------------------------------------");

console.log("* Pour chacun de vos héros, trois manières d'affronter cette quête de toute une vie s'offre à vous *");
console.log("🗡️ La manière OFFENSIVE 🗡️");
console.log("🗡️ Elle augmente de deux cinquième (x1.4) ses dégâts d'attaque mais diminue d'un quart ses points de vie (x0.75) 🗡️");
console.log("🛡️ La manière DÉFENSIVE 🛡️");
console.log("🛡️ Diminue de moitié(x0.5) ses dégats d'attaque mais augmente de deux fois et demi ses points de vie (x2.5) 🛡️");
console.log("🛡️ Augmente de deux les chances d'être attaqué par le boss 🛡️");
console.log("🟢 La manière NORMALE 🟢");
console.log("🟢 Le héros n'aura pas d'augmentation ou diminution des ses caractéristiques 🟢");
console.log("----------------------------------------------------------------------------");

let heros = [heroGuerrier,heroMage,heroArcher];


for (let i = 0; i < heros.length; i++) {
    let postureChoice = +prompt(`🗡️ 1. La manière OFFENSIVE 🗡️\n🛡️ 2. La manière DÉFENSIVE 🛡️\n🟢3. La manière NORMALE 🟢\nQuelle est la manière avec laquelle votre ${heros[i].classe} va aborder cette aventure ? (1,2)`)
    if (postureChoice == 1){
        postureOff(heros[i]);
    } else if (postureChoice == 2){
        postureDef(heros[i]);
    } else if (postureChoice == 3){
        heros[i].classe.push("Normale");
    } else {
        alert("❗ Erreur d'entrée, veuillez uniquement choisir 1, 2 ou 3 ❗")
        i--;
    }
}

console.log(`* ${heroGuerrier.nom}, votre ${heroGuerrier.classe[0]} agira avec une posture ${heroGuerrier.classe[1]} ! *`);
console.log(`* ${heroMage.nom}, votre ${heroMage.classe[0]} agira avec une posture ${heroMage.classe[1]} ! *`);
console.log(`* ${heroArcher.nom}, votre ${heroArcher.classe[0]} agira avec une posture ${heroArcher.classe[1]} ! *`);

console.log("----------------------------------------------------------------------------");

  //Attribuer les points de mana du mage : un chiffre qui sera aléatoirement imposé entre les suivants 7 , 9 ou 11.
  let randomMana = Math.floor(Math.random() * 3);

    if (randomMana == 0) {
        heroMage.mana = 7;
    } else if (randomMana == 1){
        heroMage.mana = 9;
    } else if (randomMana == 2){
        heroMage.mana = 11;
    }

  //Attribuer le nombre de flèches : un chiffre qui sera aléatoirement imposé entre  7, 8 , 9 ,10 ,11.
    heroArcher.fleche = Math.floor(Math.random() * (11 - 7) + 7);


console.log("* Voici les différentes stats de vos héros : *");
console.log(`🪓 ${heroGuerrier.nom} : 🪓\n🪓 Points de vie : ${heroGuerrier.pdv} 🪓\n🪓 Points d'attaque : ${heroGuerrier.ptsAtt} 🪓\n🪓 Points de rage : ${heroGuerrier.rage} 🪓`);
console.log(`🧙‍♂️ ${heroMage.nom} : 🧙‍♂️\n🧙‍♂️ Points de vie : ${heroMage.pdv} 🧙‍♂️\n🧙‍♂️ Points d'attaque : ${heroMage.ptsAtt} 🧙‍♂️\n🧙‍♂️ Points de mana : ${heroMage.mana} 🧙‍♂️`);
console.log(`🏹 ${heroArcher.nom} : 🏹\n🏹 Points de vie : ${heroArcher.pdv} 🏹\n🏹 Points d'attaque : ${heroArcher.ptsAtt} 🏹\n🏹 Nombre de flèches : ${heroArcher.fleche} 🏹`);

console.log("----------------------------------------------------------------------------");
console.log("🏰 En quête du très prisé trésor du donjon de Molenkmar, vous vous dirigez vers ce dernier d'un pas assuré et conquérant 🏰");
console.log("🏰 Vous avez le choix entre 3 chemins différents afin de débuter votre mission 🏰");
console.log("🏰 1. L'aile ouest du donjon, poussièreuse et remplie de nids d'arachnides et de toiles épaisses les recouvrant... 🏰");
console.log("🏰 2. L'aile est du donjon, une odeur cadavérique et nauséabonde émane de ces couloirs étroits... 🏰");
console.log("🏰 3. Le hall central, des cadavres sont suspendus le long d'un tapis tâché de sang déroulé dans l'obscurité... 🏰");
console.log("----------------------------------------------------------------------------");

let chemin = +prompt("🏰 Quel chemin souhaites-tu emprunter ? 🏰");
let choiceDone = false;
let gameBoss = {};

while (choiceDone == false) {
    switch (chemin) {
        case 1:                     //Boss choisi : Chronos
            gameBoss = chronos;
            console.log(`🪽 Vous avancez péniblement à travers les toiles d'araignées et autres insectes ayant infesté l'aile ouest de Molenkmar 🪽`);
            console.log(`🪽 Devant vous se dresse un homme grand de 6 mètres, deux ailes dans le dos, arborant fièrement une géante faux 🪽`);
            console.log(`🪽 "Mouahahahah, je m'appelle ${gameBoss.nom}, dieu grec, je suis la personnification du temps." 🪽`);
            console.log(`🪽 ${gameBoss.nom} : "J'espère que vous êtes prêts à voir la tête de vos compagnon entre mes mains..." 🪽`);
            choiceDone = true;
            break;
        case 2:                     //Boss choisi : Lilith
            gameBoss = lilith;
            console.log(`🥀 Plus vous progressez dans ces couloirs étroits aux murs tâchés de sang, l'odeur infecte s'intensifie... 🥀`);
            console.log(`🥀 Vous arrivez dans une grande salle, au milieu de 4 piliers se tient une femme très élégantes, mesurant plus de 3 mètres avec deux énormes cornes sortant de son crâne 🥀`);
            console.log(`🥀 "Hmmm, j'ai senti votre exquise odeur dès que vous avez mis pied dans les couloirs de mes quartiers" 🥀`);
            console.log(`🥀 "Je m'apelle ${gameBoss.nom}, démon de la nuit" 🥀`);
            console.log(`🥀 ${gameBoss.nom} : "Je vais me faire un plaisir de me délecter de chaque goutte de sang qui coule lentement dans vos veines..." 🥀`);
            choiceDone = true;
            break;
        case 3:                     //Boss choisi : Sauron
            gameBoss = sauron;
            console.log(`👁️ Certains cadavres se détachent et tombent au fur et à mesure que vous progressez sur ce grand tapis noir tâché de sang 👁️`);
            console.log(`👁️ Le haut d'un escalier de longues marches, un grand guerrier armé d'une armure squelettique 👁️`);
            console.log(`👁️ "HAHAHAHA, vous avez vraiment choisi le pire chemin à emprunter" 👁️`);
            console.log(`👁️ ${gameBoss.nom} : "VOUS ALLEZ SENTIR VOS OS SE BRISER UN À UN !" 👁️`);
            choiceDone = true;
            break;
    
        default:
            alert("Affrontez vos peurs, faites un choix (1 , 2 , 3)");
            chemin = +prompt("🏰 Quel chemin souhaites-tu emprunter ? 🏰");
            break;
    }
}

alert(`☠️ LES 3 HÉROS SAUTENT À LA GORGE DE ${gameBoss.nom} ☠️`)
combat(gameBoss,heroGuerrier,heroMage,heroArcher);