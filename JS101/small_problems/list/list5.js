/* 
Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.
*/

/*
Process the Problem
Input - a string
Output - an array, consisting of all substrings of a string
       - ordered by WHERE in the string the substring occurs
       - all Substrings at Index 0
       - all Substrings at Index 1
Explicit Rule
  - Substring - is a sequence of consecutive characters

Examples

Data Structure / Algorithm
1) Create an empty array to contain the results
2) Returning Substrings
  - Initialize a Counter variable, and set it equal to 1
  - While the Counter variable is <= the Length of the String:
    - Add the substring from Index 0 to Index Counter to the Array
    - Increment the Counter Variable
3) Repeat Step 2 for Every index of the string
4) Return the Array
    
*/

function leadingSubStr(string, arr) {
  for (let counter = 1; counter <= string.length; counter++) {
    arr.push(string.slice(0,counter))
  }
  return arr
}

function substrings(string) {
  let arr = []
  
  for (let index = 0; index <= string.length; index++) {
    arr = leadingSubStr(string.slice(index), arr);
  }
  
  return arr;
}


console.log(substrings('abcde'));

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
  */