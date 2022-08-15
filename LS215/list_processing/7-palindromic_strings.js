/*
Palindromic Substrings
Write a function that returns a list of all substrings of a string 
that are palindromic. That is, each substring must consist of the 
same sequence of characters forwards as backwards. The substrings 
in the returned list should be sorted by their order of appearance 
in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters 
and pay attention to case; that is, 'AbcbA' is a palindrome, 
but 'Abcba' and 'Abc-bA' are not. In addition, assume that single 
characters are not palindromes.
*/

'use strict'

const { substrings } = require('./6-all_substrings');

function palindromes(string) {
  let allSubstr = substrings(string);
  return allSubstr.filter(isPalindrome);
}

function isPalindrome(word) {
  if (word.length === 1) return false;
  return word === word.split('').reverse().join('')
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

  console.log(palindromes('knitting cassettes'));
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]