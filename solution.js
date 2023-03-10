const { nums, words } = require("./data/data.js")

// Every
const isEveryNumGreaterThan2 = (nums) => {
  //1. Determine if every number is greater than or equal to 2
  // Every() will return a boolean(true or false)
  //  So am basically comparing one num to another and making sure the number is equal to 2 or greater which will make it true
  // false if its less then 2
  // every() will loop threw the array to check if each number is greater then or equal to 2
  return nums.every((num) => num >= 2)
}

const isEveryWordShorterThan7 = (words) => {
  //2. Determine if every word shorter than 7 characters
  // loop threw using every() to check the lenght of each word to make sure it is shorter then 7 letters
  // checking length  to make sure it is less then  7 for it to be true
  // else it is false if greater then 7
  return words.every((letter) => letter.length <= 6)
}

// Filter

const arrayLessThan5 = (nums) => {
  //1. filter the array form numbers less than 5
  // loop threw nums array and filter out every number less 5 and return a new array with nums less then or equal to 5
  return nums.filter((num) => num < 5)
}

const arrayOddLengthWords = (words) => {
  //2. filter words that have an odd length
  // loop threw words array and filter out every word who letter is not divisible by 2
  //  word.length%2=== 1 this will give a remainder
  return words.filter((word) => word.length % 2 === 1)
}

// Find

const firstValDivisibleBy4 = (nums) => {
  //  divisible also means using %(modulus) number divide(%) by 4 that has no reminder
  return nums.find((num) => num % 4 === 0)
}

//2. find the first word that is longer than 4 characters

// Pseudocode
//Loop through the words arrray
//For each word, check if the length is greater than 4
//If it is, return the word
const firstWordLongerThan4Char = (words) => {
  return words.find((word) => word.length > 4)
}

// Find Index

// Pseudocode
// DEFINE a function that takes in an array of numbers as a parameter
//Loop through the array of numbers
//Check if the current number is divisible by 3
//If true, return the index of the divisible number

//1. find the index of the first number that is divisible by 3
const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex((num) => num % 3 === 0)
}
// 2. find the index of the first word that is less than 2 characters long?
// Pseudocode
// SET index to findIndex of words
// IF word length is less than 2
//RETURN index of word
const firstWordIndexLessThan2Char = () => {
  return words.findIndex((word) => word.length < 2)
}

// For Each
// Pseudocode
// SET nums as paramater
// SET num as one element in the array of numbers
// loop throw with ForEach
// ForEach number in numbers array
// multiply num by 3
//  console.log num * 3
const logValuesTimes3 = (nums) => {
  nums.forEach((num) => {
    console.log(num * 3)
  })
}

//2. console.log each word with an exclamation point at the end of it
//Pseudocode
// SET words as paramater
// Loop throw the array with ForEach( )
// set word as one element in words array
// ForEach word in words array
// add a exclamation point at the end of each word
// console.log (words)
const logWordsWithExclamation = (words) => {
  words.forEach((word) => {
    console.log(word + "!")
  })
  //
}

// Map

const arrayValuesSquaredTimesIndex = () => {
  //
}

const arrayWordsUpcased = () => {
  //
}

// Some

const areSomeNumsDivisibleBy7 = () => {
  //
}

const doSomeWordsHaveAnA = () => {
  //
}

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
}
