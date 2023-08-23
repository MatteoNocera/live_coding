/* 👉 Chiediamo all'utente due parole in successione.
Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato. */

/* 
strumenti :
- prompt
- .length
- console log
- if/else
*/


// chiedi parola 1

// const parola_1 = prompt('inserisci parola 1');

// chiedi parola

// const parola_2 = prompt('inserisci parola 2');

// console log parole

// console.log(parola_1, parola_2, parola_1.length, parola_2.length);

// verifico se la prima è più lunga della seconda
// altrimenti verifico se la seconda è più lunga della prima
// verifico se le parole sono uguali
// stampo in console il messaggio

/* if (parola_1.length > parola_2.length) {
    console.log('la parola 1 è più lunga della parola 2');
} else if (parola_1.length < parola_2.length) {
    console.log('la parola 2 è più lunga della parola 1');
} else {
    console.log('le parole sono lunghe uguali');
}; */


/* 👉 età: chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande */

/* 
strumenti
- prompt
- condition
- number
- operatori di relazione
- console log
- getElementById
*/

// chiedi anni persona 1 e trasformo in numeri

// const etaPersona_1 = Number(prompt('Quanti anni hai persona 1'));

// chiedi anni persona 2 e trasformo in numeri

//const etaPersona_2 = Number(prompt('Quanti anni hai persona 2'));

// stampo in console le età

// console.log(etaPersona_1, etaPersona_2);

// verifico se persona 1 più grande persona 2 e stampo un messaggio
// verifico se persona 2 più grande persona 1 e stampo un messaggio
// verifico se persona 1 e persona 2 hanno la stessa età e stampo un messaggio

/* if (etaPersona_1 > etaPersona_2) {
    console.log('utente 1 è maggiore di utente 2');
} else if (etaPersona_1 < etaPersona_2) {
    console.log('utente 2 è maggiore di utente 1');
} else if (etaPersona_1 === etaPersona_2) {
    console.log('Stessa età');
} else {
    alert(error)
} */


/* 👉 pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.
 */

/* 
strumenti
- prompt
- Number()
- math.random
- if/else
- const
- math.flor
- console log
*/

// prompt per pari/dispari

const sceltaUtente = prompt(' pari o dispari');
// to do: Controlla se l'utente ha inserito i dati corretti

if (sceltaUtente != 'pari' && sceltaUtente != 'dispari') {
    alert('inserisci pari o dispari')
};

// prompt per numero da 1 a 9

const numeroUtente = Number(prompt('scegli un numero da 1 a 9'));
// to do: Controlla se l'utente ha inserito i dati corretti

if (numeroUtente < 1 || numeroUtente > 9) {
    alert('scegli un numero da 1 a 9')
};

console.log(sceltaUtente, numeroUtente);

// genero un numero random

const numeroComputer = Math.floor(Math.random() * 9) + 1;

console.log(numeroComputer);

// sommo il risultato dei due numeri

const sommaNumeri = numeroComputer + numeroUtente;

console.log(sommaNumeri);

// verifico se pari o dispari dividendo per 2

let result;

if (sommaNumeri % 2 == 0) {
    console.log('pari')
    result = 'pari'
} else {
    console.log('dispari')
    result = 'dispari'
};

console.log(result);
// stabilisco chi vince

if (result === sceltaUtente) {
    console.log('hai vinto');
} else {
    console.log('hai perso');
};