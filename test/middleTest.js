const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')

const middleTest1 = middle([1, 2, 3, 4])
const middleTest2 = middle([1, 2, 3, 4, 5])


console.log(assertArraysEqual(middleTest1, [2, 3]));
console.log(assertArraysEqual(middleTest2, [3]));