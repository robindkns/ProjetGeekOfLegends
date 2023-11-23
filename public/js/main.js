import {personnage,guerrier,archer,mage,boss} from "./classes.js";

// Les 3 boss

let sauron = new boss("Sauron",500,35);
let chronos = new boss("Chronos",300,65);
let lilith = new boss("Lilith",400,50);

// les 3 héros

let heroGuerrier = new guerrier("",0,0);
let heroMage = new mage("",0,0);
let heroArcher = new archer("",0,0);

//Début du jeu

console.log("⚔️ Bienvenue dans World of WarGeek ⚔️");
console.log("* Dans ce jeu, vous allez devoir allier toutes vos forces afin de venir à bout d'un des trois boss défendant le donjon de Molenkmar ! *");
console.log("* Un précieux trésor y est caché, richesses et fortune pour le restant de votre vie vous est promis si vous y parvenez... *");
console.log("* Dans cette quête, vous controlerez trois héros. *");
console.log("* Tous possèdent des points de vie (PV) et des points d'attaque (PA) *");
console.log("🪓 LE GUERRIER 🪓");
console.log("🪓  🪓");
