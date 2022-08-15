/* Combine Two Lists
Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.

Example:

Copy Code
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
*/

/*
Process the Problem
- Inputs - two arrays, with the same number of elements. Arrays are NOT empty.
- Output - a new array that contains all elements from both array arguments, with each element taken in alternation
- Explicit Rules - arrays are non-empty and have the same number of elements

Data Structures
- Array Indexing

Algorithm
- Create a new array that will contain the interleaven arrays
- Initialize an index variable to the value of 0
- While the index variable is less than the length of either array:
  - Add the current element from both arrays to the interleaven array result
  - Increment the index variable
- Return the interleaven array
*/

// while Loop
function interleave(arr1, arr2) {
  let interleavenArr = []
  let index = 0
  
  while (index < arr1.length) {
    interleavenArr.push(arr1[index], arr2[index]);
    index += 1
  }
  
  return interleavenArr;

}

// forEach
function interleave1(arr1, arr2) {
  let interleavenArr = []
  
  arr1.forEach((elem, index) => {
    interleavenArr.push(arr1[index], arr2[index]);
  });
  
  return interleavenArr;
  
}

// map
function interleave2(arr1, arr2) {
  let interleavenArr = arr1.map((_, index) => {
    return [arr1[index], arr2[index]]
  });
  return interleavenArr.flat();
}

// reduce
function interleave3(arr1, arr2) {
  return arr1.reduce((newArr, _, index) => {
    newArr.push(arr1[index], arr2[index])
    return newArr
  }, []);
}


console.log(interleave([1, 2, 3], ['a', 'b', 'c']));     // [1, "a", 2, "b", 3, "c"]
  
console.log(interleave1([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

console.log(interleave2([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

console.log(interleave3([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

// EV Final
function interleave(arr1, arr2) {
  let newArr = [];
  arr1.forEach((_, index) => newArr.push(arr1[index], arr2[index]));
  return newArr;
}  

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]