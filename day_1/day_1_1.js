const fs = require("fs");

const lines = fs
  .readFileSync("tests1.txt", { encoding: "utf-8" })
  .trim()
  .split("\n")
  .map(Number);

function poprownajZTop3(wartosc) {
  if (wartosc > top1) {
    top3 = top2;
    top2 = top1;
    top1 = wartosc;
  } else if (wartosc > top2) {
    top3 = top2;
    top2 = wartosc;
  } else if (wartosc > top3) top3 = wartosc;
}

let top1 = (top2 = top3 = 0);

let suma = (max = obecny = 0);

for (let i = 0; i < lines.length; i++) {
  if (lines[i] === 0) {
    // 0 to \n
    poprownajZTop3(suma);
    if (suma > max) {
      max = suma;
    }
    suma = 0;
  } else suma += lines[i];
}

console.log(top1 + top2 + top3);
