/* 
Lettercase Counter
Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.
*/

/*
Process the Problem
- Input - a String
- Output - an Object
              property 1 - lowercase: count
              property 2 - uppercase: count
              property 3 - neighter: count
- Implicit Rules
  - Empty String - an empty string will return 0 lowercase, 0 uppercase, and 0 neither
  - Numbers - Numbers are counted as neither
  - Spaces - Spaces are counted as neither
  - Puncutation - are counted as neither
  

Data Structure
- Creating count trackers to keep track of lowercase, uppercase, and neither
- Distinguish - lowercase**
- Distinguish - uppercase**
- Everything else -> neither
- String -> iteration through the characters (Array)

Algorithm
1) isLowercase 
- Given a character, determine if it's lowercase
- Logic: if it's lowercase, it'll be between a and z
  - If the character is between a and z, return true; otherwise return false

2) isUppercase
- Given a character, determine if it's uppercase
- Logic: if it's lowercase, it'll be between A and Z
  - If the character is between A and Z, return true; otherwise return false

3) Main Algorithm
- Create an Object, that will keep count of the occurrences. Initialize the lowercase, uppercase, and neither properties to a value of 0
- Iterate through each character of the String
  - If the character is lowercase, increase the lowercase value by 1
  - Else If the character is uppercase, increase the uppercase value by 1
  - Else the character is neither, increase the neither value by 1
- Return the Object

// Edge Case of an Empty String - is already accounted for, because we initialize the object to zero counts in the beginning

*/

function isLowercase(char) {
  return char >= 'a' && char <= 'z';
}

function isUppercase(char) {
  return char >= 'A' && char <= 'Z';
}

function letterCaseCount(string) {
  let objCounter = { lowercase: 0, uppercase: 0, neither: 0 }
  
  string.split('').forEach((char) => {
    if (isLowercase(char)) {
      
      objCounter['lowercase'] += 1;
      
    } else if (isUppercase(char)) {
      
      objCounter['uppercase'] += 1;
      
    } else {
      
      objCounter['neither'] += 1;
      
    }
  });
  return objCounter;
}



console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }