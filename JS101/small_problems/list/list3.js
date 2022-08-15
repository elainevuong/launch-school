/* 
Multiply All Pairs
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.
*/

/*
Process the Problem
- Input - two array arguments
- Output - a new array, containing a list of numbers containing the products of all combinations of numbered pairs that exist between the two arrays
         - sort the new array in ascending numerical order
    
Data Structure
- Create a new array to capture the combination of number pairs
- For each element in the first array
  - With the current element, multiply it with the first element in the second array. Add the result to the new array that will capture the combination of number pairs
  - Repeat this for all elements in the second array

- Sort the numbers in the new array and return it
*/

function multiplyAllPairs(arr1, arr2) {
  let newArr = []
  
  arr1.forEach((elem1) => {
    arr2.forEach((elem2) => {
      newArr.push(elem1 * elem2);
    });
  });
  
  return newArr.sort((a, b) => a - b);
  
}


console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

