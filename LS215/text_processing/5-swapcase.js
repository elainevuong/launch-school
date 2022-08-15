/*
Write a function that takes a string as an argument and returns 
that string with every lowercase letter changed to uppercase and 
every uppercase letter changed to lowercase. Leave all other 
characters unchanged.
*/

function swapCase(string) {
  return string.split('').map(char => swapChar(char)).join('');

}

function swapChar(char) {
  if (/[a-z]/.test(char)) {
    return char.toUpperCase();
  } else if (/[A-Z]/.test(char)) {
    return char.toLowerCase();
  } else {
    return char;
  } 
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"