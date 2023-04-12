const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (arr) => {
  const greaterThan2 = (element) => element > 2
   return arr.every(greaterThan2)
 };

 const isEveryWordShorterThan7 = (arr) => {
  const shorterThan7 = (element) => element.length < 7
  return arr.every(shorterThan7)
};

// Filter

const arrayLessThan5 = (arr) => {
  return arr.filter(el => el < 5)
};

const arrayOddLengthWords = (arr) => {
  return arr.filter(el => el.length % 2 !== 0)
};

// Find

const firstValDivisibleBy4 = (arr) => {
  return arr.find(el => el % 4 === 0)
};

const firstWordLongerThan4Char = (arr) => {
  return arr.find(el => el.length > 4)
};
// Find Index

const firstNumIndexDivisibleBy3 = (arr) => {
  const isNumDiv3 = (element) => element % 3 === 0
  return arr.findIndex(isNumDiv3)
};

const firstWordIndexLessThan2Char = (arr) => {
  const lessThan2 = (element) => element.length < 2
  return arr.findIndex(lessThan2)
};

// For Each

const logValuesTimes3 = (arr) => {
  arr.forEach(el => console.log(el *= 3))
};

const logWordsWithExclamation = (arr) => {
  arr.forEach(el => console.log(el + '!'))
};

// Map

const arrayValuesSquaredTimesIndex = (arr) => {
  return arr.map((el, idx) => {
    return Math.pow(el, 2) * idx
  })
};

const arrayWordsUpcased = (arr) => {
  return arr.map(el => el.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = (arr) => {
  const divBy7 = (element) => element % 7 === 0
  return arr.some(divBy7)
};

const doSomeWordsHaveAnA = (arr) => {
  const includesA = (element) => element.includes('a')
  return arr.some(includesA)
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
