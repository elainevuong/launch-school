/* 
Array Average
Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.

Examples:

Copy Code
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
*/

/*
Process the Problem
- Input - an array of integers
- Output - a number, which is an average of all the integers in the array, rounded down
- Explicit Rules - the array will never be empty and and the numbers will always be positive integers

Examples

Data Structures
- Iterate through the Array, adding all the values together
- Divide the total computed by the number of elements in the array
- Return the average

*/
function average(numArr) {
  return Math.floor(numArr.reduce((total, elem) => total + elem, 0) / numArr.length);
}


console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40