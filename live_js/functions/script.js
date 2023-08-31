/* 

numeri random: 
generare 10 numeri random (con un for o con un while) attraverso una funzione (copiamola da w3schools) e stamparli a schermo

*/
/* 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

const randomNumber = getRndInteger(1, 10);

//console.log(getRndInteger(1, 10));

//console.log(randomNumber);

for (let i = 0; i < 10; i++) {
    const randomNumber = getRndInteger(1, 10);
    console.log(randomNumber);
} */

/* 

pari o dispari: 
scrivere una funzione per verificare se un numero è pari o dispari, quindi chiedere un numero all'utente e comunicargli se è pari o dispari

*/

//const userNumber = 8;

/* 
Prima penso alla condizionale e solo dopo creo la funzione

if (userNumber % 2 === 0) {
    console.log('Il numero è pari');
} else {
    console.log('il numero è dispari');
} */

/**
 * 
 * @param {number} user_number just a number
 * @returns just a number
 */
function isEven(user_number) {

    if (userNumber % 2 === 0) {
        //console.log('Il numero è pari');
        return true;
    } /* else {
        console.log('il numero è dispari');
    } */

    return false;
}

const userNumber = prompt('scegli un numero');

console.log(isEven(userNumber));

const result = isEven(userNumber);

console.log(result);

if (isEven(userNumber)) {
    console.log('il numero è pari');
} else {
    console.log('il numero è dispari');
}

const esegui = document.querySelector('button');

const inputNumber = document.getElementById('user_number')

esegui.addEventListener('click', function() {

    
    console.log('Ho cliccato su esegui');

    console.log('Il numero scelto è ' + inputNumber.value);

    if (inputNumber.value % 2 ===0) {
        console.log('il numero è pari');
    } else {
        console.log('il numero è dispari');
    }
})