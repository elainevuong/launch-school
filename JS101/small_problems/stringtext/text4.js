/* 
Capitalize Words
Write a function that takes a string as an argument and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.
*/

/*
Process the Problem
- Input - a string
- Output - a new string, with the first character of every word capitalized, and all subsequent character in lowercase
- Explicit Rules
  - What is a Word? -> a word is any sequence of non-whitespace characters
  - Punctuation - if there is any punctuation that appears, leave it as is. Punctuation cannot be     
                  'capitalized'. It is the first 'character' of every word that is capitalized, and
                  NOT the first letter - see the last example.

Data Structure
- String => Array (split by spaces) => Return a New String, with the first character of every word capitalized, and all subsequent characters in lowercase

Algorithm
1) Capitalize a Word
- Input: word
  - Create an Empty String to capture the capitalized word
  - 1) From the original word, uppercase the first letter of the word
  - 2) From the original word, lowercase the remaining word
  - Concatenate Part 1 and Part 2 together => and Return the Capitalized Word

2) Main Algorithm
- Given a String, split the string into an Array of Words
- Create a new array to capture the Capitalized Words
  - For each Word, transform it by returning the Capitalized Word
  - Add the Capitalized Word to the array of Capitalized Words
- Rejoin the  Array of Capitalized Words, and return it
*/

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function wordCap(string) {
  return string.split(' ')
               .map((word) => capitalize(word))
               .join(' ');  
}



console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'


/*
console.log(capitalize('word'));
console.log(capitalize('friend'));
console.log(capitalize('"quoted"'));
console.log(capitalize('829z'));
*/