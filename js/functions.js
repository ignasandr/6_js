"use strict";

function tusciaFuncija(){
    return false;
}

console.log(tusciaFuncija())

function daugyba(pirmas, antras){
    //validuojam duomenis
    if (typeof(pirmas) !== 'number'){
        console.log("Pirma reikšmė turi būti skaičius");
        return "Bandykite dar karta";
    }
    if (typeof(antras) !== 'number'){
        console.log("Pirma reikšmė turi būti skaičius");
        return "Bandykite dar karta"
    }
    else{
      return pirmas * antras;
    }
}

console.log(daugyba('ka', 5))

console.log("-----------------------")
console.log("Skaitmenu kiekis skaičiuje")
console.log("-----------------------")

function skaitKiek(num){
    //validavimas
    if(typeof(num) !== 'number' ||
        isNaN(num ===  true) ||
        isFinite(num) === false) {
        console.error("Būtina įvesti skaičių");
    }

    if(number % 1 !== 0) {
        count--;
    }

    //logika
    const skaiciusTekstu = ''+num;
    let count = skaiciusTekstu.length;
    console.log(skaiciusTekstu)
    //rezultato grazinimas
    return count;
}

console.log(skaitKiek(1655))


