//let somma;
// let somma1;
// let somma2;
// let x = 10;
// let y = 5;
// let z = 3;


// somma1 = x + y;

// somma2 = somma1 + z;


// //somma = sum(sum(x, y), z)
// console.log(sum(sum(x, y), z));
// // somma3 = somma2 + x;
// // risultato = somma2 - x;
// // console.log(risultato);

// //Estrazione
// //Incapsulamento
// //Astrazione
// //Passaggio per valore o riferimento
// function sum(a, b) {//dichiarazione
//     if (a == 5 || b == 5) {
//         console.log('Bravo! Hai inserito 5!');
//     }
//     return a + b + 5;
// }

// function sub(a, b) {
//     return a - b;
// }

for (let i = 1; i <= 100; i++) {
    if (checkPari(i)) {
        console.log('Sono pari' + i);
    } else {
        console.log('Sono dispari' + i);
    }
}
// //Estrazione
// //Incapsulamento
// //Astrazione

function checkPari(numero) {
    if (numero % 2 === 0) {
        return true;//ritorno booleano
    }
    return false; //ritorno booleano
}



for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log('SOno pari:' + i);
    } else {
        console.log('SOno Dispari:' + i);
    }
}


