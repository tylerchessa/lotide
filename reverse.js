// function to reverse the spelling of the string
const reverse = function(string) {
  let reverseString = "";
  for (let x = string.length - 1; x >= 0; x--) {
    reverseString = reverseString + string[x];
  } return reverseString;
};

//grab command line arguments 
let words = process.argv.slice(2);

// loops through each word to reverse
for (let word of words) {
  console.log(reverse(word));
};

