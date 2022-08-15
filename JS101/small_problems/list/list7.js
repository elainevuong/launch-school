/* Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.*/

/*
Process the Problem
- Input - an array of numbers
- Output - the sum of the sums of each leading subsequence in the array
- Rules - the array will always contain at least one number

Data Structures/Algorithms
1) Subsequence of an Array
- Given an Array, return a Nested Array, that consists of each leading subsequences in that array
- i.e. given [3, 5, 2] => return [ [3], [3, 5], [3, 5, 2]
- Create a New Array to capture the subsequences
- Declare a Counter Variable, and initialize it to a value of 1
  - While the Counter Variable <= the Length of the Array
    - Slice the array from Index 0 to the Index Counter Variable, and add the array to the subsequence array
    - Increment the Counter Variable
- Return the Subsequence Array

2) Totals of the Subsequence Array
  - Given a subsequence array, create a Total variable, and initialize it to the value of 0
  - For each element in the subsequence array, add the current element ot the Total
  - Return the Total 
  
*/

function subsequenceArray(array) {
  return array.map((_, index) => {
    return array.slice(0, index + 1);
  });
}

function subArrTotal(subArr) {
  return subArr.reduce((total, elem) => total + elem, 0);
}
  
function sumOfSums(numArray) {
  let subsequenceArr = subsequenceArray(numArray)
  return subsequenceArr.reduce((total, subArr) => total + subArrTotal(subArr), 0);
}

/* LS Solution
function sumOfSums(numbers) {
  let sumTotal = 0;
  for (let idx = 1; idx <= numbers.length; idx++) {
    sumTotal += numbers.slice(0, idx).reduce((accum, num) => accum + num);
  }
  return sumTotal;
}
*/

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35 (1) + (1 + 2) + (1 + 2 + 3) + (1 + 2 + 3 + 4) + (1 + 2 + 3 + 4 + 5)
