const { nums, words } = require("./data/data.js");

// Reduce

const addAllNum = (arr) => {
  return arr.reduce((acc, e) => (acc += e), 0);
};

const concWords = (arr) => {
  return arr.reduce((acc, e) => acc + e, "");

  //  adding a space between words
  //   return arr.reduce((acc, e) => acc + " " + e, "")
};

// console.log(addAllNum(nums));
// console.log(concWords(words));

// Sort
const sortArr = (arr) => {
  // ASCII code val sorting
  return arr.sort();
};

const sortNumsAsc = (arr) => {
  return arr.sort((a, b) => a - b);
};

const sortNumsDesc = (arr) => {
  return arr.sort((a, b) => b - a);
};

const sortWordsAsc = (arr) => {
  return arr.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  });
};

const sortWordsDesc = (arr) => {
  return arr.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() < b.toLowerCase()) {
      return 1;
    }
    return 0;
  });
};

// console.log(sortArr(words));
// console.log(sortArr(nums));
// console.log(sortNumsAsc(nums));
// console.log(sortNumsDesc(nums));
// console.log(sortWordsAsc(words))
// console.log(sortWordsDesc(words))

// isPanagram
const isPanagram = (arr) => {
  let hasAllLetters = false;
  let code = 97;
  while (code < 123) {
    hasAllLetters = false;
    const letter = String.fromCharCode(code);
    arr.find((e) => (e.includes(letter) ? (hasAllLetters = true) : null));

    hasAllLetters ? code++ : (code = 123);
  }
  return hasAllLetters;
};

// console.log(isPanagram(words));

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

const lessThan10Price = (arr) => {
  return arr.filter((e) => e.price < 10);
};

const sortNameAsc = (arr) => {
  return arr.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
};

// console.log(lessThan10Price(products));
// console.log(sortNameAsc(products))
