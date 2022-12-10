const fs = require("fs");

const linijki = fs
  .readFileSync("tests10.txt", { encoding: "utf-8" })
  .split("\n");

const wartosci = {
  20: true,
  60: true,
  100: true,
  140: true,
  180: true,
  220: true,
  default: false,
};

const zapisanieWyniku = () => {
  if (wartosci[tiki]) {
    wynik += rejestr * tiki;
  }
};

const analizaPolecenia = (polecenie) => {
  polecenie = polecenie.split(" ");
  tiki++;
  zapisanieWyniku();
  if (polecenie[0] == "addx") {
    tiki++;
    zapisanieWyniku();
    rejestr += JSON.parse(polecenie[1]);
  }
};

let tiki = 0;
let rejestr = 1;
let wynik = 0;
for (let i = 0; i < linijki.length; i++) {
  analizaPolecenia(linijki[i]);
}
console.log(wynik);
