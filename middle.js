 
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

module.exports = middle;