const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every((num) => num.length >= 2)
};

const isEveryWordShorterThan7 = () => {
  return words.every((word) => word.length < 7)
};

// Filter

const arrayLessThan5 = () => {
  return nums.filter((num) => num < 5)
};

const arrayOddLengthWords = () => {
  return words.filter((word) => word.length % 2 !== 0)
};

// Find

const firstValDivisibleBy4 = () => {
  return nums.find((num) => num % 4 === 0)
};

const firstWordLongerThan4Char = () => {
  return words.find((word) => word.length > 4)
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  return nums.findIndex((num) => num % 3 === 0)
};

const firstWordIndexLessThan2Char = () => {
  return words.findIndex((word) => word.length < 2)
};

// For Each

const logValuesTimes3 = () => {
  nums.forEach((num) => console.log(num * 3))
};

const logWordsWithExclamation = () => {
  words.forEach((word) => console.log(`${word}!`))
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  let newArr = nums.map((num, index) => Math.pow(num, 2) * index)
  return newArr
};

const arrayWordsUpcased = () => {
  let allUpperCase = words.map((word) => word.toUpperCase())
  return allUpperCase
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  return nums.some((num) => num % 7 === 0)
};

const doSomeWordsHaveAnA = () => {
  return words.some((word) => word.includes("a"))
};

// Additional Problems

// Reduce

const sumOfAllNums = () => {
  return nums.reduce((acc, num) => acc + num)
};

const concatAllWords = () => {
  return words.reduce((acc, word) => acc + word)
};

// Sort

const sortNumsAscending = () => {
  return nums.sort((a, b) => a - b)
};

const sortNumsDescending = () => {
  return nums.sort((a, b) => b - a)
};

const sortWordsAscending = () => {
  return words.sort((a, b) => {
		return a.toLowerCase() === b.toLowerCase() ? 0 : (a.toLowerCase() < b.toLowerCase() ? -1 : 1);
	})
};

const sortWordsDescending = () => {
  return words.sort((a, b) => {
		return a.toLowerCase() === b.toLowerCase() ? 0 : (a.toLowerCase() > b.toLowerCase() ? -1 : 1);
	})
};

// Panagram

const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",  
];

const isPanagram = () => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let str = panagram.join("").toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    if (!str.includes(alphabet[i])) return false;
  }
  return true
};

// Working with data

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

// Filter

const productsUnder10 = () => {
  return products.filter((product) => product.price < 10)
};

const sortProductsAlphabetically = () => {
  return products.sort((a, b) => {
    return a.name.toLowerCase() === b.name.toLowerCase() ? 0 : (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
  })
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
