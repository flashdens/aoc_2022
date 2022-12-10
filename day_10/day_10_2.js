const fs = require("fs");
let readline = require("readline");

const linijki = fs
  .readFileSync("tests10.txt", { encoding: "utf-8" })
  .split("\n");

const zapisanieWyniku = () => {
  let doSprawdzenia = [(rejestr - 1) % 40, rejestr % 40, (rejestr + 1) % 40];
  if (doSprawdzenia.includes(tiki % 40)) {
    sprite += "#";
  } else sprite += ".";
  if (tiki % 40 == 0) {
    sprite += "\n";
  }
};

const analizaPolecenia = (polecenie) => {
  tiki++;
  polecenie = polecenie.split(" ");
  zapisanieWyniku();
  if (polecenie[0] == "addx") {
    tiki++;
    rejestr += JSON.parse(polecenie[1]);
    zapisanieWyniku();
  }
};

let tiki = 0;
let rejestr = 1;
let sprite = "";
for (let i = 0; i < linijki.length; i++) {
  analizaPolecenia(linijki[i]);
}

process.stdout.write("" + sprite);
