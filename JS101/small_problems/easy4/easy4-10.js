/* Letter Swap
Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

Examples:

Copy Code
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
*/

/* Process the Problem
   - Input - string of words separated by spaces
   - Output - string of words, with first and last letters of every word swapped
   - Explicit Rules 
       - you can assume that every word contains at least ONE letter
       - the string will ALWAYS contain at least one word
       - assume that each string contains NOTHING but words and spaces
       - no leading, trailing, or repeated spaces
   - Clarification
       - Is non-letters included in a 'word'? What is the formal definition of a word? 
  
  Examples/Test Cases
  
  Data Structure
   - String -> Array of Words -> Go Into each Word, and swap the first and last letters -> Return that word to a New Array -> Join that Word Array back into a String
   
   Algorithm
   1) Swap First and Last Letters
      - Given a Word
        - If the word.length is 1, return the word // Edge Case for one letter words
        - Create a reversedWord Array to capture the word for swapped letters
        - Split the word into individual characters
          - Add the last character of the word to be the first element of the reversedWord Array
          - Add the middle characters of the word to be the middle elements of the reversedWordArray
          - Add the first character of the word to be the last element of the reversedWord Array
        - Convert the reversedWord Array into a string and return it
  
    2) Main Function
      - Given an string of words separated by spaces
      - Convert the string of words into an array of words
      a - Create an array that will capture the new string to be returned, which will have all words               with their first/last letters swapped
        - Iterate through each word in the word array, and pass it through the 'Swap First and Last               Letters', take that return output and add it to the new Array that was created in step a
      - Rejoin the array, convert it back to a string, and return that string
*/

function swapFirstLast(word) {
  if (word.length === 1) return word;
  
  let reversedWord = []
  let charArr = word.split('')
  
  reversedWord.push(charArr[charArr.length - 1]);
  reversedWord.push(...charArr.slice(1, -1));
  reversedWord.push(charArr[0]);
  
  return reversedWord.join('')
  
}

function swap(string) {
  let wordArray = string.split(' ');
  
  let revWordArray = []
  
  wordArray.forEach((word) => {
    let revWord = swapFirstLast(word);
    revWordArray.push(revWord);
  });
  
  return revWordArray.join(' ')
  
}

// EV Solution Round 2
function swapWord(word) {
  if (word.length === 1) return word;
  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

function swap(string) {
  return string.split(' ').map(word => swapWord(word)).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
   
   
  