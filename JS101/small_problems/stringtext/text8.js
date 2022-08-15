/* 
How long are you?
Write a function that takes a string as an argument and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.

You may assume that every pair of words in the string will be separated by a single space.
*/
/*
Process the Problem
Input - a string of words separated by spaces
Output - an array that consists of each word, followed by a space, and the word's length
       - Array Element = ['word #', 'word #', ...]
Explicit Rules
- Empty String - if the argument is an empty string, return an empty array
- No Argument - if no argument is passed, return an empty array

Data Structure
Input - String
Output - a new Array, that consists of the word and it's length

Algorithm
Given a String as Input
Split the String into an Array of Words
Create and Return a New Array that consists of:
  - Word, a space, and the Length of the Word

*/
function wordLengths(string = '') {
  if (string.length === 0) return [];  
  
  return string.split(' ')
               .map((word) => String(`${word} ${word.length}`));
}

/* LS Solution
function wordLengths(words) {
  if (arguments.length === 0 || words.length === 0) {
    return [];
  }

  return words.split(' ').map(function (word) {
    return word + ' ' + String(word.length);
  });
}

Note the Usage of argument.length to check for NO Arguments being passed
*/


console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths()); 