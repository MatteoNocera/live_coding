/* 

Ciao Visitatore!
Imposta il nome di colore rosso in vari modi:
Solo con HTML+CSS
Scrivendo su element.style
Aggiungendo la classe con JS

*/

/* const domTitle = document.querySelector('h1');

console.log(domTitle);

domTitle.style.color = 'blue';

domTitle.classList.add('violet'); */

/* 
Al click di un pulsante, deve apparire un alert con un numero random
*/

/* const domButton = document.querySelector('button');

console.log(domButton);

domButton.addEventListener('click', function(){
    alert(Math.random())
} ) */

/* 
Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito
*/

/* 
tools
- prompt
- console.log
- getElementById/ querySelector
- const/let
- if/else
- .classList/.className
*/

// chiedo nome utente

const userName = prompt('type your name')

// chiedo il sesso all'utente

const userGender = prompt('type your Gender. ie: m/f/x').toLowerCase()

console.log(userName, userGender);

// stampo in pagina ciao (nome)

document.querySelector('h1').innerHTML = 'Ciao ' + `<span>${userName}</span>`

const nameElementDom = document.querySelector('h1 > span')

if (userGender === 'm') {
    nameElementDom.style.color = 'blue';
} else if (userGender === 'f') {
    nameElementDom.style.color = 'pink';
} else if (userGender === 'x') {
    nameElementDom.style.color = 'black';
} else {
    alert('le opzioni sono m/f/x riprova')
}