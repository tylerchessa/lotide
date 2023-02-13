// turns a string into pig latin
const pigLatin = function(word) {
  splitWord = word.split(" ");
  pigLatinArray = [];
  pigLatinString = "";

  //loops through the words that have been turned into arrays
  for (let x = 0; x < splitWord.length; x++) {
    pigLatinArray[x] = "";
    // starts at index 1 to spell out each word
    for (let y = 1; y < splitWord[x].length; y++) {
      pigLatinArray[x] = pigLatinArray[x] + splitWord[x][y];

      //adds the first letter and ay to the end
    } pigLatinArray[x] = pigLatinArray[x] + splitWord[x][0] + "ay";
  } pigLatinString = pigLatinArray.join(" ");
  console.log(pigLatinArray);
  console.log(splitWord);
  console.log(pigLatinString);

  return pigLatinString;
};

//grab command line arguments
let words = process.argv.slice(2);

let argument = words.join(" ")

console.log(pigLatin(argument));

