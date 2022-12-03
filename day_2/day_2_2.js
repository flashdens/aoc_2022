const fs = require("fs");

const linijki = fs
  .readFileSync("tests2.txt", { encoding: "utf-8" })
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

// A for Rock, B for Paper, and C for Scissors - opponent
// X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win.

// Your total score is the sum of your scores for each round.
// The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors)
// plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

// A X = 3 + 0 = 3
// A Y = 1 + 3 = 4
// A Z = 2 + 6 = 8

// B X = 1 + 0 = 1
// B Y = 2 + 3 = 5
// B Z = 3 + 6 = 9

// C X = 2 + 0 = 2
// C Y = 3 + 3 = 6
// C Z = 1 + 6 = 7

let rozstrzygnijRunde = {
  AX: 3,
  AY: 4,
  AZ: 8,
  BX: 1,
  BY: 5,
  BZ: 9,
  CX: 2,
  CY: 6,
  CZ: 7,
};

let suma = 0;

for (let i = 0; i < linijki.length; i++) {
  suma += rozstrzygnijRunde[linijki[i][0] + linijki[i][1]];
}

console.log(suma);
