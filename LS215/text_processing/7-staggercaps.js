/*
Modify the function from the previous exercise so 
that it ignores non-alphabetic characters when determining 
whether a letter should be upper or lower case. Non-alphabetic 
characters should still be included in the output string, but 
should not be counted when determining the appropriate case.
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
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"