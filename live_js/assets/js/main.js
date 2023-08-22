/* Anni: chiediamo all'utente la sua età e comunichiamo l'anno di nascita. */

/* 

-prompt
-let userAge
-consoleLog
-document.getElementById

*/

// Chiedere età all'utente

let userAge = prompt('type your age');

// Recupero l'anno corrente con una variabile

const currentYear = 2023;

// Sottraggo all'anno corrente gli anni dell'utente

const birthYear = currentYear - Number(userAge);

// Stampo in console il risultato

console.log('Ciao sei nato nel ' + birthYear);

// Stampare il risultato in pagina

const greetingsElement = document.getElementById('greetings')
document.getElementById('greetings').innerHTML = ('ciao sei nato nel ' + birthYear)
