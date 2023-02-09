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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !==  ${expected}`);
  }

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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

const mediumSleeveShirtObject = { size: "medium", color: ["green", "blue"], sleeveLength: "long" };
const colorSleeveShirtObject = { size: "medium", color: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(colorSleeveShirtObject, mediumSleeveShirtObject), false); // => true