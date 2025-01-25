/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

const bike = [
    {
        nome: "Mountain Bike Classic",
        weight: 9
    },
    {
        nome: "Mountain Bike Energy",
        weight: 22
    },
    {
        nome: "Mountain Bike Blue",
        weight: 13
    }
]
function trovaMinore(arrayObj) {
    for (let i = 0; i < arrayObj.length; i++) {
        for (let x = i + 1; x < arrayObj.length; x++) {
            if (arrayObj[i].weight <= arrayObj[x].weight) {
                if (x == (arrayObj.length - 1)) {
                    index = i;
                    x = arrayObj.length + 1;
                    i = arrayObj.length + 1;
                } else {
                    index = i;
                }
            } else {
                if ((x == (arrayObj.length - 1) && (i == (arrayObj.length - 2)))) {
                    index = x;
                } else {
                    x = arrayObj.length + 1;
                }
            }
        }
    }

    return index;
};
let index;
index = trovaMinore(bike
);

console.log(`la bici meno pesante è la ${bike[index].nome} che pesa ${bike[index].weight} kg`)









/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/
let falli = []

const squadre = [
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 }
];


for (let i = 0; i < squadre.length; i++) {

    squadre[i].puntiFatti = Math.floor(Math.random() * 30) + 1;
    squadre[i].falliSubiti = Math.floor(Math.random() * 30) + 1;


    for (let x in squadre) {

        falli.push(squadre[x].squadre, squadre[x].falliSubiti)
    }

}

console.log(falli)







/*Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array ( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con li elementi estratti 
dall'array di partenza che hanno la posizione compresa tra i due numeri (a e b).*/






