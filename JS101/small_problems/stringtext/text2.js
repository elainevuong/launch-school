/* 
Delete Vowels
Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.
*/

/*
Process the Problem
Input - an array of strings
Output - an array of the same string values, but with all vowels removed
Implicit Rules
  - Y - y is NOT considered a vowel
  - Case Insensitive - 'A' and 'a' are both considered vowels

Data Structure
- an array of strings => an array of the same string vowels, but with all vowels removed
- the output array has the same number of elements as the original string -> transformation

Algorithm
1) isVowel -> helper function
- Given a character, determine if it is a vowel
  - Capture all the lowercase vowels 'aeiou'
  - Force the character to a LowerCase
  - Determine if the Character is in the lowercase vowels
  - Return true if it IS a vowel, false otherwise

2) Removing all Vowels from a String
- Create a new empty String to capture non-Vowel Characters
- Given a String, iterate through each character of the string
  - If the character is a Vowel, continue
  - If the character is NOT a Vowel, add it to the non-Vowel Characters String
- Return the non-Vowel Characters String

3) Main Algorithm
- Given an Array of Strings
- Create a new Array to capture the non-Vowel Strings
  - Iterate through the strings 
  - For each string, remove all Vowels from the String, and add the returned non-Vowel Characters String to the new Array to capture the non-Vowel Strings
- Return the non-Vowel Strings Array
*/
function isVowel(char) {
  return 'aeiou'.includes(char.toLowerCase())
}

function nonVowelString(string) {
  return string.split('')
               .filter((char) => !isVowel(char))
               .join('');
  
}

function removeVowels(strArr) {
  return strArr.map((string) => nonVowelString(string));  
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]


/*
console.log(isVowel('a')); // true
console.log(isVowel('A')); // true
console.log(isVowel('F')); // false

console.log(nonVowelString('abc'));    // 'bc'
console.log(nonVowelString('frog'));   // 'frg'
console.log(nonVowelString('FRaNkz')); // 'FRNkz'
*/