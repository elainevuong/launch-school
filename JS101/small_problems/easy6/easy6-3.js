/* Reverse Number
Write a function that takes a positive integer as an argument and returns that number with its digits reversed.

Examples:
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1
*/

/*
Process the Problem / Examples
- Input - a Positive Number
- Output - a Number, with its digits reversed
- Implicit Rules
  - Trailing Zeros - if there are trailing zeroes in the input, these are DROPPED from the output

Data Structure
- Number -> String -> Array -> Reverse -> String -> Number

Algorithm
- Given a Number, convert it to a String, and then split it into an Array of Digits
- Reverse the Array of Digits, and re-join it as a String
- Convert the String to a Number, and return the result
*/
// Number -> String -> Array -> Reverse -> String -> Number
function reverseNumber(num) {
  return Number(String(num).split('').reverse().join(''))
}

// 
function reverseNumber1(num) {
  let digitArr = String(num).split('')
  let copyArr = digitArr.slice()       // make a copy to iterate over!
  let revArr = []
  
  for (let counter = 0; counter < digitArr.length; counter++) {
    revArr.push(copyArr.pop());        // pop - removes from the BACK of the array
  }
   
  return Number(revArr.join(''))
}

// unshift
function reverseNumber2(num) {
  let digitArr = String(num).split('')
  let revArr = []
  
  for (let counter = 0; counter < digitArr.length; counter++) {
    revArr.unshift(digitArr[counter]);        // adds to the BEGINNING - useful for reversing
  }
   
  return Number(revArr.join(''))
}


// Recursive using Math
function reverseNumber(num, acc = 0) {
  return (num) ? reverseNumber(Math.floor(num / 10), acc * 10 + num % 10) : acc;
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1

console.log(reverseNumber1(12345));    // 54321
console.log(reverseNumber1(12213));    // 31221
console.log(reverseNumber1(456));      // 654
console.log(reverseNumber1(12000));    // 21 -- Note that leading zeros get dropped!
console.log(reverseNumber1(1));        // 1

console.log(reverseNumber2(12345));    // 54321
console.log(reverseNumber2(12213));    // 31221
console.log(reverseNumber2(456));      // 654
console.log(reverseNumber2(12000));    // 21 -- Note that leading zeros get dropped!
console.log(reverseNumber2(1));        // 1