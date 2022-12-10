const fs = require("fs");

const linijki = fs
  .readFileSync("tests9.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

const aktualizujOgon = () => {
  let roznicaX = glowa.x - ogon.x;
  let roznicaY = glowa.y - ogon.y;
  if (roznicaX > 1 || roznicaY > 1 || roznicaX < -1 || roznicaY < -1) {
    ogon.x = poprzedniaGlowa.x;
    ogon.y = poprzedniaGlowa.y;
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
    poprzedniaGlowa.x = glowa.x;
    poprzedniaGlowa.y = glowa.y;
    switch (kierunek) {
      case "U":
        glowa.y++;
        break;
      case "L":
        glowa.x--;
        break;
      case "R":
        glowa.x++;
        break;
      case "D":
        glowa.y--;
        break;
    }
    aktualizujOgon();
    aktualizujTabeleWartosci(ogon.x, ogon.y);
  }
};
let glowa = { x: 0, y: 0 };
let ogon = { x: 0, y: 0 };
let tabWartosci = [];
let poprzedniaGlowa = { x: 0, y: 0 };

for (let i = 0; i < linijki.length; i++) {
  let polecenie = linijki[i].split(" ");
  render(polecenie[0], polecenie[1]);
}

console.log(tabWartosci.length);
