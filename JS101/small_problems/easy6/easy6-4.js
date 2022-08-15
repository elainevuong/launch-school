/* 
Get The Middle Character
Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

Examples:

Copy Code
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
*/

/*
Process the Problem & Examples
- Input - non-empty string argument
- Output - a string that is the middle character(s) of the string
- Explicit Rules
  - if the string has an odd length, you should return exactly one character
  - if the string has an even lenth, you should return exactly two characters
- Implicit Rules
  - Even - centerOf('Launch');            // "un" [index positions 2 and 3]; length is 6
  - Odd - centerOf('Launch School');     // " "   [index position 6]; length is 13
  - If the string is only one character long, return the same string
  - Spaces COUNT as characters

- Data Structure / Algorithm
  - Edge Case - if the string is only one character long, return the same string
  - Determine if the length of the input string is odd or even
  - If it is even, return two characters
    - Start - Index position [string.length / 2 - 1]
    - End - Index position [string.length / 2 + 1]
  - If it is odd, return one character
    - Start - Index position [Floor of string.length / 2]
    - End - Index position [Start + 1]
*/

function centerOf(string) {
  // Edge Case Check
  if (string.length === 1) return string;
  
  let start;
  let end;
  console.log(`Length is ${string.length}`);
  
  if (string.length % 2 === 0) {   /// checks for even condition
    start = string.length / 2 - 1;
    end = start + 2;
  } else {
    start = Math.floor(string.length / 2);
    end = start + 1;
  }
  console.log(start, end);
  
  return string.slice(start, end);

}


console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
