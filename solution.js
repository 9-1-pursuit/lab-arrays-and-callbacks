const { nums, words } = require("./data/data.js");

// Every
// every() -> boolean if ALL elements meet condtional
const isEveryNumGreaterThan2 = (arr) => {
  const greater2 = arr.every(el => el > 2)
  return greater2
};

const isEveryWordShorterThan7 = (arr) => {
  const less7 = arr.every(el => el.length < 7)
  return less7
};

// Filter
// filter() -> returns elements to new array that meet conditional
const arrayLessThan5 = (arr) => {
  const less5 = arr.filter(el => el < 5)
  return less5
};

const arrayOddLengthWords = (arr) => {
  const oddLength = arr.filter(el => (el.length % 2) !== 0)
  return oddLength
};

// Find
// find() returns the first element that meets conditional
const firstValDivisibleBy4 = (arr) => {
  const factor4 = arr.find(el => (el % 4) === 0)
  return factor4
};

const firstWordLongerThan4Char = (arr) => {
  const longer4 = arr.find(el => el.length > 4)
  return longer4
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  //
};

const firstWordIndexLessThan2Char = () => {
  //
};

// For Each

const logValuesTimes3 = () => {
  //
};

const logWordsWithExclamation = () => {
  //
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  //
};

const arrayWordsUpcased = () => {
  //
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  //
};

const doSomeWordsHaveAnA = () => {
  //
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
