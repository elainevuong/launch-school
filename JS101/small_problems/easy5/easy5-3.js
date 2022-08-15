/* Halvsies
Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

Examples:
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
*/

/*
Process the Problem
- Input - Array
- Output - Array that contains two elements
         - First Element -> an array of the first half of the original array
         - Second Element -> an array of the second half of the original array
- Explicit Rules
  - Odd Number - if the original element contains an odd number of elements, place the middle element in the FIRST HALF array

- Implicit Rules
  - Edge Case - Empty Array - if the input is an empty array, return [[], []]
  
Examples/Test Cases
- halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
  First Half - 0 -> 2
  Second Half - 3 -> 4
  


Data Structures
  - Input - Array
  - Output - [ [ First Half ] , [ Second Half] ]

Algorithm
  - Edge Case
    - Empty Array - if the input is an empty array, return [[], []]
    - Array Length 1 - if the input is an array of length one, return [ [ arr ], [] ]
  
  - Determining Index Number of the End of the First Array
    - If the Array is an odd length, include the middle number in the first half
    - Else, the Array is an even length, and the first/second halves contain the same number of elements
  
  - Index 0 to Index (Half - 1) => First Array
  - Index (Half - 1) to End => Second Array 
  
  - Main Algorithm
    - Check for Edge Cases
    - Create an new array
      - Add the first half
      - Add the second half
    - Return the array
*/

function halvsies(array) {
  if (array.length === 0) return [[], []];
  if (array.length === 1) return [array, []];
  let halfpoint = Math.ceil(array.length / 2);
  return [ array.slice(0, halfpoint), array.slice(halfpoint) ]
}


function halvsies(array) {
  if (array.length === 0) return [[], []];
  if (array.length === 1) return [array, []];
  
  let midIndex = middleIndex(array);
  
  let firstHalf = array.slice(0, midIndex);
  let secondHalf = array.slice(midIndex);
  
  return [ firstHalf, secondHalf]
  
  
}

function middleIndex(array) {
  return Math.ceil(array.length / 2);
}
  

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
