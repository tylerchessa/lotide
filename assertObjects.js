
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let objectThree = {};
  // if objects do not have same amount of keys return false
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  //looping throuhgh the first objects keys
  for (let keyOne in object1) {
    //values are arrays and keys and values are equal show true
    if (Array.isArray(object1[keyOne]) && Array.isArray(object2[keyOne])) {
      if (eqArrays(object1[keyOne], object2[keyOne]) === false) {
        return false;
      }
    }
    //if keys and values do not equal show false
    else if (object1[keyOne] !== object2[keyOne]) {
      return false;
    }
  }

  return true;
};

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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  //const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    return (`✅Assertion Passed: True`);
  } else if (eqObjects(actual, expected) === false) {
    return (`❌Assertion Failed: False`);
  }
};

const ball = { colour: "red", texture: "rough"}
const puck = { colour: "black", texture: "hard"}
console.log(assertObjectsEqual(ball, puck));
//console.log(`Example label: ${inspect(actual)}`);