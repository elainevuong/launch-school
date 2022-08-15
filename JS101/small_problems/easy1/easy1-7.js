// Short Long Short

/* Write a function that takes two strings as arguments, determines 
the length of the two strings, and then returns the result of 
concatenating the shorter string, the longer string, and the 
shorter string once again. You may assume that the strings are of different lengths. */

// Ternary Operator for Assignment
function shortLongShort(str1, str2) {
  let short = (str1.length < str2.length) ? str1 : str2;
  let long = (str1.length < str2.length) ? str2 : str1;
  let answer = ''
  return answer + short + long + short;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"

// Auto String Conversion
function shortLongShort(str1, str2) {
  let short = (str1.length < str2.length) ? str1 : str2;
  let long = (str1.length < str2.length) ? str2 : str1;
  return short + long + short; 
//This solution takes advantage of the fact that JavaScript automatically 
// coerces string primitives to String objects when needed
}