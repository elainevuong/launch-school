// Clean up the Words

/* 
Given a string that consists of some words and an assortment of 
non-alphabetic characters, write a function that returns that 
string with all of the non-alphabetic characters replaced by spaces. 
If one or more non-alphabetic characters occur in a row, you should 
only have one space in the result (i.e., the result string should 
ever have consecutive spaces). */

function isAlphabetic(letter) {
  let unicodeVal = letter.charCodeAt()
  return unicodeVal >= 65 && unicodeVal <= 122;
  // 65 is 'A', and 122 is 'z'
}

function cleanUp(text) {
  let cleanText = '';

  for (let index = 0; index < text.length; index += 1) {
    if (isAlphabetic(text[index])) {
      cleanText += text[index];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}


const isLetter = char => char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
function cleanUp(string) {
  let cleaned = '';
  let wordArr = string.split(' ');
  
  for (let char of string) {
    isLetter(char) ? cleaned += char : cleaned += ' ';
  }
  
  cleaned = cleaned.split(' ').filter(elem => elem !== '').join(' ')

  return ' ' + cleaned + ' ';
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
