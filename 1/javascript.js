"use strict";

// ----------------- 1

// --- String
const firstName = "Airidas";
const lastName = "Smirnovas";
const fullName = `${firstName + " " + lastName}`;

// --- Number
const birthYears = 1997;
let currentYears = 2022;
const personAge = currentYears - birthYears;

// --- BigInt
const cardNumber = 9959864615154881n;
let currentValue = BigInt("999999999999999999999");
const updatedValue = currentValue + BigInt("5");

// --- Boolean
const draw = 5 === 5;
const activePlayer = true;
const someoneIsPlaying = activePlayer ? true : false;

// --- Undefined
let player1, player2;
let name = undefined;

// --- Null
let number = null;
const missingObject = null;
const emptyObject = null;

// --- Symbol
const mySymbol = Symbol();
let symbolId = Symbol("id");
console.log(typeof symbolId);

// --- Object
const emptyObj = {};

const person = {
  firstName: "Airidas",
  lastName: "Smirnovas",
  birthYear: 1997,
};

const carInfo = {
  brand: "Audi",
  model: "A8",
  years: 2016,
};

// ----------------- 2

// const age = 17;

// age >= 18
//   ? console.log("Vairuoti galima")
//   : console.log(`Vairuoti draudžiama. Galima bus po ${18 - age} metų`);

// ----------------- 3

// const age = 19;

// age < 18
//   ? console.log(`Nepilnametis.`)
//   : `${
//       age >= 18 && age <= 20
//         ? console.log("Pilnametis, bet vartoti alkoholio negalima.")
//         : console.log("Pilnametis, vartoti alkoholį galima.")
//     }`;

// ----------------- 4

// const age = 17;
// const isDrivingAllowed = age >= 18 ? true : false;
// if (isDrivingAllowed) {
//   console.log("Vairuoti galima");
// } else {
//   console.log(`Vairuoti draudžiama. Galima bus po ${18 - age} metų`);
// }

// ----------------- 5

// const age = 48;
// let generation;

// age > 9 && age < 26
//   ? (generation = "Gen Z")
//   : age > 25 && age < 42
//   ? (generation = "Millennials")
//   : age > 41 && age < 58
//   ? (generation = "Gen X")
//   : age > 57 && age < 68
//   ? (generation = "Boomers II*")
//   : age > 67 && age < 77
//   ? (generation = "Boomers I*")
//   : age > 76 && age < 95
//   ? (generation = "Post War")
//   : age > 94 && age < 101
//   ? (generation = "WW II")
//   : (generation = "0 results");

// const generation = (age) => {
//   return age > 9 && age < 26
//     ? "Gen Z"
//     : age > 25 && age < 42
//     ? "Millennials"
//     : age > 41 && age < 58
//     ? "Gen X"
//     : age > 57 && age < 68
//     ? "Boomers II*"
//     : age > 67 && age < 77
//     ? "Boomers I*"
//     : age > 76 && age < 95
//     ? "Post War"
//     : age > 94 && age < 101
//     ? "WW II"
//     : "0 results";
// };

// console.log(generation(age));

// ----------------- 6

// const speed = 40;
// let season, isWarm;
// displayMessage(speed);

// function displayMessage(t) {
//   getSeason();
//   console.log(`Greitis: ${t}km/h, važiuoti galima:`);

//   if (t <= 70) console.log(`- Kituose keliuose`);
//   if (t <= 90) console.log(`- Keliuose su asfalto ar betono danga`);
//   switch (isWarm) {
//     case true:
//       if (t <= 120 && t >= 60) console.log(`- Greitkeliuose`);
//       if (t <= 130 && t >= 60) console.log(`- Automagistralėse`);
//       break;
//     case false:
//       if (t <= 110 && t >= 60) console.log(`- Greitkeliuose`);
//       if (t <= 110 && t >= 60) console.log(`- Automagistralėse`);
//       break;
//   }
// }

// function getSeason() {
//   const month = new Date().getMonth();
//   switch (month) {
//     case 11:
//     case 0:
//     case 1:
//       season = "winter";
//       break;
//     case 2:
//     case 3:
//     case 4:
//       season = "spring";
//       break;
//     case 5:
//     case 6:
//     case 7:
//       season = "summer";
//       break;
//     case 8:
//     case 9:
//     case 10:
//       season = "autumn";
//   }
//   season === "summer" || "spring" ? (isWarm = true) : (isWarm = false);
// }

// ----------------- 7

// for (let i = 0; i < 10; i++) console.log(i);

// ----------------- 8

// for (let i = -10; i >= -20; i--) console.log(i);

// ----------------- 9

// for (let i = 0; i <= 20; i++) if (i % 2 === 0) console.log(i);

// ----------------- 10

// const nickname = "Remigijus";
// const letterCounter = (name) => console.log(name.length);

// letterCounter(nickname);
