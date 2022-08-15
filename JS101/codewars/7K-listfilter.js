/* In this kata you will create a function that takes a list of 
non-negative integers and strings and returns a new list with 
the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

/*
Process the Problem
Input - an array of String and non-negative integer elements
Output - a new array, with the Strings removed

Data Structure / Algorithm
- For each element in the Array, select the elements that are numbers
*/


function filter_list(l) {
  return l.filter((elem) => typeof elem === 'number');
}