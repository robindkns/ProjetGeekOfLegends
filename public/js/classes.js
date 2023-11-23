export class bossFinal{
    constructor(nom,pdv,ptsAtt){
        this.nom = nom;
        this.pdv = pdv;
        this.ptsAtt = ptsAtt;
    }
    attackHero(hero){
        hero.pdv = hero.pdv - this.ptsAtt;
        console.log(`${hero.nom} a perdu ${this.ptsAtt} PV !`);
        console.log(`Il lui reste ${hero.pdv} PV.`);
    }
}

export class personnage{
    constructor(nom,pdv,ptsAtt,classe){
        this.nom = nom;
        this.pdv = pdv;
        this.ptsAtt = ptsAtt;
        this.classe = classe;
    }
    attack(ennemi){
        this.ptsAtt = this.ptsAtt * 1.4;
        this.pdv = this.pdv * 0.75;
    }
    defense(ennemi){
        this.ptsAtt = this.ptsAtt * 0.5;
        this.pdv = this.pdv * 2.5
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
            this.rage = 0
        }else{
            ennemi.pdv = ennemi.pdv - this.ptsAtt;
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
        } else {
            console.log(`☠️ ${this.nom} n'a plus assez de mana ! ${this.nom} passe son tour ☠️`);
            console.log(`☠️${this.nom} récupèrera 7 points de mana au prochain tour ☠️`);
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

    }
}