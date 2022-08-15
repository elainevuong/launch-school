/*
You are going to be given a word. Your job is to return the middle 
character of the word. If the word's length is odd, return the 
middle character. If the word's length is even, return the middle 2 
characters.

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
/*
Process the Problem
- Input - a word
- Output - the middle character of the word
- Explicit Rules
  - if the word's length is odd, return the middle character
  - if the word's length is even, return the middle 2 characters
  
Algorithm
- Given a String
- If the String Length is an Even Number
  - Slice the String
    - Start Slice = String.length / 2 - 1
    - End Slice = Start + 1
  - Return the Sliced String
- Else the String Length is an Odd Number
  - Return the Character at the String length / 2 - rounded down

** Recall - the Slice Method returns the String beginning at Start, up to
but NOT including the End Index
*/

function getMiddle(s) {
  if (s.length % 2 === 0) {
    let start = s.length / 2 - 1;
    return s.slice(start, start + 2);
  } else {
    return s[Math.floor(s.length / 2)];
  }
}

