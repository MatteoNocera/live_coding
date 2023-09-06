// Live 1

/*
Crea un oggetto per rappresentare una palla con le seguenti proprietà : colore, diametro e tipo
stampo in console il valore dell'oggetto
usiamo il ciclo
*/

/* const palla = {
    colore : 'rosso',
    diametro : 15,
    tipo : 'calcio',
    tonda : true
}

console.log(palla.diametro);

console.log(palla['colore']);

for (const key in palla) {
    console.log(key);
    console.log(palla[key]);
} */



// Live 2

// definiamo un array di oggetti:
// - ogni elemento dell'array è un oggetto che rappresenta una classe
// - ogni classe ha le proprietà nome e numeroStudenti

/* const school = [
    {
        nome : '1A',
        numeroStudenti : '25',

    },
    {
        nome : '1B',
        numeroStudenti : '30',

    },
    {
        nome : '1C',
        numeroStudenti : '35',

    },
]

const nuovaClasse = {
    nome : '2A',
    numeroStudenti : '15'
}

school.push(nuovaClasse);

console.log(school);

for (let i = 0; i < school.length; i++) {
    const classe = school[i];
    
    // console.log(classe.nome);

    //console.log(classe.numeroStudenti);

    for (const key in classe){
        console.log(key);
        console.log(classe[key]);
    }
} */

// Live 3

/* const student = {
    name: 'Fabio',
    lastname: 'Vasi',
    age: 27
}

student['name'] // fabio
student.name // fabio

for (const key in student) {
    
    const value = student[key] //uso le quadre mai il punto
    console.log(value);
} */

// Live 4

const students = [
    {
        name: 'Fabio',
        lastname: 'Vasi',
        age: 27
    },
    {
        name: 'antonio',
        lastname: 'cucuzza',
        age: 21
    },
    {
        name: 'marco',
        lastname: 'zellini',
        age: 22
    },
    {
        name: 'elisa',
        lastname: 'boscani',
        age: 27
    },
    {
        name: 'federica',
        lastname: 'campo',
        age: 26
    },
    {
        name: 'licia',
        lastname: 'licari',
        age: 37
    },
    {
        name: 'ester',
        lastname: 'dahri',
        age: 21
    },
    {
        name: 'valentina',
        lastname: 'de mite',
        age: 30
    }
]

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(student.name);
    console.log(student.lastname);
    console.log(student.age);




}