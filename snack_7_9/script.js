/* 10 auto marca modello alimentazione
3 array con il primo benzina, il secondo diesel il terzo gpl,elettrico e metano
*/

/* const cars =  [
    {
        marca : 'audi',
        modello : 'rs6',
        alimentazione : 'diesel',
    },
    {
        marca : 'bmw',
        modello : 'iq3',
        alimentazione : 'elettrica',
    },
    {
        marca : 'porsche',
        modello : 'macan',
        alimentazione : 'benzina',
    },
    {
        marca : 'skoda',
        modello : 'octavia',
        alimentazione : 'metano',
    },
    {
        marca : 'mercedes',
        modello : 'vito',
        alimentazione : 'diesel',
    },
    {
        marca : 'fiat',
        modello : 'punto',
        alimentazione : 'benzina',
    },
    {
        marca : 'fiat',
        modello : 'doblo',
        alimentazione : 'gpl',
    },
    {
        marca : 'seat',
        modello : 'ibiza',
        alimentazione : 'metano',
    },
    {
        marca : 'peugeot',
        modello : '508',
        alimentazione : 'diesel',
    },
    {
        marca : 'alfa romeo',
        modello : 'giulietta',
        alimentazione : 'benzina',
    }
]

//console.log(cars);
const benzina = cars.filter(cars => cars.alimentazione === 'benzina');

const diesel = cars.filter(cars => cars.alimentazione === 'diesel');

const others = cars.filter(cars => cars.alimentazione == 'gpl' || cars.alimentazione == 'metano' || cars.alimentazione == 'elettrica');

console.log(others); */

/* formatta un array di 3 elementi che tutti con maiuscola prima e minuscole dopo */

/* const characters = ['pippo', 'PLUTO', 'PaPeRiNo']

let newCharacters = characters.map(
    
) */

const animals = [
    {
        name: 'leone',
        family: 'felidi',
        class: 'mammiferi'
    },
    {
        name: 'cane',
        family: 'canidi',
        class: 'mammiferi'
    },
    {
        name: 'gallina',
        family: 'fasianidi',
        class: 'uccelli'
    }
];


const mammiferi = [animals.filter(animal => animal.class == 'mammiferi')];

console.log(mammiferi);

const persone = [
    {
        nome:'Mario',
        cognome: 'Rossi',
        eta: 25
    },
    {
        nome:'Laura',
        cognome: 'Verdi',
        eta: 17
    },
    {
        nome:'Luigi',
        cognome: 'Bianchi',
        eta: 35
    }
];

const frasi = persone.map(persona => {
    const puoGuidare = persona.eta >= 18 ? 'può guidare' : 'non può guidare';
    //persona.can_drive = `${persona.nome}` `${persona.cognome}` `${puoGuidare}`;

    return `${persona.nome} ${persona.cognome} ${puoGuidare}`;
});

console.log(frasi);
