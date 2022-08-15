// Convert a String to a Signed Integer
function stringToSignedInteger(stringNum) {
  if (stringNum[0] === '-') {
    return stringToInteger(stringNum.substring(1)) * -1

  } else if (stringNum[0] === '+') {
    return stringToInteger(stringNum.substring(1));

  } else {
    return stringToInteger(stringNum);
  }
}

/* LS Solution
function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}
*/


/* 
slice(beginIndex)
slice(beginIndex, endIndex)
*/


function stringToInteger(stringNum) {
  let newNum = 0;

  let stringArr = stringNum.split('').reverse() 
  
  stringArr.forEach((number, index) => {
    let digit = number * (10 ** index)
    newNum += digit;
  });

  return newNum;
}


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true