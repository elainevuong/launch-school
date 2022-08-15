/* Palindromic Numbers
Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

Examples:

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
*/

/*
Process the Problems
- Input - integer
- Output - boolean -> returns true if the integer is a palindromic number
- Explicit Rules
  - Palindromic Number - is an integer argument that reads the same forwards and backwards
- Implicit Rules
  - Single Digit Integers - all integers that are single digits are palindromic
  
Examples/Test Case

Data Structures
- Integer -> Converting String -> Array -> Reversing the Array and Checking for Equality with the Original Array - Returning Boolean

Algorithm
- Given an Integer, convert the Integer to a String
- Convert the String into an Array of characters
- Create a copy of the 'Array of characters' and reverse it
- Return the value of comparing for equality the 'array of characters' and the 'reversed array of characters'
*/


function isPalindromicNumber(integer) {
  let strInteger = String(integer);
  let digitArr = strInteger.split('')
  let revDigitArr = digitArr.slice().reverse();
  
  return digitArr.join('') === revDigitArr.join('');
  
}


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

// EV Round 2
function isPalindromicNumber(num) {
  return String(num) === String(num).split('').reverse().join('');
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true