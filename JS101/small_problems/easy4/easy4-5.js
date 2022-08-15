/* Palindromic Strings (Part 2)
Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
*/

/* Process the Problem
   - Input - a String
   - Output - a Boolean
   - Explicit Rules - the Boolean returned should be true if the string is a palindrome
                    - the function should be case insensitive (i.e. Madam)
                    - the function should ignore all non-alphanumeric characters (i.e.                       Madam, I'm Adam)
                    - the string can be a mixture of alphanumeric characters and still                       be a palindrome (i.e. 356a653)
  
  Examples/Test Cases
  - Case does not matter, only alphanumeric values matter
  
  Data Structure
  - Input is a String and the Output is a Boolean -> want to think about converting the     String to an array to make use of the Array.prototype.reverse() method
  
  Algorithm
  A) Valid Alphanumeric Character Codes
     - Determine the character codes of 'a' and 'z'
     - Determine the character codes of 'A' and 'Z'
     - Determine the character codes of '0' and '9'
     
     Given a character as input, obtain the character code for the input
     If the character code of the input is within the charcter code ranges of:
      a-z OR A-Z OR 0-9, then this character is alphanumeric. 
  
  B) Main Algorithm
  1) Given a String as input, convert all the characters in the String into an array of          characters (strArr)
  2) Create a new Array that will consist of only (alphaNumArr)
      - characters from strArr that are alphanumeric
      - all characters will be LowerCase
  3) For each character in the strArr, iterate through each character and check to see 
     if the charcter is alphanumeric (see Step A)
        - convert the character to lowercase and add it to the alphaNumArr
  4) At this point, the alphaNumArr consists of only alphanumeric characters, and all            characters are lowercase. 
     a- Create a copy of the alphaNumArr, reverse it, and convert it to a string
     b- Convert the alphaNumArr to a string
  5) Compare the results of step-a and step-b
*/

function isAlphaNum(char) {
  // lowercase
  let lowerA = 'a'.charCodeAt();
  let lowerZ = 'z'.charCodeAt();
  
  // uppercase
  let upperA = 'A'.charCodeAt();
  let upperZ = 'Z'.charCodeAt();
  
  // numeric
  let num0 = '0'.charCodeAt();
  let num9 = '9'.charCodeAt();
  
  char = char.charCodeAt();
  
  return (char >= lowerA && char <= lowerZ) || 
         (char >= upperA && char <= upperZ) || 
         (char >= num0   && char <= num9)
}


function isRealPalindrome(string) {
  
  let strArr = string.split('')
  let alphaNumArr = []
  
  strArr.forEach((char) => {
    if (isAlphaNum(char)) {
      alphaNumArr.push(char.toLowerCase());
    } 
  });  
  
  let alphaNumString = alphaNumArr.join('');
  let revAlphaNumString = alphaNumArr.reverse().join('');

  return (revAlphaNumString === alphaNumString)
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

// LS Solution
function isRealPalindrome(string) {
  string = removeNonLetterNumbers(string.toLowerCase());
  return isPalindrome(string);
}

function isPalindrome(string) {
  let revString = string.split('').reverse().join('');
  return revString === string
}

function removeNonLetterNumbers(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx]) || isNumber(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

// EV Round 2
function isRealPalindrome(string) {
  let newStr = ''
  string.toLowerCase().split('').forEach(char => {
    if (isAlphaNum(char)) {
      newStr += char;
    }
  });
  return newStr === newStr.split('').reverse().join('');
}

function isAlphaNum(char) {
  return (char >= 'a' && char <= 'z') || (char <= '0' && char >= '9')
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false