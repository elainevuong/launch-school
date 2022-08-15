// Converting a String to a Number

const charCodeConversion = 48

function stringToInteger(stringNum) {
  let newNum = 0;

  let stringArr = stringNum.split('').reverse() 
  
  stringArr.forEach((number, index) => {
    let digit = number * (10 ** index)
    newNum += digit;
  });

  return newNum;
}

//  Key Idea: 4321 is 
// (1 * [10 ^ 0]) = 1
// (2 * [10 ^ 1]) = 20
// (3 * [10 ^ 2]) = 300
// (4 * [10 ^ 3]) = 4000
// 4321 = 4000 + 300 + 20 + 1
// Convert the String to a Reversed Array, and Iterate through it
// Multiply the element by the corresponding 10 ^ Index Position

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true