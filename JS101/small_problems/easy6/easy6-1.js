/* 
Double Char (Part 1)
Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

Examples:

Copy Code
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
*/

/*
Process the Problem / Examples and Test Cases
- Input - a string
- Output - a new string, with every character in the string doubled
- Explicit Rules - return a new string, with every character in the original string doubled
- Implicit Rules 
  Empty String - if an empty string is entered, return an empty string
  Spaces - spaces should also be doubled

Data Structure
- Input is a String, and the Output is a String

Algorithm
- Create a new empty string to collect the doubled character results
** Edge Case **
  - If an empty string is inputted, return an empty string
  
- Iterate through each character in the input string
  - Add the same character twice to the doubled character string

- Return the doubled character string

*/

// String Addition with String Indexing 
function repeater(str) {
  let repeatStr = ''
  
  if (str === '') return repeatStr; // Edge Case for an Empty String 
  
  for (let index = 0; index < str.length; index++) {
    repeatStr = repeatStr + str[index] + str[index]
  }
  
  return repeatStr;
  
}

// String Concatenation
function repeater1(str) {
  let repeatStr = ''
  
  if (str === '') return repeatStr; // Edge Case for an Empty String check
  
  for (let index = 0; index < str.length; index++) {
    repeatStr = repeatStr.concat(str[index], str[index]);
  }
  
  return repeatStr;
  
}

// String Concatenation with Repeat Number as a Separate Argument
function repeater2(str, num) {
  let repeatStr = ''
  
  if (str === '') return repeatStr; // Edge Case for an Empty String check
  
  for (let index = 0; index < str.length; index++) {
    repeatStr = repeatStr.concat(str[index].repeat(num));
  }
  
  return repeatStr;
  
}

// Array Solution
function repeater3(str) {
  return str.split('').map((char) => char + char).join(''); 
}

// Array Solution with Spread
function repeater4(str) {
  return [...str].map((char) => char + char).join(''); 
}

// Array Solution with Reduce
function repeater5(str) {
  return [...str].reduce((string, char) => string + char.repeat(2),'');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

console.log(repeater1('Hello'));        // "HHeelllloo"
console.log(repeater1('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater1(''));             // ""

console.log(repeater2('Hello', 2));        // "HHeelllloo"
console.log(repeater2('Good job!', 2));    // "GGoooodd  jjoobb!!"
console.log(repeater2('', 2));             // ""

console.log(repeater3('Hello', 2));        // "HHeelllloo"
console.log(repeater3('Good job!', 2));    // "GGoooodd  jjoobb!!"
console.log(repeater3('', 2));             // ""

console.log(repeater4('Hello', 2));        // "HHeelllloo"
console.log(repeater4('Good job!', 2));    // "GGoooodd  jjoobb!!"
console.log(repeater4('', 2));             // ""

console.log(repeater5('Hello', 2));        // "HHeelllloo"
console.log(repeater5('Good job!', 2));    // "GGoooodd  jjoobb!!"
console.log(repeater5('', 2));             // ""