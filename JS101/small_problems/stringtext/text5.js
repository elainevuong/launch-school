/* 
Swap Case
Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.
*/

/*
Process the Problem
- Input - a string
- Output - a string, with every lowercase letter swapped with every uppercase letters
- Explicit Rules
  - Other Characters - remains unchanged
  
Data Structure
- String 
  => Array (character iteration) 
  => Create an empty string to capture the swapcase string
    => Determine if the character is uppercase
      => if Uppercase, convert it to lowercase, and add it to the swapcase string
    => Determine if the character is lowercase
      => if Lowercase, convert it to uppercase, and add it to the swapcase string
    => Otherwise - leave the character, and add it to the swapcase string
  => Return the swapcase string
*/

function isLowercase(letter) {
  return letter >= 'a' && letter <= 'z';
}

function isUppercase(letter) {
  return letter >= 'A' && letter <= 'Z';
}

function swapCase(string) {
  let swapStr = ''
  string.split('').forEach((char) => {
    if (isLowercase(char)) {
      swapStr += char.toUpperCase();
    } else if (isUppercase(char)) {
      swapStr += char.toLowerCase();
    } else {
      swapStr += char;
    }
  });
  
  return swapStr;
    
}


console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"