//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

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

//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let biciLeggera = bicicletteDaCorsa[0];

for (let i = 0; i < bicicletteDaCorsa.length; i++) {
    let peso = bicicletteDaCorsa[i];



    if ( biciLeggera.peso > peso.peso){
        biciLeggera = peso;
    
    }
};

const {nome , peso} = biciLeggera;

console.log(`la bici che pesa di meno è la : ${nome} e pesa: ${peso} kg`);


