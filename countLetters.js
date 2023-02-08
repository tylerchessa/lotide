const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !==  ${expected}`);
  }

};

const countLetters = function(input) {
  let output = {};
  for (let string of input) {
    if (string !== " ") {
    if (output[string]) {
      output[string] += 1
    } else {output[string] = 1 
    }
  }
}
    return output;
}; 

console.log(countLetters("lighthouse in the house"));