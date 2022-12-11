const fs = require("fs");

let lines = fs.readFileSync("tests11.txt", { encoding: "utf-8" }).split("\n");

lines = lines.filter(Boolean);

class Monke {
  constructor(
    _items,
    _addOrMultiply,
    _value,
    _test,
    _trueOutcome,
    _falseOutcome
  ) {
    this.items = _items;
    this.addOrMultiply = _addOrMultiply;
    this.value = _value;
    this.test = _test;
    this.trueOutcome = _trueOutcome;
    this.falseOutcome = _falseOutcome;
    this.roundsSum = 0;
  }

  calculateWorryLevel(tempItem) {
    if (this.addOrMultiply === "+")
      return Math.floor((tempItem + this.value) / 3);
    else return Math.floor((tempItem * this.value) / 3);
  }

  renderRound() {
    let rounds = 0;
    while (this.items.length) {
      rounds++;
      let tempItem = this.items.shift();
      let worryLevel;
      if (this.value == "old")
        worryLevel = Math.floor((tempItem * tempItem) / 3);
      else worryLevel = this.calculateWorryLevel(tempItem);
      if (worryLevel % this.test === 0)
        monkeArray[this.trueOutcome].items.push(worryLevel);
      else monkeArray[this.falseOutcome].items.push(worryLevel);
    }
    this.roundsSum += rounds;
  }
}

const parseInput = () => {
  for (let i = 0; i < lines.length; i += 6) {
    lines[i + 1] = lines[i + 1].replace("Starting items:", " ");
    lines[i + 1] = lines[i + 1].split(",");
    lines[i + 1] = lines[i + 1].map(Number);
    lines[i + 2] = lines[i + 2].replace("Operation: new = old", "");
    lines[i + 2] = lines[i + 2].trim();
    lines[i + 2] = lines[i + 2].split(" ");
    if (lines[i + 2][1] != "old") {
      lines[i + 2][1] = JSON.parse(lines[i + 2][1]);
    }

    lines[i + 3] = lines[i + 3].replace("Test: divisible by", "");
    lines[i + 3] = lines[i + 3].trim();
    lines[i + 3] = JSON.parse(lines[i + 3]);
    lines[i + 4] = lines[i + 4].replace("If true: throw to monkey", "");
    lines[i + 4] = lines[i + 4].trim();
    lines[i + 4] = JSON.parse(lines[i + 4]);
    lines[i + 5] = lines[i + 5].replace("If false: throw to monkey", "");
    lines[i + 5] = lines[i + 5].trim();
    lines[i + 5] = JSON.parse(lines[i + 5]);

    let insertableMonke = new Monke(
      lines[i + 1],
      lines[i + 2][0],
      lines[i + 2][1],
      lines[i + 3],
      lines[i + 4],
      lines[i + 5]
    );

    monkeArray.push(insertableMonke);
  }
};

const monkeyBusinessCalculation = () => {
  let max1 = 0,
    max2 = 0;

  for (let i = 0; i < monkeArray.length; i++) {
    if (monkeArray[i].roundsSum > max2) max2 = monkeArray[i].roundsSum;
    if (monkeArray[i].roundsSum > max1) {
      max2 = max1;
      max1 = monkeArray[i].roundsSum;
    }
  }
  return max1 * max2;
};

let monkeArray = [];
parseInput();

for (let i = 0; i < 20; i++) {
  monkeArray.forEach((monke) => {
    monke.renderRound();
  });
}

console.log(monkeyBusinessCalculation());
