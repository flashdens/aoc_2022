const fs = require("fs");

const linijki = fs
  .readFileSync("tests3.txt", { encoding: "utf-8" })
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

let prioryety = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

function czyJestWTablicy(tablica, element) {
  for (let i = 0; i < tablica.length; i++) {
    if (tablica[i] === element) return true;
  }
  return false;
}

function przetnijStringaNaPol(string) {
  let srodek = Math.floor(string.length / 2);
  let polowa1 = string.slice(0, srodek);
  let polowa2 = string.slice(srodek, string.length);
  return [polowa1, polowa2];
}

function znajdzWspolneWartosci(polowy) {
  let wspolneWartosci = [];
  let polowa1 = polowy[0];
  let polowa2 = polowy[1];
  for (let i = 0; i < polowa1.length; i++) {
    for (let j = 0; j < polowa2.length; j++) {
      if (
        polowa1[i] === polowa2[j] &&
        !czyJestWTablicy(wspolneWartosci, polowa1[i])
      )
        wspolneWartosci.push(polowa1[i]);
    }
  }
  return wspolneWartosci;
}

let polowy;
let suma = 0;
let wspolneWartosci = [];

for (let i = 0; i < linijki.length; i++) {
  polowy = przetnijStringaNaPol(JSON.stringify(linijki[i]));
  wspolneWartosci = znajdzWspolneWartosci(polowy);
  console.log(wspolneWartosci);
  for (let j = 1; j < wspolneWartosci.length; j++) {
    // pomijam pierwszy element, ktory, nie wiedziec czemu, jest cudzyslowem. musze nauczyc sie korzystac z debuggera
    suma += prioryety[wspolneWartosci[1]];
  }
}
console.log(suma);
