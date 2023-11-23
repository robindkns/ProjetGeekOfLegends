import {personnage,guerrier,archer,mage,boss} from "./classes.js";



// Les 3 boss

let sauron = new boss("Sauron",500,40);
let chronos = new boss("Chronos",300,65);
let lilith = new boss("Lilith",400,50);

// les 3 héros

let heroGuerrier = new guerrier("",0,0);
let heroMage = new mage("",0,0);
let heroArcher = new archer("",0,0);

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
console.log("🪓 le guerrier gagne 25% ( * 1.25 ) d'attaque supplémentaire durant 1 tours 🪓");
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

console.log("* Voici les différentes stats de vos héros : *");
console.log(`🪓 ${heroGuerrier.nom} : 🪓\n🪓 Points de vie : ${heroGuerrier.pdv} 🪓\n🪓 Points d'attaque : ${heroGuerrier.ptsAtt} 🪓`);
console.log(`🧙‍♂️ ${heroMage.nom} : 🧙‍♂️\n🧙‍♂️ Points de vie : ${heroMage.pdv} 🧙‍♂️\n🧙‍♂️ Points d'attaque : ${heroMage.ptsAtt} 🧙‍♂️`);
console.log(`🏹 ${heroGuerrier.nom} : 🏹\n🏹 Points de vie : ${heroGuerrier.pdv} 🏹\n🏹 Points d'attaque : ${heroGuerrier.ptsAtt} 🏹`);
console.log("----------------------------------------------------------------------------");


console.log("🧌 LES BOSS 🧌");
console.log("🧌 Trois boss différents défendent Molenkmar 🧌");
console.log("🧌 Tous protègent un des 3 chemins ayant un accès direct à la salle du trésor 🧌");
console.log("🧌 1. L'aile ouest du donjon, poussièreuse et remplie de nids d'arachnides et de toiles épaisses les recouvrant... 🧌");
console.log("🧌 2. L'aile est du donjon, une odeur cadavérique et nauséabonde émane de ces couloirs étroits... 🧌");
console.log("🧌 3. Le hall central, des cadavres sont suspendus le long d'un tapis tâché de sang déroulé dans l'obscurité... 🧌");
console.log("----------------------------------------------------------------------------");

let chemin = +prompt("🧌 Quel chemin souhaites-tu emprunter ? 🧌");
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
            chemin = +prompt("🧌 Quel chemin souhaites-tu emprunter ? 🧌");
            break;
    }
}
