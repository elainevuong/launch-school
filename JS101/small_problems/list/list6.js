/* 
Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.
*/

/*
Process the Problem
- Input - a string
- Output - a list of all palindromic substrings of a string
         - each substrings MUST be a sequence of characters that reads the same forward and      
           backward
         - substrings should be sorted by their order of appearance int he input string
         - INCLUDE duplicate substrings
Explicit Rules
  - Case Sensitive - 'AbcbA' is a palindrome, but 'Abcba' is NOT
  - Single Characters - single characters are NOT palindromes
  
Data Structure / Algorithm

1) Helper Function - isPalindrome(substring)
- Given a substring as input
- If the substring.length is 1, return false => Edge Case
  Otherwise, create a copy of the substring, reverse it, and check to see if it is equal to the input substring. Return the result

2) Helper Function - leadingSubStr(string, array)
- Given a string as input, and solution array to capture all leading substrings
- Initialize a Counter variable starting at Index 1
- While the Counter variable is less than or equal to the length of the string
  - Slice the string Index 0 to the Index of the Counter variable, and add that result to the         solution array
  - Increment the Counter Variable
- Return the solution array

3) Creating an Array of All Possible Substrings - allSubStr(string)
- You are given a String as input
- Create an initialize an empty array, to capture all substrings
- Create an Initialize an Index Variable, starting at 0
- While the Index < Length of the String
  - a) Slice from the Index Position to the END of the string
  - Pass the result from (a) as an argument to the leadingSubStr() function, as well as the array 
    to capture all substrings
- Return the array

4) Checking Substrings for Palindromes
- Given the array of all possible substrings
- Create a new array to capture Palindromic Substrings
- Iterate through the elements in the Substring Array
  - For each element, if the substring is a Palindrome, add it to the new array of Palindromic Substrings
- Return the new Array

*/

function isPalindrome(substring) {
  if (substring.length === 1) return false;
  
  return substring === substring.split('').reverse().join('');
}

function leadingSubStr(slice, subStrArr) {
  for (let endSlice = 1; endSlice <= slice.length; endSlice++) {
    subStrArr.push(slice.slice(0, endSlice));
  }
  
  return subStrArr;
}

function allSubStr(string) {
  let subStrArr = []
  for (let index = 0; index < string.length; index++) {
    subStrArr = leadingSubStr(string.slice(index), subStrArr);
  }
  
  return subStrArr;
}

function palindromes(string) {
  let subStrArr = allSubStr(string);
  
  return subStrArr.filter((substring) => isPalindrome(substring));
  
  
}

//console.log(allSubStr('abcd'));
//console.log(allSubStr('hello-madam-did-madam-goodbye'));


/*
console.log(isPalindrome('abcd')); // false
console.log(isPalindrome('hiih')); // true
console.log(isPalindrome('a'));    // false
*/



console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]]
