/* 
Move the first letter of each word to the end of it, then add "ay" 
to the end of the word. Leave punctuation marks untouched.
*/

function pigIt (str) {
  return str.split(' ').map((word) => {
    if (checkWord(word)) {
      return pigStr(word);
    } else {
      return word;
    }
  }).join(' ');
}

function pigStr(word) {
  return word.slice(1) + word[0] + 'ay';
}
  
function checkWord(word) {
  let chars = word.split('');
  let alphaWord = chars.filter((char) => {
    return (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z')
  })
  
  return alphaWord.length > 0;
}