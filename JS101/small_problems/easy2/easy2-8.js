// Odd Lists

/* Write a function that returns an Array that contains every other element of an 
Array that is passed in as an argument. The values in the returned list should 
be those values that are in the 1st, 3rd, 5th, and so on elements of the argument
Array. 

function oddities(arr) {
  let newArray = []
  if (arr.length < 1) return newArray; // break for empty array
  
  let index = 0
  while (index < arr.length) {
    newArray.push(arr[index]);
    index += 2
  }

  return newArray;
}

// LS Solution
function oddities(array) {
  let oddElements = [];
  for (let idx = 0; idx < array.length; idx += 2) {
    oddElements.push(array[idx]);
  }
  return oddElements;
}

function evens(array) {
  let evenElem = []

  for (let index = 1; index < array.length; index += 2) {
    evenElem.push(array[index]);
  }

  return evenElem;
}

//let oddities = (arr) => arr.filter((_, idx) => idx % 2 === 0);
*/

let oddities = (arr) => arr.filter((_, index) => index % 2 === 0);
let evens = (arr) => arr.filter((_, index) => index % 2 == 1);
/* The first argument for the callback in filter is the current value in the array, 
but since we don't actually need to know the value, we can essentially skip over 
that argument and represent it with an underscore ( _ ). We really only need to 
know the index ( idx ). If the remainder of dividing the index by 2 is 0 
(meaning its an even number), then we will return those values from our 
input array. We therefore return the element at index 0, 2,4,6 and so on. */

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(evens([2, 3, 4, 5, 6])); // logs [3, 5
console.log(evens([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evens(["abc", "def"])); // logs ['def']
console.log(evens([123])); // logs []
console.log(evens([])); // logs []