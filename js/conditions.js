"use strict";

const a = 7;
const b = 9;

// palyginimo operatoriai
// >, <, <=, >=, ==, ===, !==

if (a > b) {
    console.log('taip, a yra daugiau uz b')
    }
else {
    console.log('ne, a yra daugiau uz b')
}

const vardas = 'Vardenis';

if (vardas === 'Vardenis') {
    console.log('All good!');
}
else {
    console.log('Not fun...');
}

console.log('---------------')

const akys = 'ruda2';

switch (akys) {
    case 'raudona':
        console.log('1');
        break;
    case 'ruda':
        console.log('2');
        break;
    case 'melyna':
        console.log('3');
        break;
    case 'zalia':
        console.log('4');
        break;

    default:
        console.log('default');
}

