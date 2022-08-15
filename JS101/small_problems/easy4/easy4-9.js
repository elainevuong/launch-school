/* Letter Counter (Part 2)
Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

Examples:

Copy Code
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}
*/

/*
  Process the Problem + Examples
  - Input - a string
  - Output - an Object of Word Length Counters
           - {Length of the Word: Number of Occurrences }
  - Explicit Rules
      - a Word consists of only letters in a consecutive sequence, separated by a space
  - Implicit Rules
      - Edge Case - if given empty string, return an empty object
      
  Data Structure
  - String => Object { Length of the Word: Number of Occurrences }
    String -> letterString that consists only of letters, removing all non-letter characters
    letterString -> Array of Words (wordArray)
    wordArray -> Object
    
  Algorithm
  0) Edge Case - if the string is empty, return an empty object
  1) String -> letterString - Create a string consisting only of the alphabetical letters from a-z and        A-Z, including spaces from the original input String
  
     - a - Create an empty string to collect only the letters and spaces from the input String
     - Iterate through each character in the input String, checking to see if it is a letter or space
        - If it is a letter or space, concatenate it to the string created in Step a
  
  2) letterString -> convert it into a wordArray, which is separated by spaces
  
  3) wordArray -> iterate through it, obtain the length of each word, and use it as a key in the Object
     - Create a new objectLengthCounter, that will consists of keys that are the length of each word,          and values that are the number of occurrences of that word length
        - Iterate through each word in the wordArray
          - Check to see if the current word in the wordArray appears as a key in the objectLengthCounter
              - If it already appears as a key, increment the value by 1
              - Otherwise, set its value to 1
      - Return the objectLengthCounter
*/

const letterOrSpace = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '

function isLetterOrSpace(character) {
  return letterOrSpace.includes(character);  
}


function wordSizes(string) {
  let objectLengthCounter = {}
  
  if (string.length === 0) return objectLengthCounter;
  
  let letterString = ''
  
  string.split('').forEach((char) => {
    if (isLetterOrSpace(char)) {
      letterString += char;
    }
  });
  
  let wordArray = letterString.split(' ')
  
  wordArray.forEach((word) => {
    let key = word.length
    objectLengthCounter[key] = objectLengthCounter[key] + 1 || 1;
  });
  
  return objectLengthCounter;
  
}

// EV Solution
function cleanString(string) {
  return string.toLowerCase().split(' ').map(word => {
    return word.split('').filter(char => isLetter(char)).join('');
  }).join(' ');
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function wordSizes(string) {
  let lengthCount = {};
  if (string === '') return lengthCount;
  string = cleanString(string);
  string.split(' ').forEach(word => lengthCount[word.length] = lengthCount[word.length] + 1 || 1);
  return lengthCount;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}