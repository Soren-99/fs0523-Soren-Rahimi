"use strict";
class LavoratoreAutonomo {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    getTasseInps() {
        return this.tasseinps;
    }
    getTasseIrpef() {
        return this.tasseirpef;
    }
    getRedditoAnnuoNetto() {
        const tasseTotali = this.getUtileTasse() + this.tasseinps + this.tasseirpef;
        return this.redditoannuolordo - tasseTotali;
    }
}
class calcoloTasseLavoratore extends LavoratoreAutonomo {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        super(codredd, redditoannuolordo, tasseinps, tasseirpef);
    }
    getUtileTasse() {
        return this.redditoannuolordo * 0.2;
    }
}
const lavoratore1 = new calcoloTasseLavoratore(1, 50000, 1000, 5000);
console.log("Reddito Annuo Netto del Lavoratore 1:", lavoratore1.getRedditoAnnuoNetto());
const lavoratore2 = new calcoloTasseLavoratore(2, 75000, 2000, 6000);
console.log("Reddito Annuo Netto del Lavoratore 2:", lavoratore2.getRedditoAnnuoNetto());
