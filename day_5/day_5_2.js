const fs = require("fs");

// robie te stosy recznie. pierdole to
// edit: bardzo zle wyglada ten kod, fujka

const linijki = fs
  .readFileSync("tests5.txt", { encoding: "utf-8" })
  .replace(/move/g, "")
  .replace(/from/g, "")
  .replace(/to/g, "")
  .replace(/  +/g, " ")
  .split(/[\n, ]+/);

let stos1 = ["S", "C", "V", "N"];
let stos2 = ["Z", "M", "J", "H", "N", "S"];
let stos3 = ["M", "C", "T", "G", "J", "N", "D"];
let stos4 = ["T", "D", "F", "J", "W", "R", "M"];
let stos5 = ["P", "F", "H"];
let stos6 = ["C", "T", "Z", "H", "J"];
let stos7 = ["D", "P", "R", "Q", "F", "S", "L", "Z"];
let stos8 = ["C", "S", "L", "H", "D", "F", "P", "W"];
let stos9 = ["D", "S", "M", "P", "F", "N", "G", "Z"];

let ktore = {
  1: stos1,
  2: stos2,
  3: stos3,
  4: stos4,
  5: stos5,
  6: stos6,
  7: stos7,
  8: stos8,
  9: stos9,
};

function przerzuc(ile, stosZ, stosDo) {
  let temp = stosZ.pop();
  ile--;
  if (ile) przerzuc(ile, stosZ, stosDo);
  stosDo.push(temp);
}

for (let i = 1; i < linijki.length - 1; i += 3) {
  przerzuc(linijki[i], ktore[linijki[i + 1]], ktore[linijki[i + 2]]);
}
console.log(
  stos1.pop() +
    stos2.pop() +
    stos3.pop() +
    stos4.pop() +
    stos5.pop() +
    stos6.pop() +
    stos7.pop() +
    stos8.pop() +
    stos9.pop()
);
