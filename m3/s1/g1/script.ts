function generaNumeroCasuale(min: number, max: number): number {
    return Math.floor(Math.random() * (max-min +1)) + min;
}

function confrontaNumeri(giocatore1: number, giocatore2: number): string {
    const numeroCasuale = generaNumeroCasuale(1, 100);
    console.log(`Numero causale generato = ${numeroCasuale}`);

    const distanzaGiocatore1= Math.abs(giocatore1 - numeroCasuale);
    const distanzaGiocatore2= Math.abs(giocatore2 - numeroCasuale);

    if (giocatore1 === numeroCasuale || giocatore2 === numeroCasuale) {
        if (giocatore1 === numeroCasuale && giocatore2 === numeroCasuale) {
            return "Entrambi i giocatori hanno azzeccato il numero casuale!";
        } else if (giocatore1 === numeroCasuale) {
            return "Il giocatore 1 ha azzeccato il numero casuale!"
        } else {
            return "Il giocatore 2 ha azzeccato il numero casuale!"
        }
    } else {
        if (distanzaGiocatore1 < distanzaGiocatore2) {
            return "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"
        } else if (distanzaGiocatore2 < distanzaGiocatore1) {
            return "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!"
        } else {
            return "Nessuno dei due ha azzeccato il numero casuale, entrambi sono alla stessa distanza"
        }
    }
}

const giocatore1 = 10;
const giocatore2 = 56;
const risultato = confrontaNumeri(giocatore1, giocatore2);
console.log(risultato);