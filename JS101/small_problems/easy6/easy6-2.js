/* 
Double Char (Part 2)
Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

Examples:
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
*/

/*
Process the Problem & Examples/Test Cases
- Input - a string
- Output - a new string, with every consonant character doubled
- Explicit Rules
  - Vowels - are NOT doubled
  - Digits - are NOT doubled
  - Punctuation - is NOT doubled
  - Whitespace - is NOT doubled
- Implicit Rules
  - Empty String - is an empty string is provided as input, return an empty string

Data Structure
- Input - string
- Output - string
- For each of iteration, consider using an array as an intermediary step

Algorithm
- Edge Case Check -> if the string is empty, return an empty string

- Initialize a new array to collect the Doubled Character Array
- Iterate through each of the characters in the input String
  - For each of the characters, determine if the character is a consonant
      - For ease of computation -> convert the character to a lowercase
      - Check to see if the letter is a lowercase consonant
        - If it IS, double the ORIGINAL character and add it to the Doubled Character Array
        - If it IS NOT, add the ORIGINAL character to the Doubled Character Array
- Return the Doubled Character Array as a string

*/
function doubleConsonants(str) {
  if (str === '') return str;
  
  let doubledCharArr = []
  
  str.split('').forEach((char) => {
    if (isConsonant(char)) {
      doubledCharArr.push(char.repeat(2));
    } else {
      doubledCharArr.push(char);
    }
  });
  
  return doubledCharArr.join('')
}

function isConsonant(char) {
  char = char.toLowerCase()
  let consonants = 'bcdfghjklmnpqrstvwxyz'
  return consonants.includes(char);
}
           

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

function isVowel(letter) {
  return 'aeiou- !4'.includes(letter);
}

function doubleConsonants(string) {
  let result = '';
  if (string === '') return result;
  for (let letter of string) {
    if (isVowel(letter)) {
      result += letter;
    } else {
      result += letter + letter;
    }
  }
  return result;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""