/* 
Alphabet Symmetry

Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]

Process the Problem
Input - An Array, where each element is a String of letters
Output - An Array, where each element is an Integer that represents the total Points of Alphabet Symmetry for that particular String

Explicit Test Cases
  - If the Letter Position within the String matches the Letter Position within the Alphabet, that counts as a Point of Symmetry
  - Case Insensitive - the Letter "A" and the letter 'a' both occupy position 1 in the Alphabet 
  - Input Constraints -  will consist of alphabet characters, both uppercase and lowercase. No spaces

Data Structure
- Create an Array to capture the Index Positions of the Letters

Algorithm
1) Reference String
  - Create a String  of lowercase alphabet letters, that will serve as the mapping for alphabet symmetry
  
2) Counting the Alphabet Symmetry Points in a String of Characters
  - Given a String of Characters, iterate through each String of characters
  - Initialize a Counter Variable and set it to the value 0
  - Take the Current Element and Index
    - Force the Current Element to Lowercase
    - Find the Current Element's CORRECT Position in the Alphabet
      - Compare the Current Element's Index Position to the CORRECT Position in the Alphabet
        - If the Current Element's Index Position matches the Correct Position, increment the             counter, otherwise continue iterating
  - Return the Counter

3) Iterate Through Each of the Strings, and use Step 2 as Transformation Criteria to return a new Array
*/

// EV Solution
const lowercaseMapping= 'abcdefghijklmnopqrstuvwxyz' // Step 1

function alphaSymmetryCount (string) {
  return string.split('').reduce((total, curElem, index) => {
    curElem = curElem.toLowerCase();
    if (lowercaseMapping.indexOf(curElem) === index) {
      total += 1;
    }
    return total;
  }, 0);
}

function solve(strArray) {
  return strArray.map((word) => alphaSymmetryCount(word));
}

function solve(arr){  
  var alphabeth = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabeth.indexOf(y)).length);
};

// CW Solution
const lowercaseMapping= 'abcdefghijklmnopqrstuvwxyz' // Step 1

function solve (strArray) {
  return strArray.map((word) => word.toLowerCase()
                                    .split('')
                                    .filter((letter, index) => index === lowercaseMapping.indexOf(letter))
                                    .length);
}