/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.


createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/

function createPhoneNumber(numbers){
  return numbers.map((number, index) => {
    if (index === 0) {
      return '(' + String(number);
    } else if (index === 2) {
      return String(number) + ')' + ' ';
    } else if (index === 5) {
      return String(number) + '-';
    } else {
      return String(number);
    }
  }).join('');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // logs "(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 4, 5, 6, 7, 8, 9, 0])); // logs "(111) 456-7890"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 6, 4, 9, 0])); // logs "(123) 456-6490"