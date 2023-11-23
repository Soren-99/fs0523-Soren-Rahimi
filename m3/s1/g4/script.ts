interface CapoAbbigliamento {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantità: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile:string;
    saldo: number;

    getsaldocapo(saldoDaSottrarre: number): void;
    getacquistocapo(): number;
}

class Capo implements CapoAbbigliamento {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantità: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;

    constructor(data: any) {
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

    getsaldocapo(saldoDaSottrarre: number): void {
        this.saldo -= saldoDaSottrarre;
    }

    getacquistocapo(): number {
        return this.prezzoivainclusa - this.saldo;
    }
}

async function fetchAbbigliamento(): Promise<CapoAbbigliamento[]> {
    try {
        const response = await fetch('abbigliamento.json');
        const data = await response.json();
        const capiAbbigliamento: CapoAbbigliamento[] = data.map((item: any) => new Capo (item));
        return capiAbbigliamento;
    } catch (error) {
        throw new Error('Errore nel recupero dei dati dell\'abbigliamento');
    }
}
    
fetchAbbigliamento()
.then((capi)=> {
    const primoCapo = capi[0];
    primoCapo.getsaldocapo(45);
    const costoTotale = primoCapo.getacquistocapo();
    console.log(`Il costo totale del capo ${primoCapo.capo} è ${costoTotale}`);
})
.catch((error) => {
    console.error(error.message);
});

