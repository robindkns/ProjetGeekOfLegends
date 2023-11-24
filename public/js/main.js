import {personnage,guerrier,archer,mage,bossFinal} from "./classes.js";

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
}

function enigme(nameBoss) {
    let rep ="";
    let essai = 3;
    let repFinale;
    let enigma = Math.floor(Math.random() * 3);
    console.log(`❓ ${nameBoss} : "Hmm hmm... Très bien... Je vais vous laisser une dernière chance" ❓`);
    console.log(`❓ ${nameBoss} : "Je vais vous poser une énigme, si vous y répondez correctement, je vous laisserai peut-être la vie sauve" ❓`);
    console.log(`❓ ${nameBoss} : "Si vous vous trompez, je me verrai obliger de mettre un terme à cette mascarade..." ❓`);
    if (nameBoss == "Sauron") {
        switch (enigma) {
            case 0:
                while (essai != 0) {
                    rep = prompt("❓ Je suis quelque chose qui t'appartient mais que les gens utilisent plus que toi, qui suis-je ? ❓\n🔄️ Nombre d'essai restants : " + essai);
                    rep = rep.toLowerCase();
                    if (rep == "prenom" || rep == "prénom" || rep == "le prenom" || rep == " le prénom" || rep == "mon prénom" || rep == "mon prenom") {
                        repFinale = true;
                        essai = 0;
                    }else {
                        repFinale = false;
                        essai--;
                    }
                }
                if (repFinale == true){
                    console.log(`👁️ ${nameBoss} : "... Comment est-ce possible ?!" 👁️`);
                    console.log(`👁️ ${nameBoss} : "JE NE VOUS LAISSERAI JAMAIS PASSER ! JE VOUS RÉDUIRAI TOUS EN CENDRES !!!" 👁️`);
                    console.log(`* Dans un élan de rage ${nameBoss} saute sur les 3 héros, mais se prend les pieds dans le tapis ensanglanté de son propre sang dû au combat *`);
                    console.log(`* Émèché de tous les côtés, ${nameBoss} n'arriva plus à se relever et finit par agoniser lentement se noyant dans son propre sang *`);
                    return true;
                } else if (repFinale == false){
                    console.log(`👁️ ${nameBoss} : "MOUAHAHAHAHAHAH... C'EST TOTALEMENT FAUX !" 👁️`);
                    console.log(`👁️ ${nameBoss} : "Vous vous êtes bien débrouillés jusque là... Mais maintenant je vais utiliser mon attaque ultime !" 👁️`);
                    console.log(`* ${nameBoss} commença à se charger de rage, et assèna violemment les héros de son attaque ultime *`);
                    return false;
                }
                
            case 1:
                while (essai != 0) {
                    rep = prompt("❓ En étant cassé je suis plus utile que quand je ne le suis pas, qui suis-je ? ❓\n🔄️ Nombre d'essai restants : " + essai);
                    rep = rep.toLowerCase();
                    if (rep == "oeuf" || rep == "un oeuf" || rep == "l'oeuf") {
                        repFinale = true;
                        essai = 0;
                    }else {
                        repFinale = false;
                        essai--;
                    }
                }
                if (repFinale == true){
                    console.log(`👁️ ${nameBoss} : "... Comment est-ce possible ?!" 👁️`);
                    console.log(`👁️ ${nameBoss} : "JE NE VOUS LAISSERAI JAMAIS PASSER ! JE VOUS RÉDUIRAI TOUS EN CENDRES !!!" 👁️`);
                    console.log(`* Dans un élan de rage ${nameBoss} saute sur les 3 héros, mais se prend les pieds dans le tapis ensanglanté de son propre sang dû au combat *`);
                    console.log(`* Émèché de tous les côtés, ${nameBoss} n'arriva plus à se relever et finit par agoniser lentement se noyant dans son propre sang *`);
                    return true;
                } else if (repFinale == false){
                    console.log(`👁️ ${nameBoss} : "MOUAHAHAHAHAHAH... C'EST TOTALEMENT FAUX !" 👁️`);
                    console.log(`👁️ ${nameBoss} : "Vous vous êtes bien débrouillés jusque là... Mais maintenant je vais utiliser mon attaque ultime !" 👁️`);
                    console.log(`* ${nameBoss} commença à se charger de rage, et assèna violemment les héros de son attaque ultime *`);
                    return false;
                }
                
            case 2:
                while (essai != 0) {
                    rep = prompt("❓ Je suis grand quand je suis jeune et petit quand je suis vieux. Je rayonne de vie et le vent est mon plus grand ennemi. Que suis-je ? ❓\n🔄️ Nombre d'essai restants : " + essai);
                    rep = rep.toLowerCase();
                    if (rep == "bougie" || rep == "cierge" || rep == "une bougie" || rep == "un cierge") {
                        repFinale = true;
                        essai = 0;
                    }else {
                        repFinale = false;
                        essai--;
                    }
                }
                if (repFinale == true) {
                    console.log(`👁️ ${nameBoss} : "... Comment est-ce possible ?!" 👁️`);
                    console.log(`👁️ ${nameBoss} : "JE NE VOUS LAISSERAI JAMAIS PASSER ! JE VOUS RÉDUIRAI TOUS EN CENDRES !!!" 👁️`);
                    console.log(`* Dans un élan de rage ${nameBoss} saute sur les 3 héros, mais se prend les pieds dans le tapis ensanglanté de son propre sang dû au combat *`);
                    console.log(`* Émèché de tous les côtés, ${nameBoss} n'arriva plus à se relever et finit par agoniser lentement se noyant dans son propre sang *`);
                    return true;
                } else if (repFinale == false) {
                    console.log(`👁️ ${nameBoss} : "MOUAHAHAHAHAHAH... C'EST TOTALEMENT FAUX !" 👁️`);
                    console.log(`👁️ ${nameBoss} : "Vous vous êtes bien débrouillés jusque là... Mais maintenant je vais utiliser mon attaque ultime !" 👁️`);
                    console.log(`* ${nameBoss} commença à se charger de rage, et assèna violemment les héros de son attaque ultime *`);
                    return false;
                }
            default:
                console.log("404 ERROR");
                break;
        }
        
    } else if (nameBoss == "Lilith"){
        switch (enigma) {
            case 0:
                while (essai != 0) {
                    rep = prompt("❓ Je suis entouré de poils et je suis au milieu. J'ai une ouverture que tu peux voir qui s'ouvre et se ferme, qui suis-je ? ❓\n🔄️ Nombre d'essai restants : " + essai);
                    rep = rep.toLowerCase();
                    if (rep == "oeil" || rep == "yeux" || rep == "un oeil" || rep == "les yeux") {
                        repFinale = true;
                        essai = 0;
                    }else {
                        repFinale = false;
                        essai--;
                    }
                }
                if (repFinale == true) {
                    console.log(`🥀 ${nameBoss} : "Encore et toujours... QUE DE LA CHANCE !" 🥀`);
                    console.log(`🥀 ${nameBoss} : "MAIS JE N'AI AUCUNE PAROLE, JE VOUS DÉVORERAI VOS ORGANES DE TOUTE MANIÈRE !" 🥀`);
                    console.log(`* Aveuglé par sa fierté, ${nameBoss} tenta d'infliger un coup fatal, mais tomba instantanément à genoux *`);
                    console.log(`* Épuisée du combat, ${nameBoss} lâcha son dernier souffle et finit par se vider de ses dernières gouttes de sang...  *`);
                    return true;
                } else if (repFinale == false) {
                    console.log(`🥀 ${nameBoss} : "Hmmmm... Hehehe, je le savais, JE LE SAVAIS QUE VOUS ÉTIEZ FAIBLES !" 🥀`);
                    console.log(`🥀 ${nameBoss} : "Il est temps de vous envoyer dans mon royaume !" 🥀`);
                    console.log(`* ${nameBoss} puisa dans ses dernières forces, et dévora ce qu'il restait des braves héros *`);
                    return false;
                }
            case 1:
                while (essai != 0) {
                    rep = prompt("❓ Je me lève quand je suis content, mais je suis plus petit que le reste, qui suis-je ? ❓\n🔄️ Nombre d'essai restants : " + essai);
                    rep = rep.toLowerCase();
                    if (rep == "pouce" || rep == "le pouce" || rep == "un pouce") {
                        repFinale = true;
                        essai = 0;
                    }else {
                        repFinale = false;
                        essai--;
                    }
                }
                if (repFinale == true) {
                    console.log(`🥀 ${nameBoss} : "Encore et toujours... QUE DE LA CHANCE !" 🥀`);
                    console.log(`🥀 ${nameBoss} : "MAIS JE N'AI AUCUNE PAROLE, JE VOUS DÉVORERAI VOS ORGANES DE TOUTE MANIÈRE !" 🥀`);
                    console.log(`* Aveuglé par sa fierté, ${nameBoss} tenta d'infliger un coup fatal, mais tomba instantanément à genoux *`);
                    console.log(`* Épuisée du combat, ${nameBoss} lâcha son dernier souffle et finit par se vider de ses dernières gouttes de sang...  *`);
                    return true;
                } else if(repFinale == false) {
                    console.log(`🥀 ${nameBoss} : "Hmmmm... Hehehe, je le savais, JE LE SAVAIS QUE VOUS ÉTIEZ FAIBLES !" 🥀`);
                    console.log(`🥀 ${nameBoss} : "Il est temps de vous envoyer dans mon royaume !" 🥀`);
                    console.log(`* ${nameBoss} puisa dans ses dernières forces, et dévora ce qu'il restait des braves héros *`);
                    return false;
                }
            case 2:
                while (essai != 0) {
                    rep = prompt("❓ Je suis une partie de l'être humain capable d'augmenter par 9 sa taille, qui suis-je ? ❓\n🔄️ Nombre d'essai restants : " + essai);
                    rep = rep.toLowerCase();
                    if (rep == "pupille" || rep == "une pupille" || rep == "la pupille" || rep == "les pupilles") {
                        repFinale = true;
                        essai = 0;
                    }else {
                        repFinale = false;
                        essai--;
                    }
                }
                if (repFinale == true) {
                    console.log(`🥀 ${nameBoss} : "Encore et toujours... QUE DE LA CHANCE !" 🥀`);
                    console.log(`🥀 ${nameBoss} : "MAIS JE N'AI AUCUNE PAROLE, JE VOUS DÉVORERAI VOS ORGANES DE TOUTE MANIÈRE !" 🥀`);
                    console.log(`* Aveuglé par sa fierté, ${nameBoss} tenta d'infliger un coup fatal, mais tomba instantanément à genoux *`);
                    console.log(`* Épuisée du combat, ${nameBoss} lâcha son dernier souffle et finit par se vider de ses dernières gouttes de sang...  *`);
                    return true;
                } else if (repFinale == false){
                    console.log(`🥀 ${nameBoss} : "Hmmmm... Hehehe, je le savais, JE LE SAVAIS QUE VOUS ÉTIEZ FAIBLES !" 🥀`);
                    console.log(`🥀 ${nameBoss} : "Il est temps de vous envoyer dans mon royaume !" 🥀`);
                    console.log(`* ${nameBoss} puisa dans ses dernières forces, et dévora ce qu'il restait des braves héros *`);
                    return false;
                }
            default:
                console.log("404 ERROR");
                break;
        }
    }
    else if (nameBoss == "Chronos"){
        switch (enigma) {
            case 0:
                while (essai != 0) {
                    rep = prompt("❓ Toute chose, il dévore. Il ronge le fer, fait disparaître l’acier et réduit les pierres en poussière. Qui est-ce ? ❓\n🔄️ Nombre d'essai restants : " + essai);
                    rep = rep.toLowerCase();
                    if (rep == "temps" || rep == "le temps") {
                        repFinale = true;
                        essai = 0;
                    }else {
                        repFinale = false;
                        essai--;
                    }
                }
                if (repFinale == true) {
                    console.log(`🪽 ${nameBoss} : "Hahaha, de toute façon, cette énigme n'avait aucune valeur !" 🪽`);
                    console.log(`🪽 ${nameBoss} : "QUE JE VOUS TERMINE, N'ÉTAIT QU'UNE QUESTION DE TEMPS !" 🪽`);
                    console.log(`* Étourdi par l'intelligence de la réponse, ${nameBoss} tenta de courir rapidement pour assener un dernier coup, mais finit par trébucher *`);
                    console.log(`* ${nameBoss} tomba, et n'arriva plus à se relever. Son corps fut pris de spasmes qui n'en finissent plus *`);
                    return true;
                } else if (repFinale == false){
                    console.log(`🪽 ${nameBoss} : "Je n'avais aucun doute de votre incompétence..." 🪽`);
                    console.log(`🪽 ${nameBoss} : "Je vais maintenant utiliser 100% de ma puissance !" 🪽`);
                    console.log(`* ${nameBoss} s'élança à la vitesse de la lumière afin de lancer le coup final *`);
                    return false;
                }
            case 1:
                while (essai != 0) {
                    rep = prompt("❓ Qui a deux aiguilles, mais ne pique pas ? ❓\n🔄️ Nombre d'essai restants : " + essai);
                    rep = rep.toLowerCase();
                    if (rep == "montre" || rep == "une montre" || rep == "la montre" || rep == "horloge" || rep == "une horloge" || rep == "l'horloge") {
                        repFinale = true;
                        essai = 0;
                    }else {
                        repFinale = false;
                        essai--;
                    }
                }
                if (repFinale == true) {
                    console.log(`🪽 ${nameBoss} : "Hahaha, de toute façon, cette énigme n'avait aucune valeur !" 🪽`);
                    console.log(`🪽 ${nameBoss} : "QUE JE VOUS TERMINE, N'ÉTAIT QU'UNE QUESTION DE TEMPS !" 🪽`);
                    console.log(`* Étourdi par l'intelligence de la réponse, ${nameBoss} tenta de courir rapidement pour assener un dernier coup, mais finit par trébucher *`);
                    console.log(`* ${nameBoss} tomba, et n'arriva plus à se relever. Son corps fut pris de spasmes qui n'en finissent plus *`);
                    return true;
                } else if(repFinale == false){
                    console.log(`🪽 ${nameBoss} : "Je n'avais aucun doute de votre incompétence..." 🪽`);
                    console.log(`🪽 ${nameBoss} : "Je vais maintenant utiliser 100% de ma puissance !" 🪽`);
                    console.log(`* ${nameBoss} s'élança à la vitesse de la lumière afin de lancer le coup final *`);
                    return false;
                }
            case 2:
                while (essai != 0) {
                    rep = prompt("❓ Qu'est-ce qui peut remplir une pièce entière sans prendre de place ? ❓\n🔄️ Nombre d'essai restants : " + essai);
                    rep = rep.toLowerCase();
                    if (rep == "lumière" || rep == "lumiere" || rep == "la lumière" || rep == "une lumière") {
                        repFinale = true;
                        essai = 0;
                    }else {
                        repFinale = false;
                        essai--;
                    }
                }
                if (repFinale == true) {
                    console.log(`🪽 ${nameBoss} : "Hahaha, de toute façon, cette énigme n'avait aucune valeur !" 🪽`);
                    console.log(`🪽 ${nameBoss} : "QUE JE VOUS TERMINE, N'ÉTAIT QU'UNE QUESTION DE TEMPS !" 🪽`);
                    console.log(`* Étourdi par l'intelligence de la réponse, ${nameBoss} tenta de courir rapidement pour assener un dernier coup, mais finit par trébucher *`);
                    console.log(`* ${nameBoss} tomba, et n'arriva plus à se relever. Son corps fut pris de spasmes qui n'en finissent plus *`);
                    return true;
                } else if (repFinale == false) {
                    console.log(`🪽 ${nameBoss} : "Je n'avais aucun doute de votre incompétence..." 🪽`);
                    console.log(`🪽 ${nameBoss} : "Je vais maintenant utiliser 100% de ma puissance !" 🪽`);
                    console.log(`* ${nameBoss} s'élança à la vitesse de la lumière afin de lancer le coup final *`);
                    return false;
                }
            default:
                console.log("404 ERROR");
                break;
        }
    }
}

