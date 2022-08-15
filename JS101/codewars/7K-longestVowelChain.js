/* 
Longest vowel chain
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou
*/

/* 
Process the Problem
- Input - a String that consists only of lowercase alphabetic characters, and no spaces
- Output - the length of the longest vowel substring

Data Structure
- an Array to keep track of the 'vowel' substrings
- Sort the Array by the length of each 'vowel' substring, and return the length of the longest substring

Algorithm
1) Create a Constant to capture the vowels
2) Create an Empty Array to Capture the Vowel Substrings
3) Given the String Input, iterate through each character
  a - Create an Empty string
    - If the Character is a vowel, add the vowel to the empty string
    - Else the Character is a consonant
        - If the length of `a` is greater than 0, add the String created on Step a to the Vowel Substrings               Array
4) Sort the Vowel Substring Array by Length from Highest to Lowest, and return the Length of the Highest Substring
  - To Sort from Highest to Lowest
    - the sort() function will sort based on the return value of the callback function
      - if the return value is < 0, sort a BEFORE b
      - if the return value is > 0, sort b BEFORE a
        i.e. if we want to sort DESCENDING
          a = 5
          b = 13
            since b > a ; we want b BEFORE a -> return a positive value -> return b - a


1) Create a Variable to Track the maxVowel and curVowel Lengths
2) Iterate through each character in the string
  - If the Letter is a vowel
    - Increment curVowel
  - Otherwise, the letter is a consonant. This marks the ends of a vowel substring
    - Refresh maxVowel IF curVowel is longer than it
    - Reset curVowel to 0
3) Return maxVowel

*/

function solve (string) {
  let maxVowel = 0
  let curVowel = 0
  
  for (let index = 0; index <= string.length; index++) {
    if ('aeiou'.includes(string[index])) {
      curVowel += 1;
    } else {
      
      if (curVowel > maxVowel) {
        maxVowel = curVowel;
      }
      
      curVowel = 0;
      
    }
  }
  
  return maxVowel;
      
}

console.log(solve("codewarriors"));         // 2
console.log(solve("suoidea"));              // 3
console.log(solve("ultrarevolutionariees"));// 3
console.log(solve("strengthlessnesses"));   // 1
console.log(solve("cuboideonavicuare"));    // 2
console.log(solve("chrononhotonthuooaos")); // 5
console.log(solve("iiihoovaeaaaoougjyaw")); // 8