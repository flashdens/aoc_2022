const fs = require("fs");

const linijki = fs
  .readFileSync("tests4.txt", { encoding: "utf-8" })
  .split(/[\n, -]+/)
  .map(Number);

function zawieranie(lewy1, prawy1, lewy2, prawy2) {
  return (lewy1 >= lewy2 && prawy1 <= prawy2) ||
    (lewy2 >= lewy1 && prawy2 <= prawy1)
    ? true
    : false;
}

let suma = 0;

for (let i = 0; i < linijki.length; i += 4) {
  if (zawieranie(linijki[i], linijki[i + 1], linijki[i + 2], linijki[i + 3]))
    suma++;
}
console.log(suma);
