abstract class LavoratoreAutonomo {
    codredd: number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;

    constructor(codredd: number, redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }



    abstract getUtileTasse(): number;

    getTasseInps(): number {
        return this.tasseinps;
    }

    getTasseIrpef(): number {
        return this.tasseirpef;
    }

    getRedditoAnnuoNetto(): number {
        const tasseTotali = this.getUtileTasse() + this.tasseinps + this.tasseirpef;
        return this.redditoannuolordo - tasseTotali; 
    }
}

class calcoloTasseLavoratore extends LavoratoreAutonomo {
    constructor(codredd: number, redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        super(codredd, redditoannuolordo, tasseinps, tasseirpef);
    }

    getUtileTasse(): number {
        return this.redditoannuolordo * 0.2;
    }
}

const lavoratore1 = new calcoloTasseLavoratore(1, 50000, 1000, 5000);
console.log("Reddito Annuo Netto del Lavoratore 1:", lavoratore1.getRedditoAnnuoNetto());

const lavoratore2 = new calcoloTasseLavoratore(2, 75000, 2000, 6000);
console.log("Reddito Annuo Netto del Lavoratore 2:", lavoratore2.getRedditoAnnuoNetto());