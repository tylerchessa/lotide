
// compares 2 arrays 
const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  //print first array into string
  for (let x = 0; x < firstArray.length; x++) {
    if (firstArray[x] !== secondArray[x]) {
      return false;
    }
  } return true;
};
 
//compares 2 arrays and returns true if they are the exact same
const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true) {
    return (`✅Assertion Passed: True`);
  } else if (eqArrays(firstArray, secondArray) === false) {
    return (`❌Assertion Failed: False`);
  }
};

console.log(assertArraysEqual([123],[123]));

