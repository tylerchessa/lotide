

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

const flatten = (arrayToFlatten) => {
  let flattenedArray = [];
  let arrayToPush = []
  for (let data of arrayToFlatten)
  if (data.isArray) {
    for (let dataOfData of data) {
      arrayToPush.push(dataOfData)
      flattenedArray.concat(arrayToPush)
    }
    
  } else {arrayToPush.push(data)
    flattenedArray.concat(arrayToPush)
  }
  console.log(flattenedArray)
  console.log(arrayToPush)
  return flattenedArray;
};


console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));