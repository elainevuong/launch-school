/* 
List of Digits
Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

Examples:
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
*/

/*
Process the Problem
- Input - a positive integer
- Output - an array, of a list of the digits in that number

Data Structures
- Number -> String -> Array

Algorithm
- Given a positive number, convert that number to a string
- Split the string based on characters, and assign the result to an array

- Convert the Elements in the Array to a Number
- For each element in the Array
  - Convert the element to a number and add that converted number to a new Array
- Return the new Array

*/

function digitList(number) {
  let stringArr = String(number).split('')
  return stringArr.map((elem) => +elem);
  
}

function digitList1(num) {
  let result = []
  do {
    result.unshift(num % 10);
    num = Math.floor(num / 10);
  } while(num)
  return result;
}

function digitList2(number) {
  return [...number.toString()].map(Number);
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

console.log(digitList1(12345));       // [1, 2, 3, 4, 5]
console.log(digitList1(7));           // [7]
console.log(digitList1(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList1(444));         // [4, 4, 4]

console.log(digitList2(12345));       // [1, 2, 3, 4, 5]
console.log(digitList2(7));           // [7]
console.log(digitList2(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList2(444));         // [4, 4, 4]