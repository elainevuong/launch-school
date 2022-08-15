/*
Write a function that takes a string argument and returns true 
if all of the alphabetic characters inside the string are uppercase; 
otherwise, return false. Ignore characters that are not alphabetic.
*/

function isUppercase(string) {
  return [].every.call(string, char => char === char.toUpperCase());
}

function isUppercase(string) {
  return !/[a-z]/.test(string);
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

/*
This is one of the problems where you can take advantage of regex 
(regular expressions) to process strings. The solution uses a regex 
pattern with the RegExp.prototype.test method to determine if there 
are any lowercase letters in the string argument. The solution then 
uses the ! (logical NOT) operator to reverse the boolean return value 
so that the function returns false if there are any lowercase letters.
*/