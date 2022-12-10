const fs = require("fs");

const linijki = fs
  .readFileSync("tests7.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");
linijki.shift(); // :)
// to i jest jakieś pojebane - do refaktoryzacji!

class WezelDir {
  constructor(rodzic, nazwa) {
    if (rodzic) rodzic.wstawElement(this);
    this.nazwa = nazwa;
    this.dzieci = [];
  }

  wstawElement(element) {
    this.dzieci.push(element);
    element.rodzic = this;
  }

  obliczRozmiarFolderu() {
    let suma = 0;
    this.dzieci.forEach((elem) => (suma += elem.obliczRozmiarFolderu()));
    return suma;
  }
}

class WezelPlik {
  constructor(rodzic, rozmiar) {
    rodzic.wstawElement(this);
    this.rozmiar = parseInt(rozmiar);
  }

  obliczRozmiarFolderu() {
    return this.rozmiar;
  }
}

class SystemPlikow {
  constructor() {
    this.root = new WezelDir(null, "/");
  }

  cdDoTylu() {
    return obecnyFolder.rodzic;
  }

  cd(polecenie) {
    for (let i = 0; i < obecnyFolder.dzieci.length; i++) {
      if (obecnyFolder.dzieci[i].nazwa == polecenie[2])
        return obecnyFolder.dzieci[i];
    }
  }

  ls(polecenie, i) {
    for (; i < linijki.length; i++) {
      polecenie = linijki[i];
      polecenie = polecenie.split(" ");
      if (polecenie[0] == "$") {
        break;
      }
      if (polecenie[0] === "dir") {
        new WezelDir(obecnyFolder, polecenie[1]);
      } else {
        new WezelPlik(obecnyFolder, polecenie[0]);
      }
    }
    return i - 2;
  }

  analizaPolecenia(polecenie, i) {
    polecenie = polecenie.split(" ");
    if (polecenie[0] === "$") {
      if (polecenie[2] === "..") {
        obecnyFolder = this.cdDoTylu(obecnyFolder);
      } else if (polecenie[1] === "cd") {
        obecnyFolder = this.cd(polecenie, obecnyFolder);
      } else {
        polecenie = linijki[++i];
        polecenie = polecenie.split(" ");
        i = this.ls(polecenie, i, obecnyFolder);
      }
    }
    return i;
  }
}

const zad2 = (folder, min) => {
  let suma = folder.obliczRozmiarFolderu();
  if (suma >= 208860 && suma < min) {
    return (min = suma);
  }
  folder.dzieci.forEach((elem) => {
    if (elem.constructor.name === "WezelDir") {
      min = zad2(elem, min);
    }
  });
  return min;
};

let dzefko = new SystemPlikow();
let obecnyFolder = dzefko.root;
for (let i = 0; i < linijki.length; i++)
  i = dzefko.analizaPolecenia(linijki[i], i);

let szukany = 70000000 - dzefko.root.obliczRozmiarFolderu();
console.log(zad2(dzefko.root, 1000000));
