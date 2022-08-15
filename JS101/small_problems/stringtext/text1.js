/* Uppercase Check
Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.
*/

/*
Process the Problem
Input - a string literal
Output - a Boolean, if all of the ALPHBETIC characters are uppercase
Explicit Rules
  - Ignore Punctuation - if punctuation exists, IGNORE it
  - Ignore Numbers - if numbers exist, IGNORE it
Implicit Rules
  - Empty String - if an empty string is provided as input, return true

Examples

Data Structure/Algorithm
String 
EDGE CASE - is the string empty? 
 -> Process Characters [Array] 
  -> If Character is NOT alphabetic (i.e. number or punctuation) -> return true => ignore it
  -> Is Character Alphabetic?
    -> Character Uppercase? -> return true
    -> Character Lowercase? -> return false
*/
function isAlphabetic(char) {
  char = char.toLowerCase();
  return char > 'a' && char < 'z';
}

function charIsUpper(char) {
  return char > 'A' && char < 'Z';
}

function isUppercase(string) {
  if (string.length === 0) return true; // edge case to check for an empty string  
  
  return string.split('').every((char) => {
    if (!isAlphabetic(char)) return true
    return (charIsUpper(char))  
  }); 
}



console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true



function isUppercase1 (string) {
  return string.toUpperCase() === string;
}
/*
Discussion
The easiest way to solve this problem is to realize that the condition 
"all of the alphabetic characters...are uppercase" is true only if the 
string is not altered by converting it to all uppercase. Thus, all we 
need to is compare string with string.toUpperCase().
*/