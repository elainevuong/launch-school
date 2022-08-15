/* Reverse It (Part 2)
Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

Examples:

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
*/

/*
Process the Problem
- Input - a string argument containing one or more words
- Output - a string containing the words from the string argument, with all five-or-more letter words having their letters in reerse order
- Explicit Rules
  - String Argument - will only consist of letters and spaces
  - Word - a word is a collection of letters separated by a single space

Examples/Test Cases

Data Structure
- String
  -> Array of Words
  -> Capture the Result in a New Array, which will be joined and returned as a string
    -> Length of the Words
      -> If the Word Length is greater than 5
        -> Break Out the Word into an Array of Characters, reverse the characters, and return the
           reversed string as an element to the array
      -> Else if the word length is less than 5
        -> Return the Word


Algorithm
- Given a string, separate the string into an array of words (Word Array)
- Create a new array, which will consist of the words that are greater than 5 letter being reversed, and words that are less than 5 letters being kept the same.
  - Iterate through the Word Array
    - If the length of the current word is greater than or equal to 5
      - Reverse the letters in the word and return it as an element to the new Array
    - Else if the length of the current word is less than 5
      - Return the element as it is to the new Array
- Convert the new array to a string, and return the string

*/
function reverseWords(string) {
  let wordArray = string.split(' ');
  return wordArray.map((word) => (word.length >= 5) ? reverseChar(word) : word) 
                  .join(' ');

}
    
function reverseChar(word) {
  return word.split('').reverse().join('');
}


console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"