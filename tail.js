
const tail = function(input) {
  let inputNew = [];
  if (input.length < 2) {
    return []
  };
  for (let x = 1; x < input.length; x++) {
    inputNew.push(input[x]);
  } return inputNew;

};

module.exports = tail;