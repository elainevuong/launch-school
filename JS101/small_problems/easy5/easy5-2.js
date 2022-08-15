/* Combining Arrays
Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

Example:

Copy Code
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
*/

/*
Process the Problem
- Input - two arrays
- Output - one array, containing the union of the values from both arrays. There should be NO duplication of values in the returned array, even if there are duplicates in the original arrays
- Explicit Rules 
    - It must be a UNION, no duplicate values allowed
    - Must return a new array

Examples/Test Cases

Data Structure
  - Array Iteration

Algorithm
  1) Create a new array to capture the result array
  2) Iterate through the items in the first array argument
    - For each item, check to see. if the item is in the result array
      - If it IS IN the result array, move to the next item
      - If it is NOT IN the result array, add it to the result array
  3) Repeat step 2 for items in the second array argument
  4) Return the new array
*/
function union(arr1, arr2) {
  let unionArr = []
  
  arr1.forEach((elem) => {
    if (!unionArr.includes(elem)) {
      unionArr.push(elem);
    }
  });
  
  arr2.forEach((elem) => {
    if (!unionArr.includes(elem)) {
      unionArr.push(elem);
    }
  });
  
  return unionArr
}

// EV Solution V2
function union(arr1, arr2) {
  let unique = {};
  [...arr1, ...arr2].forEach(elem => unique[elem] = 1);
  return Object.keys(unique).map(strNum => Number(strNum));
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]