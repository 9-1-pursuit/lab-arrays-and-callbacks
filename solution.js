const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (arr) => {
  return arr.every((num) => num > 2);
};

const isEveryWordShorterThan7 = (arr) => {
  return arr.every((word) => word.length < 7);
};

// Filter

const arrayLessThan5 = (arr) => {
  return arr.filter((num) => num < 5);
};

const arrayOddLengthWords = (arr) => {
  return arr.filter((word) => word.length % 2 !== 0);
};

// Find

const firstValDivisibleBy4 = (arr) => {
  return arr.find((num) => num % 4 === 0);
};

const firstWordLongerThan4Char = (arr) => {
  return arr.find((word) => word.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = (arr) => {
  return arr.findIndex((num) => num % 3 === 0);
};

const firstWordIndexLessThan2Char = (arr) => {
  return arr.findIndex((word) => word.length < 2);
};

// For Each

const logValuesTimes3 = (arr) => {
  return arr.forEach((value) => console.log(value * 3));
};

const logWordsWithExclamation = (arr) => {
  return arr.forEach((word) => console.log(word + "!"));
};

// Map

const arrayValuesSquaredTimesIndex = (arr) => {
  return arr.map((value, i) => value ** 2 * i);
};

const arrayWordsUpcased = (arr) => {
  return arr.map((word) => word.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = (arr) => {
  return arr.some((value) => value % 7 === 0);
};

const doSomeWordsHaveAnA = (arr) => {
  return arr.some((word) => word.includes("a"));
};

//reduce
const reduceArray = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};
console.log(reduceArray(nums));

const concatWords = (arr) => {
  return arr.reduce((acc, curr) => acc + " " + curr);
};
console.log(concatWords(words));
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
