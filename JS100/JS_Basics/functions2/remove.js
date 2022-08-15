function removeLastChar(string) {
  return string.slice(0,-1);
}

function removeLastChar1(string) {
  return string.slice(0, string.length - 1);
}

function removeLastChar2(string) {
  return string.substring(0, string.length - 1);
}


console.log(removeLastChar2('ciao!')); // 'ciao'
console.log(removeLastChar2('hello')); // 'hell'
