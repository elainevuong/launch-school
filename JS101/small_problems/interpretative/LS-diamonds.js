




// Finding Number Sequence in * and Spaces Relationship
function diamond(n) {
  numberSequence(n).forEach(number => {
    console.log(`${" ".repeat((n - number) / 2)}${"*".repeat(number)}`);
  });
}

function numberSequence(n) {
  let result = [];
  let increment = 2;
  let number = 1;

  while (number > 0) {
    result.push(number);
    if (number === n) {
      increment = -2;
    }
    number += increment;
  }

  return result;
}

// Top Half and Bottom Half Problem Solving
function diamond(oddNum) {
  let midPoint = Math.ceil(oddNum / 2)
  let numSpaces;
  let numDiamonds

  // Top Half
  for (let number = 1; number <= midPoint; number++) {
    numSpaces = midPoint - number;
    numDiamonds = number * 2 - 1
    let string = ' '.repeat(numSpaces) + '*'.repeat(numDiamonds) + ' '.repeat(numSpaces);
    console.log(string);
  }

  // Bottom Half
  for (let number = 1; number < midPoint; number++) {
    numSpaces = number;
    numDiamonds = oddNum - number * 2;
    let string = ' '.repeat(numSpaces) + '*'.repeat(numDiamonds) + ' '.repeat(numSpaces);
    console.log(string);
  }
}

diamond(9);