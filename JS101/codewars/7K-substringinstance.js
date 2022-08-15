/* 
Substring Instance Count

Complete the solution so that it returns the number of times the search_text is found within the full_text.

Process the Problem
Input
  1) the FullText (a string)
  2) the SearchText (a string)
Output
  - An Integer, that represents the number of times that the Search Text is found within the Full Text
  
Data Structure
- Iterating Through the Full Text
- Keep Track of where we are Starting From
- Look at a 'subset' of the String, to determine if the Search Text is there
  - If it is, Increment the Total Counter
    - Reset the Start Position, and Keep Going
  - If it is NOT there, continue
- Return the Total

Algorithm
1. Edge Case - if the Search Text is LONGER than the Full Text - return 0
2. Initialize a Counter variable to the value 0, that will keep track of the number of times the SearchText appears in the FullText
3. Starting from the left-most character of the FullText, find the position of the first occurrence of the Search Text
  - If the Search Text is found, Increment Counter by 1
    - Given the Position of the First Occurrence, Start at the NEXT Character Position, and search the substring starting from that Position to the End of the String
  - If the Search Text is Not Found, Return the Counter
*/

function solution(fullText, searchText) {
  if (searchText.length > fullText.length) return 0; // Edge Case

  let counter = 0;
  let startSearch = 0;
  
  while (fullText.indexOf(searchText, startSearch) >= 0 ) {  
      counter += 1;
      startSearch = fullText.indexOf(searchText, startSearch) + 1;
  } 
  
  return counter;
}

function solution(fullText, searchText) {
  return fullText.split(searchText).length - 1;
}
