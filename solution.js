const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every(number => number >= 2)
};

const isEveryWordShorterThan7 = (words) => {
  return words.every(word => word.length < 7)
};

// Filter

const arrayLessThan5 = (nums) => {
  return nums.filter(number => number < 5)
};

const arrayOddLengthWords = (words) => {
  return words.filter(word => word.length % 2 !== 0)
};

// Find

const firstValDivisibleBy4 = (nums) => {
  return nums.find(number => number % 4 == 0)
};

const firstWordLongerThan4Char = (words) => {
  return words.find(word => word.length > 4)
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex(number => number % 3 == 0)
};

const firstWordIndexLessThan2Char = (words) => {
  return words.findIndex(word => word.length < 2)
};

// For Each

const logValuesTimes3 = (nums) => {
  nums.forEach(number => {
    console.log(number * 3)
  })
};

const logWordsWithExclamation = (words) => {
  words.forEach(word => {
    console.log(`${word}!`)
  })
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  return nums.map((number, index) => {
    return number ** 2 * index
  })
};


const arrayWordsUpcased = (words) => {
  return words.map(word => {
    return word.toUpperCase()
  })
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some(number => number % 7 == 0)
  //
};

const doSomeWordsHaveAnA = (words) => {
  return words.some(word => word.includes('a' || 'A'))
  //
};

// working with data
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

// filter:
const productsLessThanTen = (products) => {
  return products.filter(product => product.price < 10)
}

// sort

const productsSortedAlphabeticallyByProductName = (products) => {
  return products.sort((a, b) => {
  const nameA = a.name.toUpperCase(); 
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});
}

// console.log(productsLessThanTen(products))
console.log(productsSortedAlphabeticallyByProductName(products))


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
