// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

/* Manual
function cleanUp(string) {
  let cleaned = '';
  
  for (let index = 0; index < string.length; index++) {
    if (/[a-zA-Z]/.test(string[index])) {
      cleaned += string[index];
    } else {
      if (cleaned.slice(-1) !== ' ') {
        cleaned += ' ';
      }
    }
  }
  
  return cleaned;
}


// Two Step Regex
function cleanUp(string) {
  let removePunctuation = string.replace(/[^a-z]/gi, ' ');
  return removePunctuation.replace(/\s+/g, ' ');
}

// Match multiple space, replace it with one space
*/

// One Step Regex
function cleanUp(string) {
  return string.replace(/[^a-z]+/gi, ' ');
}

// If you match 1 or more characters that are NOT letters, replace the match with one space

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "