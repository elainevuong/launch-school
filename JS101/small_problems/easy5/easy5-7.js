/* Multiply Lists
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

Example:

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
*/

/*
Process the Problem
- Input - two argument arrays, each containing a list of numbers and eaach one containing the same number of elements
- Output - a new array that contains the product of each pair of numbers from the arguments that have the same index
- Explicit Rules - both arrays have the same number of elements, and each one contains a list of numbers

Examples

Data Structures
- Array Iteration, Returns a New Array of Products

Algorithm
- Create a new Array that will capture the product of the elements in both argument arrays
- Iterate through the first Argument Array
  - For each element in the array, obtain the index of that element
  - Step 2 - Multiply the current element with the element in the second Argument Array that has the same index
- Return the product of Step 2 as an element of the new Array

*/
// map
function multiplyList(numArr1, numArr2) {
  return numArr1.map((_, index) => numArr1[index] * numArr2[index]);
}

// reduce
function multiplyList1(numArr1, numArr2) {
  return numArr1.reduce((newArr, _, index) => {
    newArr.push(numArr1[index] * numArr2[index])
    return newArr;
  }, []);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

console.log(multiplyList1([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
