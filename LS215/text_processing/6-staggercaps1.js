/*
Staggered Caps Part 1

Write a function that takes a string as an argument 
and returns that string with a staggered capitalization 
scheme. Every other character, starting from the first, 
should be capitalized and should be followed by a lowercase 
or non-alphabetic character. Non-alphabetic characters should 
not be changed, but should be counted as characters for 
determining when to switch between upper and lower case.
*/

function staggeredCase(string) {
  let stringArr = string.split('');

  let check = 1;
  return stringArr.map(char => {
    if (/[a-z]/i.test(char) && check === 1) {
      check -= 1
      return char.toUpperCase();
    } else if (/[a-z]/i.test(char) && check === 0) {
      check += 1
      return char.toUpperCase();
    } else {
      return char;
    }
  }).join('');
}

function staggeredCase(string) {
  return string
    .split("")
    .map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"