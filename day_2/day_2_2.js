const fs = require("fs");

const linijki = fs
  .readFileSync("tests2.txt", { encoding: "utf-8" })
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

// A for Rock, B for Paper, and C for Scissors - opponent
// X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win.

// A X = 3 + 0 = 3
// A Y = 1 + 3 = 4
// A Z = 2 + 6 = 8

// B X = 1 + 0 = 1
// B Y = 2 + 3 = 5
// B Z = 3 + 6 = 9

// C X = 2 + 0 = 2
// C Y = 3 + 3 = 6
// C Z = 1 + 6 = 7

function rozstrzygnijRunde(figuraPrzeciwnika, figuraGracza) {
  switch (figuraPrzeciwnika) {
    case "A":
      switch (figuraGracza) {
        case "X":
          return 3;
        case "Y":
          return 4;
        case "Z":
          return 8;
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
          return 2;
        case "Y":
          return 6;
        case "Z":
          return 7;
      }
  }
}

let suma = 0;

for (let i = 0; i < linijki.length; i++) {
  suma += rozstrzygnijRunde(linijki[i][0], linijki[i][1]);
}

console.log(suma);
