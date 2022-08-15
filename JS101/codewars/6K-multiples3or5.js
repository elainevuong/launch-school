/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

/*
Process the Problem
- Input - a natural number
- Output - the sum of all the multiples of 3 or 5 BELOW the number passed in
- Explicit Rules 
  - returns the sum of all the multiples of 3 or 5 below the number passed in
  - Negative Number - return 0
  - Multiple of 3 AND 5 - Only count it once

Data Structure
- Store the multiples of 3 and 5 as the keys of an Object
- Sum up the Total Value of the Array keys

Algorithm
- Helper Function - Multiple of 3 or Multiple of 5
  - Given an input that is a number
    - If the Number / 3 === 0 Or the Number / 5 === 0, return true

- Main Algorithm
- If the number is negative, return 0

- Create an empty Object that will capture the multiples of 3 of 5. 
- Starting from 1, up to but not including the provided number
  - For each Number, if it is a multiple of 3 or a multiple of 5
    - Add it as a Key to the empty Object. Initialize it to an arbitrary value
- Return the sum of the Keys Array of the Object

*/

function solution(number){
  if (number < 0) return 0;
  let objSolution = {};
  for (let num = 1; num < number; num++) {
    if ((num % 3 === 0) || (num % 5 === 0)) {
      objSolution[num] = 1;
    }
  }
  
  return Object.keys(objSolution).reduce((accum, elem) => accum + Number(elem), 0);
  
}

/* 
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}
*/