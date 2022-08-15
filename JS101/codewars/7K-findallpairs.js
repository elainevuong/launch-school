/* 
You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
*/

/*
Process the Problem
- Input - an Array of Integers
- Output - return an Integer, which is the Number of pairs
- Explicit Test Cases
  - If the Array is Empty - return 0
  - If the Array contains 1 value - return 0
  - If there are more Pairs of a Certain Number, count each pair only once: [0, 0, 0, 0] -> 2 pairs
  
Data Structure
- Object { number: count }
  - Round Down to the Nearest Integer, the Result of taking Count / 2 

Algorithm
1) Given an Array of Integers, iterate through the Array of Integers, and create an Object that keeps track of the Number : Count
2) Return the Values of the Object in an Array, Create a Total and initialize it to 0
   - For each of the Values compute the (Value // 2); add it to the Total
3) Return the Total
*/

function duplicates(array) {
  let numCount = array.reduce((obj, elem) => (obj[elem] = obj[elem] + 1 || 1, obj), {});
  return Object.values(numCount).reduce((total, elem) => total + Math.floor(elem / 2), 0);
}