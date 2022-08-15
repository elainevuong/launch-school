/* Sequence Count
Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

Examples:
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
*/

/*
Process the Problem & Examples / Test Cases
- Input - two integers
  - Int 1 - count
  - Int 2 - starting number of the sequence
- Output - an array containing the same number of elements as the COUNT argument
  - the VALUE of each element should be a MULTIPLE of the starting number
- Explicit Rules
  - Multiple - what is a multiple? A multiple is the product result of one number multiplied by another number. For example, 56 is a multiple of 7, and 56 is a multiple of 8.
  - Count - the count argument will always be an integer greater than or equal to 0
  - Start Number - the starting number can be any integer, including negative numbers
  - Count === 0 - if the count is 0, the function should return an empty array


Data Structure
Input - two integers, the count and the starting number of the sequence
Output - an array containing the same number of elements as the COUNT argument, where the VALUE of each element is a MULTIPLE of the starting number

Algorithm
Edge Case - if the count argument is zero, return an empty array

Create a result array to capture the multiples
- Initialize a counter variable and assign it a value of 1
  - While the value of the counter variable is less than or equal to the value of count
    - Compute the value of the starting number x the counter variable, and add the computed number to the multiples result array
    - Increment the counter variable
  
- Return the result array
*/

// while loop solution
function sequence(count, startNum) {
  if (count === 0) return []
  
  let counter = 1;
  let multipleArr = [];
  
  while (counter <= count) {
    multipleArr.push(counter * startNum);
    counter += 1;
  }
  
  return multipleArr;
  
}

// reduce solution
function sequence1(count, startNum) {
  return [...Array(count)].reduce((arr, _, index) => {
    arr.push(startNum * (index + 1));
    return arr;
  }, []);
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

console.log(sequence1(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence1(4, -7));         // [-7, -14, -21, -28]
console.log(sequence1(3, 0));          // [0, 0, 0]
console.log(sequence1(0, 1000000));    // []

