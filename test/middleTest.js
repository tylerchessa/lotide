const middle = require('../middle')
const assert = require('chai').assert

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); 
  });
});


// const middleTest1 = middle([1, 2, 3, 4])
// const middleTest2 = middle([1, 2, 3, 4, 5])


// console.log(assertArraysEqual(middleTest1, [2, 3]));
// console.log(assertArraysEqual(middleTest2, [3]));