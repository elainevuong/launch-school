/*
Complete the method/function so that it converts dash/underscore delimited 
words into camel casing. The first word within the output should be capitalized 
only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Process the Problem
1. Data Validity - check for an empty string, if so return an empty string
2. Split the string into an Array based on dashes or underscores
3. Transform the Array
    - If this is the first item, return it as is without any modification
    - All Other Items - Capitalize the first Letter in each Word
4. Combine all the words in the Array using ''
    
Helper Function - Capitalize First Letter
Given a Word as Input
Return the first Letter Capitalized + the Remainder of the Word

*/

function toCamelCase(string) {
  if (string.length === 0) return '';
  
  let stringArray = string.split(/[_\-]/g);
  return stringArray.map((word, idx) => {
    if (idx === 0) return word;
    return capitalizeWord(word);
  }).join('');
  
}

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

console.log(toCamelCase(''));                    // logs ''
console.log(toCamelCase("the_stealth_warrior")); // logs "theStealthWarrior" 
console.log(toCamelCase("The-Stealth-Warrior")); // logs "TheStealthWarrior"
console.log(toCamelCase("A-B-C"));               // logs 'ABC'