function combat(boss,heroWar,heroMag,heroArc) {
    let randomAttacked = [heroWar,heroMag,heroArc];
    let cpt = 0;
    let cimetiere = [];
    let pvEnigme = boss.pdv/5;
    console.log("----------------------------------------------------------------------------");
    console.log("☠️ Le premier tour du combat commence ! ☠️");

    while (boss.pdv > 0 && cimetiere.length < 3) {

        for (let i = 0; i < 1; i++) {
            console.log("☠️ Vous avez le choix entre vous défendre, ou attaquer ! Que choisissez-vous ? ☠️");
            let turnChoice = +prompt("🗡️ 1. ATTAQUER 🗡️\n🛡️ 2. SE DÉFENDRE 🛡️");
            if (turnChoice == 1) {          //L'utilisateur décide d'attaquer
                if (heroWar.pdv > 0) {
                    heroWar.rageAttack(boss);
                }

                if (heroMag.pdv > 0){
                    heroMag.manaAttack(boss);
                }

                if (heroArc.pdv > 0){
                    heroArc.flecheAttack(boss);
                }               

                for (let i = 0; i < randomAttacked.length; i++) {               //Augmente aux héros en posture Défensive, une chance d'être attaqué
                    if (randomAttacked[i].classe[1] == "Défensif") {
                        let moreChance = randomAttacked[i];
                        randomAttacked.push(moreChance);
                        cpt++;
                        i++;
                    }
                }

                let randomChoice = Math.floor(Math.random() * randomAttacked.length);
                console.log(`☠️ ${boss.nom} se rue vers ${randomAttacked[randomChoice].nom} ! ☠️`);
                boss.attackBoss(randomAttacked[randomChoice]);

                if (cpt != 0) {
                    for (let i = 0; i < cpt; i++) {     //Retire les doublons du tableau duquel on envoie aléatoirement l'héros qui se fera attaquer     
                        randomAttacked.pop();
                    }
                }
                cpt=0;
            } else if (turnChoice == 2){                //L'utilisateur décide de se défendre
                let randomChoice = Math.floor(Math.random() * randomAttacked.length);
                console.log(`☠️ ${boss.nom} se rue vers ${randomAttacked[randomChoice].nom} ! ☠️`);
                boss.defenseBoss(randomAttacked[randomChoice]);
            } else {
                alert("❗ Erreur d'entrée, veuillez uniquement choisir 1 ou 2 ❗");
                i--;
            }

            heroWar.rage++;
            console.log(`☠️ FIN DU TOUR ! ☠️`);
            console.log(`☠️ ${boss.nom} a ${boss.pdv}PV ☠️`);

            for (let i = 0; i < randomAttacked.length; i++) {
                if (randomAttacked[i].pdv > 0) {
                    console.log(`☠️ ${randomAttacked[i].nom} a ${randomAttacked[i].pdv}PV ☠️`);
                } else {
                    console.log(`⚰️ ${randomAttacked[i].nom} est mort ⚰️`);
                    cimetiere.push(randomAttacked[i]);
                    randomAttacked.splice(randomAttacked.indexOf(randomAttacked[i]),1);
                }
            }
        }
        // console.log(`Cimetierre : ${cimetiere}`);
        // console.log(`En vie : ${randomAttacked}`);
        console.log("-------------------------------------------------");
        if (boss.pdv <= pvEnigme) {
            let outcomeEnigme = enigme(boss.nom);
            if (outcomeEnigme == true) {
                boss.pdv = 0;
            }else if (outcomeEnigme == false) {
                heroArc.pdv = 0;
                heroMag.pdv = 0;
                heroWar.pdv = 0;
                cimetiere.push(heroArc,heroMag,heroWar);
            }
        }
    }

    

    if (cimetiere.length >= 3){
        console.log(`☠️ ${boss.nom} : "Hahahaha... Ils pensaient vraiment pouvoir dompter ma puissance..." ☠️`);
        console.log(`⚰️ Vous avez lamentablement échoué... ⚰️`);
    } else {
        console.log(`☠️ ${boss.nom} a été vaincu ! ☠️`);
        console.log(`🏆 FÉLICITATIONS ! VOUS ÊTES VENU À BOUT DU BOSS ! 🏆`);
        console.log(`🏆 Vous avancez victorieusement vers la salle contenant le trésor, un lueur vive émane de cette salle 🏆`);
        console.log(`🏆 Oseriez vous retenter l'aventure et emprunter les autres chemins ? 🏆`);
    }
}

