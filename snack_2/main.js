//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//!Generare numeri random al posto degli 0 nelle proprietà:
//Punti fatti e falli subiti.
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console


let squadre = 
[
    {
        'nome': 'Milan',
        'punti_fatti': 0,
        'falli_subiti': 0,
    },
    {
        'nome': 'Inter',
        'punti_fatti': 0,
        'falli_subiti': 0,
    },
    {
        'nome': 'Juventus',
        'punti_fatti': 0,
        'falli_subiti': 0,
    },
    {
        'nome': 'Napoli',
        'punti_fatti': 0,
        'falli_subiti': 0,
    },
];

function getRandomNumber (min , max) {
    return Math.floor(Math.random()*(max - min +1) + min)
};


console.log(squadre);



for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti_fatti = getRandomNumber(0 , 10);
    squadre[i].falli_subiti = getRandomNumber(0 , 10);
    
}


const squadreFalli = [0];

for (let i = 0; i < squadre.length; i++) {

    let squadra = squadre[i];

    const {nome , falli_subiti} = squadra;

    squadreFalli.push({nome , falli_subiti});
    
    
}


