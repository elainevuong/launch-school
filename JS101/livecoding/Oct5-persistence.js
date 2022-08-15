/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times 
you must multiply the digits in num until you reach a single digit.

Examples
persistence(39) === 3);  // because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit
persistence(999) === 4); // because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2
persistence(4) === 0);   // because 4 is already a one-digit number
persistence(25) === 2);   // because 4 is already a one-digit number

Process the Problem
Input - positive Integer can have multiple digits
Output - positive Integer that represents the number of times you must multiply the digits in num until you reach a single digit

Explicit Rules
- Multiplicative Persistence - the number of times you must multiply the DIGITS in num UNTIL you reach a SINGLE digit
- Single Digit - return 0

Output from the Digits -> used in the next function call
Length of the Outcome -> once that is 1, then 

Data Structures
Key Understanding - the previous outcome 

Algorithm
1. Determining the Multiplicative
	- Given a Positive Integer, convert it into a String, and then convert its Digits into an Array of Digits, and return the Product of its Digits

2. Main Algorithm
- Single Digit Edge Case - if the length of the Positive Integer (i.e. String Format of a Number and its Length) is 1, return 0 
- Initialize a Counter to 0 to represent the count of multiplicative occurrences
	- While the length of the Positive Integer (i.e. String format of a Number and take its Length) is greater than 1
		- Re-assign the Positive Integer to be its multiplicative
		- Increment the Counter
- Return the Counter
*/
// Elaine Algorithm
function multiplicative(number) {
  return String(number).split('').reduce((total, digit) => total * digit, 1);
}

function persistence(num) {
  if (String(num).length === 1) return 0; // Edge Case for Single Digit
  
  let multiCount = 0;
  while (String(num).length > 1) {
    num = multiplicative(num);
    multiCount +=1;
  }
  return multiCount; 
}

// Recursion
function persistence(num, count = 0) {
  if (String(num).length === 1) return count;
  num = String(num).split('').reduce((total, elem) => total * elem, 1); 
  return persistence(num, count += 1);
}

console.log(persistence(39) === 3);  // because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit
console.log(persistence(999) === 4); // because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2
console.log(persistence(4) === 0);   // because 4 is already a one-digit number
console.log(persistence(25) === 2);   // because 4 is already a one-digit number