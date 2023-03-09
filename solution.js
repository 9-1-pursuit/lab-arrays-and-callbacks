const { nums, words } = require("./data/data.js");

//* Every
const isEveryNumGreaterThan2 = () => {
  return (greaterThanTwo = nums.every((num) => {
    num > 2;
  }));
};

const isEveryWordShorterThan7 = () => {
  return (shorterThanSeven = words.every((word) => word.length < 7));
};

//* Filter
const arrayLessThan5 = () => {
  return (lessThanFive = nums.filter((num) => num < 5));
};

const arrayOddLengthWords = () => {
  return (oddLength = words.filter((word) => word.length % 2 !== 0));
};

//* Find
const firstValDivisibleBy4 = () => {
  return (divisiblebyFour = nums.find((num) => num % 4 === 0));
};

const firstWordLongerThan4Char = () => {
  return (longerThanFour = words.find((word) => word.length >= 4));
};

//* Find Index -- findIndex()
const firstNumIndexDivisibleBy3 = () => {
  return (divisibleByThree = nums.findIndex((num) => num % 3 === 0));
};

const firstWordIndexLessThan2Char = () => {
  return (lessThanTwoChar = words.findIndex((word) => word.length <= 2));
};

//* For Each
const logValuesTimes3 = () => {
  return (threeTimes = nums.forEach((num) => {
    const value = num * 3;
    console.log(value);
  }));
};

const logWordsWithExclamation = () => {
  //? how to find words containing "!"
  return (withExclamation = words.forEach((word) => {const modWord = word + "!"
console.log(modWord);}));
};

//* Map
const arrayValuesSquaredTimesIndex = () => {
return squareTims = nums.map((num, index)=> num**2 *index)
};

const arrayWordsUpcased = () => {
return wordUpperased = words.map((word)=> word.toUpperCase())
};

//* Some
const areSomeNumsDivisibleBy7 = () => {
  return divisiblebySeven = nums.some((num)=> num % 7 ===0)
};

const doSomeWordsHaveAnA = () => {
 return haveAnA = words.some((word)=> word.includes("a"))
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
