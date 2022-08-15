/* Find the Duplicate
Given an unordered array and the information that exactly one value in the array occurs twice (every other value occurs exactly once), determine which value occurs twice. Write a function that will find and return the duplicate value that is in the array.

Examples:

findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73
*/

/*
Process the Problem
- Input - an array of values, where exactly ONE VALUE occurs twice
- Output - the duplicate value
- Explicit Rules - there is only ONE VALUE that occurs twice

Data Structures
  - Array Iteration to Identify the Duplicate Value

Algorithm
  - Since the duplicate value occurs exactly once, the index position of the first occurrence is different than the index position of the last occurrence
  - Iterate through each element in the array
    For each element, check to see if the first occurrence index position and the last occurrence index position are the same
      If they are NOT the same, break out of the loop and return the element
      Otherwise, if they are the same, continue iteration
*/
function findDup(array) {
  for (let elem of array) {
    if (array.indexOf(elem) !== array.lastIndexOf(elem)) return elem
  } 
}



console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73

/* Uses an Object to store the count the occurrence of each Number, 
sorts the Object based on the Value of Counts from highest to lowest, 
returns the Key of the Highest Value Count (i.e. this Key was seen twice) */
function findDup(numArr) {
  let count = {};
  numArr.forEach(elem => count[elem] = count[elem] + 1 || 1);
  return Object.entries(count)
               .sort((a, b) => {
                  a = a[1];
                  b = b[1];
                  return b - a})
               .shift()[0];
}

/* Creates both the Keys and Values Array for the Count Object, 
obtains the Index of the Highest Value from the Values Array, 
uses that same Index to return the Key */
function findDup(numArr) {
  let count = {};
  numArr.forEach(elem => count[elem] = count[elem] + 1 || 1);

  let keys = Object.keys(count);
  let values = Object.values(count);
  let largestIndex = values.indexOf(Math.max(...values));
  return keys[largestIndex];
}