"use strict";

// Task 1

const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(scoreDolphins, scoreKoalas) {
  if (scoreDolphins * 2 >= scoreKoalas) {
    console.log(`Dolphins win 🏆(${scoreDolphins} vs ,${scoreKoalas})`);
  } else if (scoreKoalas * 2 >= scoreDolphins) {
    console.log(`Koalas win 🏆 (${scoreKoalas} vs ,${scoreDolphins})`);
  } else {
    console.log("NO WINNER IN THIS GAME!");
  }
}

// Test 1
console.log(checkWinner(scoreDolphins, scoreKoalas));
// Test 2
console.log(
  checkWinner(
    (scoreDolphins = calcAverage(85, 54, 41)),
    (scoreKoalas = calcAverage(23, 34, 27))
  )
);

// Task 2
const bill = [125, 555, 44];
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const tip = new Array();
for (let i = 0; i < bill.length; i++) {
  tip[i] = calcTip(bill[i]);
}

const totalValue = [tip[0] + bill[0], tip[1] + bill[1], tip[2] + bill[2]];

console.log(bill, tip, totalValue);

// Task 3
const markObject = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const johnObject = {
  name: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

markObject.calcBMI();
johnObject.calcBMI();

if (johnObject.bmi > markObject.bmi) {
  console.log(
    `John Smith's BMI (${johnObject.bmi}) is higher than Mark Miller's (${markObject.bmi})!`
  );
} else if (markObject.bmi > johnObject.bmi) {
  console.log(
    `Mark Miller's BMI (${markObject.bmi}) is higher than John Smith's (${johnObject.bmi})!`
  );
}

// Task 5
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = new Array();
const totals = new Array();

const calcTips = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTips(bills[i]));

  totals.push(tips[i] + bills[i]);
}

console.log(totals);

function calcNewAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}
// Test 1
console.log(calcNewAverage([10, 10, 10]));
// Test 2
console.log(calcNewAverage(totals));
