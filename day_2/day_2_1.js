const fs = require("fs");

const linijki = fs
  .readFileSync("tests2.txt", { encoding: "utf-8" })
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

// A for Rock, B for Paper, and C for Scissors - opponent
// X for Rock, Y for Paper, and Z for Scissors - player

// A X = 1 + 3 = 4
// A Y = 2 + 6 = 8
// A Z = 3 + 0 = 3

// B X = 1 + 0 = 1
// B Y = 2 + 3 = 5
// B Z = 3 + 6 = 9

// C X = 1 + 6 = 7
// C Y = 2 + 0 = 2
// C Z = 3 + 3 = 6

function rozstrzygnijRunde(figuraPrzeciwnika, figuraGracza) {
  switch (figuraPrzeciwnika) {
    case "A":
      switch (figuraGracza) {
        case "X":
          return 4;
        case "Y":
          return 8;
        case "Z":
          return 3;
      }
    case "B":
      switch (figuraGracza) {
        case "X":
          return 1;
        case "Y":
          return 5;
        case "Z":
          return 9;
      }
    case "C":
      switch (figuraGracza) {
        case "X":
          return 7;
        case "Y":
          return 2;
        case "Z":
          return 6;
      }
  }
}

let suma = 0;

for (let i = 0; i < linijki.length; i++) {
  suma += rozstrzygnijRunde(linijki[i][0], linijki[i][1]);
}

console.log(suma);
