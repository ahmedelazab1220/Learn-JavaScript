// Task 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / heightJohn ** 2;
let markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

const massAhmed = 95;
const heightAhmed = 1.88;
const massAli = 85;
const heightAli = 1.76;

let BMIAhmed = massAhmed / (heightAhmed * heightAhmed);
let BMIAli = massAli / heightAli ** 2;
let markLowerBMI = BMIAhmed > BMIAli;

console.log(BMIAhmed, BMIAli, markLowerBMI);

// Task 2
const massPaul = 78;
const heightPaul = 1.69;
const massSara = 92;
const heightSara = 1.95;

let BMIPaul = massPaul / (heightPaul * heightPaul);
let BMISara = massSara / heightSara ** 2;
console.log(`BMIPaul -> (${BMIPaul}) ,  BMISara -> (${BMISara})`);

if (BMIPaul > BMISara) {
  console.log(`Paul's BMI (${BMIPaul}) is higher than Sara's (${BMISara})!`);
} else {
  console.log(`Sara's BMI ${BMISara} is higher than Paul's ${BMIPaul}!`);
}

// Task 3
// Truthy and Falsy

// 5 falsy values : 0 , '' , null , undefiend , NaN
console.log(Boolean(0)); // -> False
console.log(Boolean("")); // -> False
console.log(Boolean(undefined)); // -> False
console.log(Boolean(null)); // -> False
console.log(Boolean(NaN)); // -> False
console.log(Boolean("Ahmed")); // -> True
console.log(Boolean(1)); // -> True

// Task 4
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy 🏆");
} else {
  console.log("Both win the trophy!");
}

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (scoreDolphins == scoreKoalas && scoreDolphins >= 100) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy 😭");
}

// Task 5
const bill1 = 275;
const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;

console.log(
  `The bill was ${bill1} \nthe tip was ${tip1} \nbill + tip equal to ==> ${
    tip1 + bill1
  }`
);

const bill2 = 430;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;

console.log(
  `The bill was ${bill2} \nthe tip was ${tip2} \nbill + tip equal to ==> ${
    tip2 + bill2
  }`
);
