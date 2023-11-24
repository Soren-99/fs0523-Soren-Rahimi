interface Sim {
    ricarica(euro: number): void;
    numero404(): string;
    getNumeroChiamate(): number;
    chiamata(min:number): void;
    azzerraChiamate():void;
}

class Smartphone implements Sim {
    private carica: number;
    protected numeroChiamate: number;
    private costoMinuto: number;

    constructor (costoMinuto: number) {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = costoMinuto
    }

    public ricarica(euro:number): void {
        this.carica += euro;
    }

    public numero404(): string {
        return `Credito residuo: €${this.carica.toFixed(2)}`;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public chiamata(min: number): void {
         const costoChiamata = this.costoMinuto * min;
         if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            console.log(`Chiamata di ${min} minuti effettuata.`)
         } else {
            console.log(`Credito insufficiente per effettuare la chiamata.`);
         }
    }

    public azzerraChiamate(): void {
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