/* How can you determine whether a given string ends with 
an exclamation mark (!)? */

function lastCharExclam(string) {
  return string.slice(-1) === '!';
}
/* the String.prototype.slice(start, end) can be used. Negative 
Arguments - can be provided to the slice() method. If a negative 
index is provided, the last character in the string is at 
position -1, and the penultimate character is located at 
position -2. Formally, the index position is computed as 
string.length + negative index.*/

function lastCharExclam1(string) {
  let lastIndex = string.length - 1
  return string[lastIndex] === '!';
}
/* the last index in a string can be represented as the (length
of the string - 1), because the indices of a string are zero-based.
For example, if a string consists of 6 characters, the index
position of the last character would be index position 5, which is the
length of the string (6) - 1 => 5.*/ 

function lastCharExclam2(string) {
  return string.endsWith('!')
}


let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
/*
console.log(lastCharExclam(str1));
console.log(lastCharExclam(str2));

console.log(lastCharExclam1(str1));
console.log(lastCharExclam1(str2));

console.log(lastCharExclam2(str1));
console.log(lastCharExclam2(str2));*/

let str = 'To be, or not to be, that is the question.'

console.log(str.endsWith('question.')) // true
console.log(str.endsWith('to be'))     // false
console.log(str.endsWith('to be', 19)) // true
console.log(str.endsWith('To be', 5))  // true
console.log(str.endsWith('e', 5))      // true