export class bossFinal{
    constructor(nom,pdv,ptsAtt){
        this.nom = nom;
        this.pdv = pdv;
        this.ptsAtt = ptsAtt;
    }
    attackBoss(hero){
        hero.pdv = hero.pdv - this.ptsAtt;
        console.log(`☠️ ${this.nom} attaque ${hero.nom} ! ☠️`);
        console.log(`☠️ ${hero.nom} perd ${this.ptsAtt}PV ☠️`);
    }
    defenseBoss(hero){
        let damageAttack = this.ptsAtt/2
        hero.pdv = hero.pdv - damageAttack;
        console.log(`☠️ ${this.nom} attaque ${hero.nom} ! ☠️`);
        console.log(`☠️ ${hero.nom} perd ${damageAttack}PV ☠️`);
    }
}

export class personnage{
    constructor(nom,pdv,ptsAtt,classe){
        this.nom = nom;
        this.pdv = pdv;
        this.ptsAtt = ptsAtt;
        this.classe = classe;
    }
}

export class guerrier extends personnage{
    constructor(nom,pdv,ptsAtt,classe,rage){
        super(nom,pdv,ptsAtt,classe);
        this.rage = rage;
    }
    rageAttack(ennemi){
        if(this.rage == 4){
            this.ptsAtt = this.ptsAtt * 1.25;
            ennemi.pdv = ennemi.pdv - this.ptsAtt;
            console.log(`☠️ ${this.nom} A LA RAAAAAGE ! 🩸 ☠️`);
            console.log(`☠️ ${this.nom} attaque ${ennemi.nom} ! ☠️`);
            console.log(`☠️ ${ennemi.nom} perd ${this.ptsAtt}PV ☠️`);
            this.rage = 0
        }else{
            ennemi.pdv = ennemi.pdv - this.ptsAtt;
            console.log(`☠️ ${this.nom} a une rage de ${this.rage} 🩸 ☠️`);
            console.log(`☠️ ${this.nom} attaque ${ennemi.nom} ! ☠️`);
            console.log(`☠️ ${ennemi.nom} perd ${this.ptsAtt}PV ☠️`);
        }
    }
}

export class mage extends personnage{
    constructor(nom,pdv,ptsAtt,classe,mana){
        super(nom,pdv,ptsAtt,classe);
        this.mana = mana;
    }
    manaAttack(ennemi){
        if(this.mana >= 2){
            ennemi.pdv = ennemi.pdv - this.ptsAtt;
            console.log(`☠️ ${this.nom} attaque ${ennemi.nom} ! ☠️`);
            console.log(`☠️ ${ennemi.nom} perd ${this.ptsAtt}PV ☠️`);
            this.mana = this.mana - 2;
            console.log(`☠️ Il lui reste ${this.mana} points de mana 💧 ☠️`);
        } else {
            console.log(`☠️ ${this.nom} n'a plus assez de mana ! ${this.nom} passe son tour ☠️`);
            console.log(`☠️${this.nom} récupère 7 points de mana 💧 ☠️`);
            this.mana = this.mana + 7;
        }
    }
}

export class archer extends personnage{
    constructor(nom,pdv,ptsAtt,classe,fleche){
        super(nom,pdv,ptsAtt,classe);
        this.fleche = fleche;
    }
    flecheAttack(ennemi){
        if (this.fleche >= 2) {
            ennemi.pdv = ennemi.pdv - this.ptsAtt;
            this.fleche = this.fleche - 2;
            console.log(`☠️ ${this.nom} attaque ${ennemi.nom} à l'aide de deux de ses flèches ! ☠️`);
            console.log(`☠️ ${ennemi.nom} perd ${this.ptsAtt}PV ☠️`);
            this.fleche = this.fleche + 1;
            console.log(`☠️ ${this.nom} récupère une flèche in extremis ! ☠️`);
            console.log(`☠️ Il lui reste ${this.fleche} flèches 🏹 ☠️`);
        } else {
            console.log(`☠️ ${this.nom} n'a plus assez de flèche ! Il ne peut pas attaquer... ☠️`);
            console.log(`☠️ ${this.nom} passe son tour et récupère 6 flèches 🏹 ☠️`);
        }
    }
}