// Les 3 boss

let sauron = new bossFinal("Sauron",500,40);
let chronos = new bossFinal("Chronos",300,65);
let lilith = new bossFinal("Lilith",400,50);

// les 3 héros

let heroGuerrier = new guerrier("",0,0,["Guerrier"],0);
let heroMage = new mage("",0,0,["Mage"],0);
let heroArcher = new archer("",0,0,["Archer"],0);

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
console.log("🪓 le guerrier gagne 25% d'attaque supplémentaire durant 1 tour 🪓");
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
    heroGuerrier.ptsAtt = +prompt(`🪓 Combien de points d'attaque souhaitez vous attribuer à votre Guerrier ? (Points restants à distribuer : ${totalPA}) 🪓`);
    totalPA = totalPA - heroGuerrier.ptsAtt;
    heroMage.ptsAtt = +prompt(`🧙‍♂️ Combien de points d'attaque souhaitez vous attribuer à votre Mage ? (Points restants à distribuer : ${totalPA}) 🧙‍♂️`);
    totalPA = totalPA - heroMage.ptsAtt;
    heroArcher.ptsAtt = +prompt(`🏹 Combien de points d'attaque souhaitez vous attribuer à votre Archer ? (Points restants à distribuer : ${totalPA}) 🏹`);
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
    let postureChoice = +prompt(`🗡️ 1. La manière OFFENSIVE 🗡️\n🛡️ 2. La manière DÉFENSIVE 🛡️\n🟢 3. La manière NORMALE 🟢\nQuelle est la manière avec laquelle votre ${heros[i].classe} va aborder cette aventure ? (1,2,3)`)
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
console.log(`🪓 ${heroGuerrier.nom} 🪓\n🪓 Points de vie : ${heroGuerrier.pdv} 🪓\n🪓 Points d'attaque : ${heroGuerrier.ptsAtt} 🪓\n🪓 Points de rage : ${heroGuerrier.rage} 🪓`);
console.log(`🧙‍♂️ ${heroMage.nom} 🧙‍♂️\n🧙‍♂️ Points de vie : ${heroMage.pdv} 🧙‍♂️\n🧙‍♂️ Points d'attaque : ${heroMage.ptsAtt} 🧙‍♂️\n🧙‍♂️ Points de mana : ${heroMage.mana} 🧙‍♂️`);
console.log(`🏹 ${heroArcher.nom} 🏹\n🏹 Points de vie : ${heroArcher.pdv} 🏹\n🏹 Points d'attaque : ${heroArcher.ptsAtt} 🏹\n🏹 Nombre de flèches : ${heroArcher.fleche} 🏹`);

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