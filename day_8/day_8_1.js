// bardzo brzydki kod!!!!
// do naprawy!!!!
// jak będzie czas!!!!!

const fs = require("fs");
const { parse } = require("path");

const linijki = fs
  .readFileSync("tests8.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

const przejedz = (tab, widacJuz, current, tryb) => {
  for (let i = 0; i < tab.length; i++) {
    tab[i] = parseInt(tab[i]);
  }

  let costam = 0;
  let max = tab[0];

  for (let i = 0; i < tab.length; i++) {
    if (tab[i] > max) {
      max = tab[i];
      if (!jestJuz(widacJuz, i, current)) {
        max = tab[i];
        costam++;
        if (max === 9) break;
      }
    }
  }

  max = tab[tab.length - 1];
  for (let i = tab.length - 1; i > 0; i--) {
    if (tab[i] > max) {
      max = tab[i];
      if (!jestJuz(widacJuz, i, current)) {
        max = tab[i];
        costam++;
        if (max === 9) break;
      }
    }
  }
  return costam;
};

const przejedzKolumne = (tab, widacJuz, current) => {
  for (let i = 0; i < tab.length; i++) {
    tab[i] = parseInt(tab[i]);
  }

  let costam = 0;
  let max = tab[0];

  for (let i = 0; i < tab.length; i++) {
    if (tab[i] > max) {
      max = tab[i];
      if (!jestJuz(widacJuz, current, i)) {
        max = tab[i];
        costam++;
        if (max === 9) break;
      }
    }
  }

  max = tab[tab.length - 1];
  for (let i = tab.length - 1; i > 0; i--) {
    if (tab[i] > max) {
      max = tab[i];
      if (!jestJuz(widacJuz, current, i)) {
        max = tab[i];
        costam++;
        if (max === 9) break;
      }
    }
  }
  return costam;
};

const jestJuz = (widacJuz, x, y) => {
  let doSprawdzenia = JSON.stringify({ i: x, j: y });
  for (let i = 0; i < widacJuz.length; i++) {
    if (doSprawdzenia === JSON.stringify(widacJuz[i])) {
      return true;
    }
  }
  widacJuz.push(JSON.parse(doSprawdzenia));
  return false;
};

const zapelnijBrzegi = (widacJuz) => {
  for (let x = 0; x < linijki.length; x++) {
    widacJuz.push({ i: x, j: 0 });
    widacJuz.push({ i: x, j: linijki.length - 1 });
  }
  for (let y = 0; y < linijki.length; y++) {
    widacJuz.push({ i: 0, j: y });
    widacJuz.push({ i: linijki.length - 1, j: y });
  }
  return widacJuz;
};

let wynik = 0,
  j = 0;

widacJuz = [];
widacJuz = zapelnijBrzegi(widacJuz); // obwód i tak widać

for (let k = 0; k < linijki.length; k++) {
  let arr = [];

  if (k === 0 && k != linijki.length - 1) continue;

  for (j = 0; j < linijki[k].length; j++) arr[j] = linijki[k][j]; // k-ty wiersz
  wynik += przejedz(arr, widacJuz, k);

  for (j = 0; j < linijki[k].length; j++) arr[j] = linijki[j][k]; // k-ta kolumna
  wynik += przejedzKolumne(arr, widacJuz, k);
}
let rozmiar = linijki.length;
rozmiar *= 4; // obwód
console.log(wynik + rozmiar - 4); // bo 4 krawędzie są wspólne dla 2 boków
