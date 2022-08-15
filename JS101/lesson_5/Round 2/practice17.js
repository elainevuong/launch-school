// Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

// Write a function that takes no arguments and returns a string that contains a UUID.

/*
Process the Problem
- a UUID consists of 32 hexadecimal characters
- each UUID is broken out into 5 sections, in an 8-4-4-4-12 pattern

Data Structures

0) Initialize an array that will be used to keep track of the possible characters in an UUID
1) Generate a Random Number
2) Access a Random UUID Possible Character
3) Return that Character to a String
4) Generate 5 substrings
  - Substring 1 - 8 characters
  - Substring 2 - 4 characters
  - Substring 3 - 4 characters
  - Substring 4 - 4 characters
  - Substring 5 - 12 characters
5) Combine all the substrings and return the UUID code
*/

const possibleUUIDChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

function createSubstring(length) {
  let substring = ''
  let currLength = 0
  
  while (currLength < length) {
    let randIndex = randInt(0, possibleUUIDChar.length - 1);
    substring += possibleUUIDChar[randIndex]
    currLength += 1;
  }
  
  return substring;
}

function randInt(max, min) {
  let randomNum = Math.random() * (max - min) + min;
  return Math.round(randomNum);
}
  
function generateUUID() {
  let first  = createSubstring(8)
  let second = createSubstring(4)
  let third  = createSubstring(4)
  let fourth = createSubstring(4)
  let fifth  = createSubstring(12)
  
  return `${first}-${second}-${third}-${fourth}-${fifth}`;
}
  
/* LS Solution
function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
}

generateUUID(); // => '02e51c2f-dacd-c319-53b5-e40e6e8c1f78'
generateUUID(); // => '39038ab9-3b95-43d8-6959-5d785ccb9b69'
generateUUID(); // => 'f7d56480-c5b2-8d4d-465f-01a4ea605729'
*/