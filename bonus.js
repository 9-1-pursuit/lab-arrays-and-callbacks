const { nums, words } = require("./data/data.js");
const  { panagram, products} = require("./data/bonusData.js")
//  Hungry for More
/* 
Reduce
Add all the numbers in the array together using the reduce method
concatenate all the words using reduce

Sort
Try to sort without any arguments, do you get what you'd expect with the numbers array?
Try to sort without any arguments, do you get what you'd expect with the words array?
Sort the numbers in ascending order
Sort the numbers in descending order
Sort the words in ascending order
Sort the words in descending order
*/

// Reduce
/* 
   - use reduce to concat nested arrays into acc array 
        - b = A.reduce((acc, x) => acc.concat(x), [])
*/
function reduceSum(arr) {
    const sum = arr.reduce((acc, el) => {
        return acc += el
    }, 0)
    return sum
}

function reduceStr(arr){
    const string = arr.reduce((acc, el) => {
        return acc += el
    }, "")
    return string
}

// Sort
/* 
     - console.log(words.sort()) -> orders by first letter, capital first
    - console.log(nums.sort()) -> orders asc based on first number -> 10, before 9
*/
// compare function for numbers (used w/ both sortNum functions)
function orderNumbers(a, b){
    if(typeof a === "string" && typeof b === "string"){
        return a.toLowerCase() < b.toLowerCase() ? -1 : 1 || 0
        
        // check if same letter, if one capital, order accordingly, or loop through string and compare subsequent letters
    }
  return a < b ? -1 : 1 || 0
}

// Ascending Num
function sortNumAsc(arr){
    arr.sort(orderNumbers)
    return arr
}

// Descending Num
function sortNumDesc(arr){
    arr.sort(orderNumbers).reverse()
    return arr
}

// Ascending Words
/*  
    -just first letter or all letters in word (book after boat) 
    - case sensitive ??? Boat before/ after boat
    */
function sortStrAsc(arr){
    arr.sort(orderNumbers)
    return arr
}

function sortStrDesc(arr){
    arr.sort(orderNumbers).reverse()
    return arr
}

// Array Methods Challenge Problems
// isPanagram