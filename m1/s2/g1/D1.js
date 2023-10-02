/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non Ã¨ stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui Ã¨ collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Javascript è un linguaggio di programmazione, ossia serve per definire la logica di un documento. 
   Immagina JavaScript come una box con all'interno diversi oggetti magici:
   
   - Strings: Le stringhe sono un insieme di lettere o parole.
   - Numbers: I numeri sono come i numeri con cui giochi.
   - Booleans: I Booleans definiscono una condizione. Come se dovessi rispondere sì oppure no ad una domanda
   - Array: Un Array è come una scatola dove puoi mettere all'interno tanti giochi.
   - Objects: Gli Objects sono oggetti come dei pacchi regalo ciascuno con una etichetta.
   - Undefined: Undefined vuol dire che all'interno della tua box magica non c'è nulla.
   - Null: Null è molto simile all'Undefined ma è come se mettessimo una scritta che dice 'vuoto' nella box magica.
   */


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let nome = 'Soren'

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1 = 12
let number2 = 20
let risultato = number1 + number2

console.log(risultato)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" giÃ  esistente: il tuo cognome.
  Dimostra l'impossibilitÃ  di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

let nome = 'Soren'
nome = 'Rahimi'
console.log(nome)

//Ora vogliamo dimostrare l'impossibilità di riassegnare un valore ad una variabile dichiarata con const.

const nome = 'Soren'
nome = 'Rahimi'
console.log(nome)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let x = 12
let risultatoSottrazione = 4 - x
console.log(risultatoSottrazione)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: Ã¨ la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john'
let name2 = 'John'

let sonoDiverse = name1 !== name2
console.log(sonoDiverse)

/* EXTRA */

let dopoTrasformazione = name1.toLowerCase() === name2.toLowerCase()
console.log(dopoTrasformazione)