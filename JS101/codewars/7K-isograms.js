/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

/*
Process the Problem
- Input - a word, that contains only letter
- Output - a Boolean value that indicates if it is an isogram
- Explicit Rules
  - Empty String - return true, it is an isogram
  - Case Sensitive - moOse is NOT an isogram
  
Data Structure
Object { letter: count }
Values Array - if every element in the array is 1, return true; otherwise return false

Algorithm
- Given a Word that is composed of alphabetic characters
- If the Word is an empty string, return true // Edge Case
- Create an Object to keep track of letters and their occurrence number
- Iterate through each character
  - Convert the character to lowercase
  - If the Object[letter] exists, increment its value by 1
  - Otherwise if Object[letter] does NOT exist, set its value to 1
- Given the Object { letter: count }, create an Array of the Object's Values
  - if every value in the Values Array is 1; return true; otherwise return false
  
*/


function isIsogram(str){
  if (str.length === 0) return true; // empty string edge case
  
  let letterCount = {}
  
  str.split('').forEach((elem) => {
    elem = elem.toLowerCase();
    letterCount[elem] = letterCount[elem] + 1 || 1;
  });
  
  return Object.values(letterCount).every((elem) => elem === 1);
}