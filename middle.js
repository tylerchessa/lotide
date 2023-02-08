
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

//returns the middle of the array
const middle = function(array) {
  let middelArray = [];
  //if array is odd return the middle 1 array
  //if the array is even return the middle 2 arrays
  let even = (array.length % 2 === 0);
  let odd = (array.length % 2 === 1);
  if (array.length < 3) {
    return middelArray;
  }
  if (odd) {
    let x = Math.ceil(array.length / 2) - 1;
    middelArray.push(array[x]);
  }
   if (even) {
    let y = Math.ceil(array.length / 2) - 1;
    let i = y +1

    middelArray.push(array[y]);
    middelArray.push(array[i]);
   } 
   return middelArray;
  
  
};

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2]) );