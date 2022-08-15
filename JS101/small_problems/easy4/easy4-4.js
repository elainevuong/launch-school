/* 
Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
*/

/* Process the Problem
  - Input - a string
  - Output - a boolean, that returns true if the argument is a palindrome
  - Explicit Rules
      - Palindrome - a palindrome is a string that is read the same forwards and               backwards. Case matters and all characters matter (i.e. 'madam i'm adam 
        is NOT a palindrome, and Madam is NOT a palindrome)
      - Examples of Palindromes: dad, mom, madam, '356653'
  - Question - is an empty string a palindrome?
  - Question - how should leading and trailing spaces be treated? for example, is 
    '  madam' a palindrome or not?
  
  Examples/Test Cases
  - see above - string numbers can ALSO be palindromes
  
  Data Structure
  - We may want to consider usage of an array, because the array data type has access
    to the Array.prototype.reverse() method that may be useful
  - Input - starts off with a string, and our Output returns a Boolean
  
  Algorithm
  1) Given a string as input, create a copy of the string and reverse it
  2) Return the boolean that arises when we compare the reversed string with the original string for strict equality
*/

function isPalindrome(str) {
  let revStr = str.split('').reverse().join('');
  return revStr === str
}

const isPalindrome = string => string.split('').reverse().join('') === string;

console.log(isPalindrome('olga'));                // => false
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true