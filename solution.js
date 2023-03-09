const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  const every = nums.every((x) => {
    return x >= 2
  })
return every

};

const isEveryWordShorterThan7 = () => {
  const every = words.every((x) => {
    return x.length < 7
  })

  return every
};

// Filter

const arrayLessThan5 = () => {
  const filter = nums.filter((x) => {
    return x < 5
  })

  return filter
};

const arrayOddLengthWords = () => {
  const filter = words.filter((x) => {
    return x.length % 2 === 1
  })

  return filter
};

// Find

const firstValDivisibleBy4 = () => {
  const find = nums.find((x) => {
    return x % 4 === 0
  })

  return find

};

const firstWordLongerThan4Char = () => {
  
  const find = words.find((x) => {
    return x.length > 4
  })

  return find

};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  
const findIndex = nums.findIndex((x) => {
  return x % 3 === 0
})

return findIndex

};

const firstWordIndexLessThan2Char = () => {
  
  const findIndex = words.findIndex((x) => {
    return x.length < 2
  })
  
  return findIndex

};

// For Each

const logValuesTimes3 = () => {
  
  nums.forEach((x) => {
    console.log(x * 3)
  })

};

const logWordsWithExclamation = () => {
  
words.forEach((x) => {
  console.log(`${x}!`)
})

};

// Map

const arrayValuesSquaredTimesIndex = () => {
  
const map = nums.map((x , i) => {
  return(
    (x * x) * i
  )
})

return map

};

const arrayWordsUpcased = () => {
  
const map = words.map((x) => {
  return(
    x.toUpperCase()
  )
})

return map

};

// Some

const areSomeNumsDivisibleBy7 = () => {
  
const some = nums.some((x) => {
  return x % 7 === 0
})

return some

};

const doSomeWordsHaveAnA = () => {
  
const some = words.some((x) => {
  return x.includes("a")
})

return some

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
