// Write a function that swaps the case of all the letters

let munstersDescription = "The Munsters are creepy and spooky.";

// Elaine's Solution
function lettercaseSwap(string) {
  let charArray = string.split('');

  let swapArray = charArray.map((char) => {
    if (charIsLowercase(char) === 'L') {
      return char.toUpperCase();
    } else if (charIsLowercase(char) === 'U') {
      return char.toLowerCase();
    } else {
      return char;
    }
  })

  return swapArray.join('');
}

function charIsLowercase(character) {
  if (character.charCodeAt() >= 97 && character.charCodeAt() <= 122) {
    return 'L'
  } else if (character.charCodeAt() >= 65 && character.charCodeAt() <= 90) {
    return 'U'
  } else {
    return 'N'
  }
}

// LS Solution
munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");

console.log(lettercaseSwap(munstersDescription));