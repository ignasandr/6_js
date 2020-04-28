"use strict";

for(let i=0; i<5; i++) {
    console.log(i);
}

console.log('--------------')

// 0 - 0 Ats.: 0
// 0 - 4 Ats.: 10
// 0 - 100 Ats.: 5050
// 574 - 815 Ats.: 168069
// -50 - 50 Ats.: 0
// -70 - 30 Ats.: -2020

//let suma = 0;
//
//for (let i=-70; i < 31; i++) {
//    suma = suma + i;
//    console.log(i, suma)
//}

//console.log(suma)

console.log('--------------')

const tekstas = 'abcdef';
const tekstoIlgis = tekstas.length - 1;
let atbulas = '';

for (let i=tekstoIlgis; i>=0; i--) {
    atbulas = atbulas + tekstas[i];
}

console.log(`Tekstas "${tekstas}" atbulai yra "${atbulas}"`)
