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
// START
//Loop through the words arrray
//For each word, check if the length is greater than 4
//If it is, return the word
// END

const firstWordLongerThan4Char = (words) => {
  return words.find((word) => word.length > 4)
}

// Find Index
//1. find the index of the first number that is divisible by 3

// Pseudocode
// START
// DEFINE a function that takes in an array of numbers as a parameter
//Loop through the array of numbers
//Check if the current number is divisible by 3
//If true, return the index of the divisible number
// END

const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex((num) => num % 3 === 0)
}
// 2. find the index of the first word that is less than 2 characters long?

// Pseudocode
// START
// SET index to findIndex of words
// IF word length is less than 2
//RETURN index of word
// END

const firstWordIndexLessThan2Char = () => {
  return words.findIndex((word) => word.length < 2)
}

// ForEach

// Pseudocode
// START
// SET nums as paramater
// SET num as one element in the array of numbers
// loop throw with ForEach
// ForEach number in numbers array
// multiply num by 3
//  console.log (num * 3)
// END

const logValuesTimes3 = (nums) => {
  nums.forEach((num) => {
    console.log(num * 3)
  })
}

//2. console.log each word with an exclamation point at the end of it

//Pseudocode
// START
// SET words as paramater
// Loop throw the array with ForEach( )
// set word as one element in words array
// ForEach word in words array
// add a exclamation point at the end of each word
// console.log (words)
// END

const logWordsWithExclamation = (words) => {
  words.forEach((word) => {
    console.log(word + "!")
  })
  //
}

// Map
// 1. make a new array of each number squared and then multiplied by their index number

// Pseudocode
// START
// create a new array with map()
// Loop threw each num in the array
// SET nums as a parammeter and index because we are gonna multiplied the num by its index
// Math.pow(base, exponent) = returns the value of a base raised to a power
//  then multiply the return to index
// return the newArray
// End

const arrayValuesSquaredTimesIndex = (nums) => {
  const newArray = nums.map((num, index) => {
    return Math.pow(num, 2) * index
  })
  return newArray
}

// 2. Make a new array of all the words in all uppercase

// Pseudocode
// Start
//  Declare a variable 'upperCaseWord' and set it equal to words.map() array.
//  Iterate through the 'words' array.
//  For each word in the array, convert all words to uppercase
//  Return the 'upperCaseWords' array.
// End

const arrayWordsUpcased = (words) => {
  const upperCaseWord = words.map((word) => word.toUpperCase())
  return upperCaseWord
}
// 1. What happened to the original array?
//  Answer: The original array remains the same.

// 2. Can you store the values from a map method in a new array?
// Answer: Yes, you can store new values in a map method in a new array.

// Some

// 1.Find out if some numbers are divisible by 7

// PseudoCode
/// Start
// Declare a function that takes in the parameter nums
// Create a variable called umnDivbySeven and set it equal to the nums array with some() method
// Inside the some() method, pass  num element as an argument
// Inside the function, return  num % 7 === 0
// A second Return with variable
// End/
const areSomeNumsDivisibleBy7 = (nums) => {
  const numDivbySeven = nums.some((num) => {
    return num % 7 === 0
  })
  return numDivbySeven
}

// side note
// There must be two returns because the first return statement is inside the some() callback,
//  which is executed for each element in the nums array.
// This return statement returns a boolean value (true or false) indicating whether or not the number is divisible by 7.
// The second return statement is at the end of the function, which returns the boolean value (true or false) stored in the numDivbySeven variable,
//  which is determined by the result of the some() callback.

//2. Find out if some words have the letter a in them

// Psuedocode
// START
// Declare a function that takes in the parameter words
// create a variable call aWord and set it equal to words array with some() method
// Inside the some() pass word element as the argument
// inside the some() return  if some words contain/inclues the letter a
// a second return for boolean value which is stored in variable aWord

const doSomeWordsHaveAnA = (words) => {
  const aWord = words.some((word) => {
    return word.includes("a")
  })
  return aWord
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
