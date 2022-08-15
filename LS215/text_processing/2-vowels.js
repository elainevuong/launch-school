/*
Write a function that takes an array of strings and returns an 
array of the same string values, but with all vowels (a, e, i, o, u) removed.
*/

function removeVowels(strArr) {
  return strArr.map(word => word.replace(/[aeiou]/gi, ''));
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]