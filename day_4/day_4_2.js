const fs = require("fs");

const linijki = fs
  .readFileSync("tests4.txt", { encoding: "utf-8" })
  .split(/[\n, -]+/);

function zawieranie(lewy1, prawy1, lewy2, prawy2) {
  lewy1 = parseInt(lewy1);
  lewy2 = parseInt(lewy2);
  prawy1 = parseInt(prawy1);
  prawy2 = parseInt(prawy2);
  if (lewy1 > prawy2 || lewy2 > prawy1) return false;
  else return true;
}

let suma = 0;

for (let i = 0; i < linijki.length - 1; i += 4) {
  if (zawieranie(linijki[i], linijki[i + 1], linijki[i + 2], linijki[i + 3]))
    suma++;
  console.log(suma);
}
console.log(suma);
