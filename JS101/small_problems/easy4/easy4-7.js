/* 
Running Totals
Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

Examples:
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
*/

/*
Process the Problem
- Required: Write a function
- Input: an Array of Numbers
- Output: an Array with the same number of elements, but with each element's value being the   running total from the original Array

Examples/Test Cases
- Implicit Rules - an empty array should return an empty array

Data Structures
- Array

Algorithm
0. Edge Case Check - if the length of the number array is 0, return an empty array
1. Initialize a variable that will keep track of the running total of the array. Assign the      variable to a value of 0.
2. Iterate through the elements in the array, and increase the running total of the array by    the value of the current element. In a new array, take the value of the running total 
   and add it as an element of the new array.
3. Return the new array.
*/

// EV Solution Round 2
function runningTotal(numArr) {
  if (numArr.length === 0) return [];
  let total = 0;
  return numArr.map(elem => total += elem)
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []


function runningTotal1(numArr) {
  if (numArr.length === 0) return []; // Edge Case check for an Empty Array
  
  let currTotal = 0
  
  return numArr.map((num) => {
    return currTotal += num;   
  });  
}

function runningTotal(numArr) {
  if (numArr.length === 0) return []; // Edge Case check for an Empty Array
  
  let total = 0
  
  return numArr.reduce((accumArr, num) => {
    total += num
    accumArr.push(total);
    return accumArr;
  }, []);

}

                    
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));  