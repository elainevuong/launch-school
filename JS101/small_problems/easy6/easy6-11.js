/* Write a function that takes an Array as an argument and reverses its elements in place. That is, mutate the Array passed into this method. The return value should be the same Array object.

You may not use Array.prototype.reverse(). */

/*
Process the Problem
- Input - an array
- Output - the same array, with the elements reversed in place
         - the return value must be the SAME Array object
         
Data Structure/Algorithm
Swapping -> to reverse the array [1, 2, 3, 4, 5]
  - We want to swap the value stored in Index[0] with the value stored in Index[2]
  - Store the value of Index[0] in a Temporary Variable
  - Reassign Index[0] to the value stored in Index[2]
  - Reassign Index[2] to the value stored in the Temporary Variable
How many swaps to perform?
  - If the array is 5 elements, we want to perform 2 swaps
    - Swap Index[0] and Index[4]
    - Swap Index[1] and Index[3]
  - If the array is 6 elements, we want to perform 3 swaps [1, 2, 3, 4, 5, 6]
    - Swap Index[0] and Index[5]
    - Swap Index[1] and Index[4]
    - Swap Index[2] and Index[3]
    
Algorithm
- Compute the Number of Swaps required
  - This is computed as the value of the Array.length / 2, rounded down
- Initialize a variable called step, and assign it to a value of 0
  - Starting at Index[0 + step] and Index[Array.length - step]
  - Swap the Values Using a Temporary Variable
  - Once swapped, increment the value stored in step
  - Repeat this while step < Number of Swaps
- Return the Array
*/

// EV
function reverse1(array) {
  let numSwaps = Math.floor(array.length / 2)
  let step = 0
  
  while (step < numSwaps) {
    let tmp = array[0 + step]
    array[0 + step] = array[array.length - 1 - step]
    array[array.length - 1 - step] = tmp
    step += 1
  }
  
  return array;
}

// LS Solution
function reverse(array) {
  let leftIndex = 0
  let rightIndex = array.length - 1
  
  while (leftIndex < array.length / 2) {
    [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];
    leftIndex += 1
    rightIndex -= 1
  }
  return array;
}



let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result);                   // logs [4,3,2,1]
console.log(list === result);          // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1);                  // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1);        // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2);                  // logs  ["abc"]
console.log(list2 === result2);        // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3);                  // logs []
console.log(list3 === result3);        // logs true