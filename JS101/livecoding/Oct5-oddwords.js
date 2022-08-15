/*
Process the Problem
Input - a string of words
Output - a new string, with all the odd-length words reversed and all vowels removed. even-length words unchanged

Rules
- What is a Word - a word is a sequence of consecutive alphabetic letters separated by exactly one space
- Punctuation - no punctuation
- Empty String - return an empty string

Data Structure
- Split the Words into an Array 

Algorithm
1) Split the string into an Array of Words
2) Iterate through the Array of Words
  - If the word.length is odd
    - remove all the vowels
    - reverse the word
      - Return the Word and add it to the New Array
  - If the word.length is even
    - Return the Word and add it to the New Array
3) With the new returned Array, convert it to a string and add back in the spaces

*/
function removeVowels(word) {
  let vowels = 'aeiouAEIOU'
  for (let index = 0; index < vowels.length; index++) {
    word = word.replaceAll(vowels[index], '');
  }
  return word;
}

function reverseOdd(string) {
  return string.split(' ')
               .map((word) => {
    if (word.length % 2 === 1) {
      word = removeVowels(word).split('').reverse().join('');
    } 
    return word;
  }).join(' ');
}


console.log(reverseOdd("Bananas")); // returns "snnB"
console.log(reverseOdd("One two three four")); // returns "n wt rht four"
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length")); // returns "Make sure y only rvrs wrds of dd length"
console.log(reverseOdd("")); // returns ''