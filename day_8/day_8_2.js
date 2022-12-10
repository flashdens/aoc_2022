// bardzo brzydki kod!!!!
// do naprawy!!!!
// jak będzie czas!!!!!

const fs = require("fs");
const { parse } = require("path");

const linijki = fs
  .readFileSync("tests8.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

const przejedz = (tab, pozycja) => {
  for (let i = 0; i < tab.length; i++) {
    tab[i] = parseInt(tab[i]);
  }
  let wysokoscDrzewa = tab[pozycja];
  let widok = 0;
  let foo = 0;
  for (let i = pozycja - 1; i > -1; i--) {
    if (tab[i] >= wysokoscDrzewa) break;
    else widok1++;
  }

  for (let i = pozycja + 1; i < tab.length; i++) {
    if (tab[i] >= wysokoscDrzewa) {
      return widok2 * widok1;
    } else widok2++;
  }
  return widok2 * widok1;
};

let max = 0;

for (let wiersz = 0; wiersz < linijki.length; wiersz++) {
  for (let kolumna = 0; kolumna < linijki.length; kolumna++) {
    let wynik = 1;
    let tab = [];

    for (let j = 0; j < linijki.length; j++) tab[j] = linijki[wiersz][j];

    wynik *= przejedz(tab, kolumna);

    for (let j = 0; j < linijki.length; j++) tab[j] = linijki[j][kolumna];

    wynik *= przejedz(tab, wiersz);
    if (wynik > max) max = wynik;
  }
}

console.log(max);
