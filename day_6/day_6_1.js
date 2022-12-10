const fs = require("fs");

const linijki = fs 
.readFileSync("tests6.txt", {encoding: "utf-8"});

function czyUnikalne (czworka) {
    let tabUnikalne = []
    for (let i = 0; i < 4; i++) {
        if (tabUnikalne.includes(czworka[i])) {
            return false;
        }
        else tabUnikalne.push(czworka[i]);
    }
     return true;
    }


let suma = 0;
let i = 0;

for (i = 0; i < linijki.length; i++) {
    let czworka = [];
    for (let j = 0; j < 4; j++) {
        czworka.push(linijki[j+i]);
    }
        if (czyUnikalne(czworka)) {
            break;
        } 
    }
    
    console.log(i+4);
