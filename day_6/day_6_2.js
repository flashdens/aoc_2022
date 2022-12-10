const fs = require("fs");

const linijki = fs 
.readFileSync("tests6.txt", {encoding: "utf-8"});

function czyUnikalne (trzynastka) {
    let tabUnikalne = []
    for (let i = 0; i < 13; i++) {
        if (tabUnikalne.includes(trzynastka[i])) {
            return false;
        }
        else tabUnikalne.push(trzynastka[i]);
    }
     return true;
    }


let suma = 0;
let i = 0;

for (i = 0; i < linijki.length; i++) {
    let trzynastka = [];
    for (let j = 0; j < 13; j++) {
        trzynastka.push(linijki[j+i]);
    }
        if (czyUnikalne(trzynastka)) {
            break;
        } 
    }
    
    console.log(i+13);
