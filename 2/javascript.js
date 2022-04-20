"use strict";

// ----------------- 1
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function numbers1f(arr) {
  console.log(arr[0] + arr[arr.length - 1]);
}

numbers1f(numbers1);

// ----------------- 2
const numbers2 = [10, 20, 50, 90, 100, 150];
function numbers2f(arr) {
  let sum = arr.reduce((acc, cur, i) => (acc += cur), 0);
  console.log(sum);
}

let numbers2Sum = numbers2.reduce((prev, cur) => prev + cur, 0);
console.log(numbers2Sum);

numbers2f(numbers2);

// --- 2.1
const cities = [
  { name: "Klaipeda", area: 10000 },
  { name: "Vilnius", area: 50000 },
  { name: "Kaunas", area: 30000 },
  { name: "Siauliai", area: 8000 },
];

const citiesSum = (city) => {
  let sum = city.reduce((acc, arr) => acc + arr.area, 0);
  console.log(sum);
};

citiesSum(cities);

// ----------------- 3
const users = [
  { username: "rokasandreikenas", pass: "rokand", id: 1 },
  { username: "zigmaszigmutis", pass: "ziggy", id: 2 },
  { username: "simassimutis", pass: "simsam", id: 3 },
];

console.log(users.find((user) => user.id === 3));

// ----------------- 4
const fruits = [];
fruits.push("Apple", "Orange", "Bannana");
cities.push({ name: "Elektrenai", area: 12000 });

console.log(fruits);
console.log(cities);

// ----------------- 5
fruits.unshift("strawbery", "Kiwi", "Melon");
console.log(fruits);

// unshift prideda elementa priekyje masyvo, o push masyvo gale;

// ----------------- 6
let names = ["Rock", "Bob", "Ash", "Sue", "Johny"];

names.pop();
names.pop();
names.shift();
names.shift();

console.log(names);

// shift istrina pirma elementa is masyvo, o pop paskutini;

names = ["Rock", "Bob", "Ash", "Sue", "Johny"];

// ----------------- 7
const firstTwo = names.slice(0, 2);
const lastTwo = names.slice(-2);

console.log(firstTwo);
console.log(lastTwo);

// ----------------- 8
// const concated = [...names, ...fruits];
const concated = names.concat(fruits);
console.log(concated);

// ----------------- 9
const months = [
  "Sausis",
  "Kovas",
  "Balandis",
  "Liepa",
  "Rugpjūtis",
  "Rugsėjis",
  "Spalis",
  "Gruodis",
];

months.splice(1, 0, "Vasaris");
months.splice(4, 0, "Geguze");
months.splice(5, 0, "Birzelis");
months.splice(10, 0, "Lapkritis");

console.log(months);
