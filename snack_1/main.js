//!Creare un array di oggetti:
//!Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//!Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let bicicletteDaCorsa = 
[
    {
        'nome': 'Alan',
        'peso': 8,
    },
    {
        'nome': 'Battaglin',
        'peso': 6,
    },
    {
        'nome': 'Casati',
        'peso': 4,
    },
    {
        'nome': 'Bianchi',
        'peso': 5,
    },
];


const pesoBiciclette = bicicletteDaCorsa.peso;
console.log(pesoBiciclette);


for (let i = 0; i < pesoBiciclette.length; i++) {
    const pesi = pesoBiciclette[i];

    if ( pesi <= 5){
        alert('la tu a bici è leggera')
    }else {
        alert('la tua bici è pesante')
    }
};