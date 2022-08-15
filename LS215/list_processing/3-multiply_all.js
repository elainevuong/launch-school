/*
Write a function that takes two array arguments, each containing a 
list of numbers, and returns a new array containing the products of 
all combinations of number pairs that exist between the two arrays. 
The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.
*/

function multiplyAllPairs(arr1, arr2) {
  let allPairs = arr1.map(elem1 => {
    return arr2.map(elem2 => {
      console.log(elem1, elem2);
      return elem1 * elem2;
    });
  }).flat().sort((a, b) => a - b);
  return allPairs
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]


/*
if the callback is < 0, a comes BEFORE b
if the callback is > 0, b comes BEFORE a

// Simplified - Numeric Sorting - Ascending (a - b for Ascending)
[2, 11, 9, 4, 107, 21, 1].sort((a, b) => a - b);
// if a < b, then a - b returns a number less    than 0 -> A COMES BEFORE B (sorts ascending)
// if a > b, then a - b returns a number greater than 0 -> B COMES BEFORE A (sorts ascending)

// Simplified - Numeric Sorting - Descending (b - a for Descending)
[2, 11, 9, 4, 107, 21, 1].sort((a, b) => b - a);
// if a < b, then b - a returns a number greater than 0 -> B COMES BEFORE A (sorts descending)
// if a > b, then b - a returns a number less    than 0 -> A COMES BEFORE B (sorts descending)
*/