// wip

const fs = require("fs");

const linijki = fs
  .readFileSync("tests9.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

const aktualizujWeza = (elementPrzed, element) => {
  let roznicaX = elementPrzed.x - element.x;
  let roznicaY = elementPrzed.y - element.y;
  if (roznicaX > 1 || roznicaY > 1 || roznicaX < -1 || roznicaY < -1) {
    element.x = elementPrzed.x;
    element.y = elementPrzed.y;
  }
};

const aktualizujTabeleWartosci = (a, b) => {
  let temp = { x: a, y: b };
  for (let i = 0; i < tabWartosci.length; i++) {
    if (JSON.stringify(tabWartosci[i]) === JSON.stringify(temp)) {
      return;
    }
  }
  tabWartosci.push(temp);
};

const render = (kierunek, ile) => {
  for (let i = 0; i < ile; i++) {
    wonsz.unshift({ x: wonsz[0].x, y: wonsz[0].y });
    console.log(wonsz[0]);
    switch (kierunek) {
      case "U":
        wonsz[0].y++;
        break;
      case "L":
        wonsz[0].x--;
        break;
      case "R":
        wonsz[0].x++;
        break;
      case "D":
        wonsz[0].y--;
        break;
    }
    for (let i = 1; i < wonsz.length; i++) {
      aktualizujWeza(wonsz[i], wonsz[i - 1]);
    }
    let tail = wonsz[0];
    console.log(tail);
    aktualizujTabeleWartosci(tail.x, tail.y);
  }
  if (wonsz.length == 11) {
    wonsz.pop();
  }
};
let wonsz = [];
wonsz[0] = { x: 0, y: 0 };
let tabWartosci = [];

for (let i = 0; i < linijki.length; i++) {
  let polecenie = linijki[i].split(" ");
  render(polecenie[0], polecenie[1]);
}

console.log(tabWartosci.length);
