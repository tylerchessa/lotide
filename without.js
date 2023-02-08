
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

// take remove out of input and return input without remove
const without = function(input, remove) {

  //identify output as array
  let output = [];

  // loop through the remove array
  for (let x = 0; x < input.length; x++) {
    // let include = true;
    // // loop through the input array
    // for (let y = 0; y < remove.length; y++) {

    //   //if they do not equal push to output (new array)
    //   if (input[x] === remove[y]) {
    //     include = false;
    //   }
    // } 
    // if (include) {
    //   output.push(input[x]);
    // }
    if (!remove.includes(input[x])) {
      output.push(input[x]);
    }
  } 
  return output;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "2"])); // => ["1", "2"]