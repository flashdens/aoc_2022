// wip

const fs = require("fs");

const linijki = fs
  .readFileSync("tests9.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

const aktualizujWeza = (element, elementPrzed) => {
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
    switch (kierunek) {
      case "U":
        wonsz.unshift({ x: wonsz[0].x, y: wonsz[0].y + 1 });
        break;
      case "L":
        wonsz.unshift({ x: wonsz[0].x - 1, y: wonsz[0].y });
        break;
      case "R":
        wonsz.unshift({ x: wonsz[0].x + 1, y: wonsz[0].y });
        break;
      case "D":
        wonsz.unshift({ x: wonsz[0].x, y: wonsz[0].y - 1 });
        break;
    }
    for (let i = 0; i < wonsz.length - 1; i++) {
      if (wonsz.length === 11) {
        wonsz.pop();
        aktualizujWeza(wonsz[i], wonsz[i + 1]);
        aktualizujTabeleWartosci(
          wonsz[wonsz.length - 1].x,
          wonsz[wonsz.length - 1].y
        );
      }
    }
  }
};
let wonsz = new Array();
wonsz[0] = { x: 0, y: 0 };
let tabWartosci = [];

for (let i = 0; i < linijki.length; i++) {
  let polecenie = linijki[i].split(" ");
  render(polecenie[0], polecenie[1]);
  console.log(wonsz);
}

console.log(tabWartosci.length);
