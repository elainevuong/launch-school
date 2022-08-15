/* Multiplicative Average
Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

Examples:
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
*/

/*
Process the Problem
- Input - an array of integers
- Output - a string
    - multiply all of the integers together
    - divide by the number of entries in the array
    - return the result as a string, with the value rounded to three decimal places
- Explicit Rules
  - the array will be an array of integers
- Implicit Rules
  - what should an empty return? Assume it should return zero

Data Structure
- An Array of Numbers is Provided
- A Product of all of the numbers in the array is a sub step
- An Average is computed
- Average is returned as. astring, with 3 decimals

Algorithm
- Given an Array of numbers
- 1) Compute the Product
  - Iterate through the array, and compute the product of multiplying all elements in the array
- 2) Compute the Average
  - Take the Product and Divide it by the number of elements in the array
- 3) Return the Average as a String, with the value rounded to three decimal places
*/

function multiplicativeAverage(numArr) {
  let product = numArr.reduce((product, elem) => product *= elem, 1);
  
  let average = product / numArr.length
  
  return average.toFixed(3)
  
}

// EV Solution
function multiplicativeAverage(numArr) {
  return (numArr.reduce((total, elem) => total * elem, 1) / numArr.length).toFixed(3)
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"