const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every((N) => N >= 2);
  //
};

const isEveryWordShorterThan7 = () => {
  return words.every((W) => W.length < 7);
  //
};

console.log();
// Filter

const arrayLessThan5 = () => {
  return nums.filter((N) => N < 5);
  //
};

const arrayOddLengthWords = () => {
  return words.filter((W) => W.length % 2 == 1);
  //
};

// Find

const firstValDivisibleBy4 = () => {
  return nums.find((N) => N % 4 == 0);
  //
};

const firstWordLongerThan4Char = () => {
  return words.find((W) => W.length > 4);
  //
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  return nums.findIndex((N) => N % 3 == 0);
  //
};

const firstWordIndexLessThan2Char = () => {
  return words.findIndex((W) => W.length < 2);
  //
};

// For Each

const logValuesTimes3 = () => {
  return nums.forEach((N) => console.log(N * 3));
  //
};

const logWordsWithExclamation = () => {
  return words.forEach((W) => console.log(W[W.length - 1] == "!"));
  //
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  return nums.map((N) => Math.pow(N, 2) * nums.indexOf(N));
  //
};

const arrayWordsUpcased = () => {
  return words.map((W) => W.toUpperCase());
  //
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  return nums.some((N) => N % 7 == 0);
  //
};

const doSomeWordsHaveAnA = () => {
  return words.some((W) => W.includes("a"));
  //
};

// console.log(
//   "reduce numbers",
//   nums.reduce((a, b) => a + b, 0)
// );

// console.log(
//   "reduce words",
//   words.reduce((a, b) => a + " " + b)
// );

// console.log("number sort", nums.sort());
// console.log(
//   "number sort accending ",
//   nums.sort((a, b) => a - b)
// );
// console.log(
//   "number sort descending  ",
//   nums.reverse().sort((a, b) => a + b)
// );
// console.log("words sort", words.sort());
// console.log(
//   " words sort accending ",
//   words.sort((a, b) => a - b)
// );
// console.log(
//   "words sort descending  ",
//   words.reverse().sort((a, b) => a + b)
// );

// console.log(products);

// console.log(
//   "isPanagram",
//   words
//     .join("")
//     .toLowerCase()
//     .replace(/[^a-z]/g, "")
//     .split("")
//     .sort().size === 26
// );

const products = [
  {
    name: "fairy lights",
    price: 5.99,
    description: "festive holiday decoration",
  },
  {
    name: "banana",
    price: 0.99,
    description: "full of potassium",
  },
  {
    name: "egg separator",
    price: 3.99,
    description: "it separates yolks from whites",
  },
  {
    name: "flag",
    price: 5.99,
    description: "catches the breeze",
  },
  {
    name: "quark",
    price: 0.01,
    description: "Very small",
  },
  {
    name: "turtleneck",
    price: 19.99,
    description: "available in black and slightly-darker black",
  },
  {
    name: "mitt (leather)",
    price: 15,
    description: "regulation sized",
  },
  {
    name: "nothing",
    price: 10,
    description: "Hey, if you pay us, we won't ask any questions.",
  },
  {
    name: "violin",
    price: 2000,
    description: "Talk about a JS fiddle...",
  },
  {
    name: "yoyo",
    price: 1,
    description: "We had to pull some strings to get this one in.",
  },
];

console.log(products.filter((P) => P.price < 10));
console.log(products.sort((a, b) => a.price - b.price));

module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  firstNumIndexDivisibleBy3,
  firstWordIndexLessThan2Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
