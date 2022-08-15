/* Counting Up
Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

Examples:

Copy Code
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
*/

/*

Process the Problem / Examples
Input - a positive integer
Output - an array containing all integers between 1 and the argument (INCLUSIVE) in ascending order
Explicit Rules - the argument will ALWAYS be a positive integer

Data Structures
- Number -> represents the LAST value in the array
- Initialize a Start variable to the number value 1
- Initializze an empty array to collect the sequence result
- 1) Add Start to the Sequence Array
  - 2) check to see if Start === Number
    - 3) If Start === Number, return the Sequence Array
  - 4) If not, increment Start by 1 
    - Repeat Steps 1 - 4 until the Sequence Array is returned
*/

// while loop 
function sequence(number) {
  let sequence = [];
  
  let start = 1
  while (true) {
    sequence.push(start)
    if (start === number) return sequence;
    start += 1
  }
}

// for loop
function sequence1(number) {
  let sequence = [];
  
  for (let start = 1; start <= number; start++) {
    sequence.push(start);
  }
  return sequence;
}

// forEach
function sequence2(number) {
  let arr = []
  arr.length = number
  
  arr.fill(1, 0, number)
  
  let newArr = []
  
  arr.forEach((_, index) => {
    newArr.push(index + 1);
  });
  
  return newArr;
}

// map
function sequence3(number) {
  let arr = []
  arr.length = number
  
  arr.fill(1, 0, number)
  
  return arr.map((_, index) => index + 1); 
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

console.log(sequence1(5));    // [1, 2, 3, 4, 5]
console.log(sequence1(3));    // [1, 2, 3]
console.log(sequence1(1));    // [1]

console.log(sequence2(5));    // [1, 2, 3, 4, 5]
console.log(sequence2(3));    // [1, 2, 3]
console.log(sequence2(1));    // [1]

console.log(sequence3(5));    // [1, 2, 3, 4, 5]
console.log(sequence3(3));    // [1, 2, 3]
console.log(sequence3(1));    // [1]

/* 

let sequence = (num) =>[...Array(num)].map((_, idx) => idx + 1);
[...Array(num)] the Array constructor creates a new array with the number of values specified in its argument. These are initially empty values and the array appears as: [ <5 empty items> ] if the input number is 5. Using the ... spread operator makes an array that appears as: [undefined,undefined,undefined,undefined,undefined] if the input number is 5.

Using map, we set each element to index + 1. We don't need the first argument of the current element, so we leave that as an underscore, implying it's not needed. If we were to simply leave it blank, javaScript would interpret idx as the current value argument, instead of the index argument.

for an input of 5... iteration 1: map sets the first value to idx(0) + 1 =1 iteration 2: map sets the second value to idx(1) +1 =2 iteration 3: map sets the third value to idx(2) +1 =3 iteration 4: map sets the fourth value to idx(3)+1 =4 iteration 5: map sets the fifth value to idx(4) + 1 =5

There are no more elements, since we set the number of elements in the array equal to the input number, so map is done its job and we can return the whole expression.
*/