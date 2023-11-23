"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Capo {
    constructor(data) {
        this.id = data.id;
        this.codprod = data.codprod;
        this.collezione = data.collezione;
        this.capo = data.capo;
        this.modello = data.modello;
        this.quantità = data.quantità;
        this.colore = data.colore;
        this.prezzoivaesclusa = data.prezzoivaesclusa;
        this.prezzoivainclusa = data.prezzoivainclusa;
        this.disponibile = data.disponibile;
        this.saldo = data.saldo;
    }
    getsaldocapo(saldoDaSottrarre) {
        this.saldo -= saldoDaSottrarre;
    }
    getacquistocapo() {
        return this.prezzoivainclusa - this.saldo;
    }
}
function fetchAbbigliamento() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('abbigliamento.json');
            const data = yield response.json();
            const capiAbbigliamento = data.map((item) => new Capo(item));
            return capiAbbigliamento;
        }
        catch (error) {
            throw new Error('Errore nel recupero dei dati dell\'abbigliamento');
        }
    });
}
fetchAbbigliamento()
    .then((capi) => {
    const primoCapo = capi[0];
    primoCapo.getsaldocapo(45);
    const costoTotale = primoCapo.getacquistocapo();
    console.log(`Il costo totale del capo ${primoCapo.capo} è ${costoTotale}`);
})
    .catch((error) => {
    console.error(error.message);
});
