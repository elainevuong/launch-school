// Stringy Strings

/* Write a function that takes one argument, a positive integer, and returns a 
string of alternating '1's and '0's, always starting with a '1'. The length 
of the string should match the given integer. */

function stringy(number) {
  let newString = ''

  let fullReps = Math.floor(number / 2)

  for (let counter = 0; counter < fullReps; counter++) {
    newString += '10';
  }
  
  if (number % 2 === 1) {
    newString += '1'; // check for odd number, and add a 1
  }

  return newString;

}

/* 
function stringy(num) {
  if (num % 2 == 0) {
    return '10'.repeat(num / 2);
  } else {
    return '10'.repeat((num - 1) / 2) + '1';
  }
}
*/

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));  // "1010"
console.log(stringy(7));  // "1010101"


/* LS Solution -> checks each index position
function stringy(size) {
  let result = "";
  for (let idx = 0; idx < size; idx++) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
};
*/


function stringy1(size) {
  let result = '';
  for (let index = 0; index < size; index++) {
    let number = ((index % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
};

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

console.log(stringy1(6));    // "101010"
console.log(stringy1(9));    // "101010101"
console.log(stringy1(4));    // "1010"
console.log(stringy1(7));    // "1010101"

function stringy(num) {
  return Array(num).fill(1).map((elem, index) => elem = (index % 2 === 0) ? 1 : 0).join('')
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"