/* Letter Counter (Part 1)
Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

Examples:

Copy Code
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
*/

/* Process the Problem
  - Input - string
  - Output - an object that shows the number of words of different sizes 
           - { length_of_word: # of occurrences }
  - Explicit Rules
    - What is a Word - word consists of any sequence of NON-SPACE CHARACTERS
  - Implicit Rules
    - Include Beginning/Ending Non-Alphanumeric Characters Not Separated by Spaces -> in the string 
        => ('Hey diddle diddle, the cat and the fiddle!') 'diddle,' - 7; 'fiddle!' - 7
    - Empty String - return an empty object
  
    Examples / Test Cases
    
    Data Structure
    - String => Object
    - String => separate into words, and words are a sequence of non-space character => splitting my         string into an array of words, separated by spaces -> iterating through the array of words, 
        word.length property => and then using that to add to my Object!
    
    Algorithm
    0) Edge Case - if the string is empty, return an empty object
    1) String -> Array of Words
      - With the input string, split the string based on spaces, to create an array of words
    
    2) Iterating through Array of Words, Getting Length, Populating the Object
      - Create an Object Length Counter that will collect the length of the word, and count the             number of occurrences
      - Iterate through the Array of Words
        - For the current word, obtain the length property of the word
          - Determine if the length property of the word is a key in the Object Length Counter
              - If it is, increment the value of the key with that length property in the Object                         Length Counter by 1
              - Else - if it ISN'T a key in the Object Length Counter, then add the key with an initial                 value of 1 to the Object Length Counter 
      - Return the Object Length Counter
*/

function wordSizes(string) {

  let wordArray = string.split(' ')
  //console.log(wordArray);
  
  let objectLengthCounter = {}
  
  if (string == '') return objectLengthCounter;
  
  wordArray.forEach((word) => {
    if (Object.keys(objectLengthCounter).includes(String(word.length))) {
      objectLengthCounter[word.length] += 1;
    } else {
      objectLengthCounter[word.length] = 1;
    } 
  });
  
  return objectLengthCounter;
  
}

// EV Round 2
function wordSizes(string) {
  let wordCount= {};
  if (string === '') return wordCount;
  string.split(' ').forEach(word => {
    wordCount[word.length] = wordCount[word.length] + 1 || 1;
  });
  return wordCount;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}



console.log(wordSizes('Four score and seven.'));              // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
      
    
/*  More Elegant Object Check with ||

function wordSizes(string) {
  let wordArray = string.split(' ')
  let objectLengthCounter = {}
  
  if (string == '') return objectLengthCounter;
  
  wordArray.forEach((word) => {
    objectLengthCounter[word.length] = objectLengthCounter[word.length] + 1 || 1;
  });
  
  return objectLengthCounter;
 
}
*/