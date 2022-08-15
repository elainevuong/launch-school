/* Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
The tests above should log true.

Note that balanced pairs must each start with a (, not a ).
*/

/*
Process the Problem
- Input - a string
- Output - a boolean, true, if all parentheses in the string are properly balanced; otherwise false
- Explicit Rules
  - What does Balanced Mean? -> the parentheses must occur in matching '(' and ')'
  - Balanced Pair MUST start with a '(' and not a ')'

Examples / Test Cases
"What (is) this?"    => true
"What is) this?"     => false, does NOT start with (
"What (is this?"     => false, does NOT end with )
"((What) (is this))?"=> true

Data Structure / Algorithm
- Check for Index Positions 
  - The Index Position of the first '(' MUST occur EARLIER than the Index Position of the first ')'
- Check for No '(' AND No ')'
  - IF there are NO parentheses, return true
- Check for Pairs
  - Count the number of '(' and count the number of ')'
  - if they are equal to the same number, return true
  
Algorithm
1) Edge Case - No '(' and No ')'
  - Check to see what is the index of the first occurrnece of '(' and what is the index of the first occurrence of ')'
    If BOTH of these do NOT occur, return true

2) Edge Case - FIRST OCCURRENCE of ')' occurs BEFORE '('
  If the first occurrence of ')' is BEFORE the first occurrence of '(', return false
  
  
3) Edge Case - LAST OCCURENCE of '(' AFTER ')'
  If the last occurrence of '(' is AFTER the last occurrence of ')', return false
  
3) Iterate and Populate
  Initialize two variables to keep track of the counts of the appeances of '('
  Iterate through all the characters in the string, 
    if the char is '(' or ')', increase the respective counter variable
  Return the boolean if both variables are equal to one another
*/

// Elaine's Solution
function isBalanced1(str) {
  if (str.indexOf('(') === -1 && str.indexOf(')') === -1) return true;  // both ( ) do NOT exist in the string
  if (str.indexOf(')') < str.indexOf('(')) return false; // checks that first occurrence of ) appears BEFORE (
  if (str.lastIndexOf('(') > str.lastIndexOf(')')) return false; // checks that last occurrnece of ( appears AFTER )
  
  let leftBracketCount = 0
  let rightBracketCount = 0
  
  str.split('').forEach((char) => {
    if (char === '(') {
      leftBracketCount += 1
    } 
    
    if (char === ')') {
      rightBracketCount += 1
    } 
  });
  
  return leftBracketCount === rightBracketCount;
}

// LS Solution
function isBalanced(str) {
  let check = 0
  for (let index = 0; index < str.length; index++) {
    if (str[index] === '(') {
      check += 1;
    } else if (str[index] === ')') {
      check -= 1;
    }
    if (check < 0) return false; // if ) EVER appears before (
  }
  return check === 0
}
  



console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
  