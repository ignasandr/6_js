"use strict";

//MATEMATINĖS OPERACIJOS

const sk1 = 27;
const sk2 = 3;

const suma = sk1 + sk2;

console.log(suma)

const skirtumas = sk1 - sk2;
console.log(skirtumas);

const sandauga = sk1 * sk2;
console.log(sandauga);

const dalmuo = sk1 / sk2;
console.log(dalmuo);

console.log('---------------')

const vardas = 'Ignelis';
const pavarde = 'Pavardenis';
const pilnasVardas = vardas + ' ' + pavarde;

console.log(vardas);
console.log(pavarde);
console.log(pilnasVardas);

// Mano megiama spalva yra "juoda".

const spalva = 'juoda';
const spalvosSakinys = 'Mano megstama spalva yra "' + spalva + '".';
console.log(spalvosSakinys);


const sakinys = `spalva ${spalva}`;
console.log(sakinys);

// SARASU OPERACIJOS (array)

const pazymiai2 = [10, 8, 7, 6, 4, 8];
const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(pazymiai2);

console.log('Trecia raide:', abc[2]);

const pazymiuSuma = pazymiai2[0] + pazymiai2[1] + pazymiai2[2];
console.log(pazymiuSuma);

