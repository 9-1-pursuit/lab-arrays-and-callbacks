const { nums, words } = require("./data/data.js");

// Every

const isEveryNumGreaterThan2 = (arr) => {
  return arr.every((e) => e > 2);
};

const isEveryWordShorterThan7 = (arr) => {
  return arr.every((e) => e.length < 7);
};

// Filter

const arrayLessThan5 = (arr) => {
  return arr.filter((e) => e < 5);
};

const arrayOddLengthWords = (arr) => {
  return arr.filter((e) => e.length % 2 > 0);
};

// Find

const firstValDivisibleBy4 = (arr) => {
  return arr.find((e) => e % 4 === 0);
};

const firstWordLongerThan4Char = (arr) => {
  return arr.find((e) => e.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = (arr) => {
  return arr.findIndex((e) => e % 3 === 0);
};

const firstWordIndexLessThan2Char = (arr) => {
  return arr.findIndex((e) => e.length < 2);
};

// For Each

const logValuesTimes3 = (arr) => {
  arr.forEach((e) => console.log(e * 3));
};

const logWordsWithExclamation = (arr) => {
  arr.forEach((e) => console.log(e + "!"));
};

// Map

const arrayValuesSquaredTimesIndex = (arr) => {
  return arr.map((e, i) => e * e * i);
};

const arrayWordsUpcased = (arr) => {
  return arr.map((e) => e.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = (arr) => {
  return arr.some((e) => e % 7 === 0);
};

const doSomeWordsHaveAnA = (arr) => {
  return arr.some((e) => e.includes("a"));
};

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
