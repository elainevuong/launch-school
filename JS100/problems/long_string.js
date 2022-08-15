/* Write a function that takes a string as an argument and returns an 
all-caps version of the string when the string is longer than 10 
characters. Otherwise, it should return the original string. 
Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'. */

function allCaps(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

let str1 = 'Hello my name is Elaine!'
let str2 = 'Hello!'

console.log(`${allCaps(str1)}`)
console.log(`${allCaps(str2)}`)