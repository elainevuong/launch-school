/* 
Staggered Caps (Part 2)
Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.
*/

/*
Process the Problem
- Input - a string
- Output - a string with staggered caps
  - Explicit Rules - ignore non-alphabetic characters in determining the uppercase or lowercase, they should still be included in the return value
  
Data Structure
1) Main Algorithm
Input: A String
Given a String, split the string into an Array of characters
Create a new String to capture the Staggered Caps result
- Iterate through the Array of characters
  - If the character is NOT alphabetic, append the character as is to the Staggered Caps result
  - If the character IS alphabetic
    - Determine if we should make it uppercase or lowercase
      - Obtain the LAST alphabetic character from the Staggered Caps String
        - If the LAST ALPHABETIC CHARACTER is an UPPERCASE Letter, make the current character lowercase and append it to the Staggered Caps result
        - If it LAST ALPHABETIC CHARACTER is a LOWERCASE letter, make the current character uppercase and append it to the Staggered Caps result
        - If this is the FIRST alphabetic character being added to the Staggered Caps String, make the current character uppercase and append it to the Staggered Caps result
Return the Staggered Caps string
*/

function isAlphabetic(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

function lastAlphabeticChar(string) {
  for (let index = string.length - 1; index >= 0; index--) {
    if (isAlphabetic(string[index])) {
      return string[index]
    }
  }
}

function isUpperCase(char) {
  return (char >= 'A' && char <= 'Z');
}

function staggeredCase(string) {
  let staggerStr = ''
  
  string.split('').forEach((char) => {
    if (!isAlphabetic(char)) {
      staggerStr += char;
    } else {
      
      let lastAlphaChar = lastAlphabeticChar(staggerStr);
      
      if (isUpperCase(lastAlphaChar)) {
        staggerStr += char.toLowerCase();
        
      } else {
        staggerStr += char.toUpperCase();
      }
    }
  });
  
  return staggerStr;
  
}


console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);


