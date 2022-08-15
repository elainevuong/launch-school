/* 
In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.
*/

/*
Process the Problem
Input - word, consisting of all lowercase letters
Output - an Object, consisting of the { letter: count } with the letters in alphabetical order

Data Structure
1) Letters are Alphabetical - sort the letters first
2) Iterate Through Each Letter, and Count them

Algorithm
1. Given a Word, break it up into an Array of Characters
2. Sort the Array of Characters Ascending Alphabetically
3. Create an Empty Object to capture the Letter: Count
4. Iterate through the Array of Characters sorted Alphabetically
  -> If the Letter is in the Object, increment it by 1
  -> If the Letter is NOT in the Object, set it value to 1
5. Return the Object with the { Letter: Count}

*/
function letterCount(s){
  let letterCount = {}
  s.split('').sort().forEach((letter) => {
    letterCount[letter] = letterCount[letter] + 1 || 1;
  });
  return letterCount;
  
}

function letterCount1(s){
  return [...s].reduce((obj, letter) => (obj[letter] = obj[letter] + 1 || 1, obj), {});
}

console.log(letterCount1('hairy'));