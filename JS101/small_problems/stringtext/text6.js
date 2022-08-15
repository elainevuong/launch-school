/* Staggered Caps (Part 1)
Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.
*/

/*
Process the Problem
- Input - a string
- Output - a string with a staggered capitalization scheme
- Explicit Rule
  - Every OTHER character, starting from the first, should be capitalized and followed by a lowercase or non-alphabetic character
  - Non Alphabetic Characters - should NOT be changed, but they SHOULD be counted as characters for determining when to switch between upper and lower case
  
Data Structure
- A String => Split into an Array of Characters => Uppercase every other character

Input: A String
- Split the String into an Array of Characters
- Create a new string to store the Staggered Caps String
  - If the Index of the current character is even, convert it to uppercase and add it to the Staggered Caps String
  - Otherwise, if the Index of the current character is odd, convert it to lowercase and add it to the Staggered Caps String
- Return the new string
*/

function staggeredCase(string) {
  let staggerStr = ''
  string.split('').forEach((char, index) => {
    if (index % 2 === 0) {
      staggerStr = staggerStr.concat(char.toUpperCase());
    } else {
      staggerStr = staggerStr.concat(char.toLowerCase());
    }
  });
  
  return staggerStr;
}


console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs