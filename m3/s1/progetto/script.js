"use strict";
class Smartphone {
    constructor(costoMinuto) {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = costoMinuto;
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return `Credito residuo: €${this.carica.toFixed(2)}`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        const costoChiamata = this.costoMinuto * min;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            console.log(`Chiamata di ${min} minuti effettuata.`);
        }
        else {
            console.log(`Credito insufficiente per effettuare la chiamata.`);
        }
    }
    azzerraChiamate() {
        this.numeroChiamate = 0;
        console.log(`Contatore delle chiamate azzerato.`);
    }
}
const sim1 = new Smartphone(0.02);
const sim2 = new Smartphone(0.05);
const sim3 = new Smartphone(0.09);
//Verifichiamo se funziona//
sim2.ricarica(15);
sim2.chiamata(5);
console.log(sim2.numero404());
console.log(`Numero di chiamate effettuate: ${sim2.getNumeroChiamate()}`);
sim2.azzerraChiamate();
console.log(`Numero di chiamate azzerrato: ${sim2.getNumeroChiamate()}`);
