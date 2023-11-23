export class boss{
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
    constructor(nom,pdv,ptsAtt){
        this.nom = nom;
        this.pdv = pdv;
        this.ptsAtt = ptsAtt;
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
    constructor(nom,pdv,ptsAtt,rage){
        super(nom,pdv,ptsAtt);
        this.rage = rage;
    }
}

export class mage extends personnage{
    constructor(nom,pdv,ptsAtt,mana){
        super(nom,pdv,ptsAtt);
        this.mana = mana;
    }
}

export class archer extends personnage{
    constructor(nom,pdv,ptsAtt,fleche){
        super(nom,pdv,ptsAtt);
        this.fleche = fleche;
    }
}