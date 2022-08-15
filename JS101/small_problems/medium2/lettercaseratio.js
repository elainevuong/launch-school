/* Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither */

function isUpper(char) {
  return char >= 'A' && char <= 'Z'
}

function isLower(char) {
  return char >= 'a' && char <= 'z'
}

function letterPercentages(string) {
  let count = { lowercase : 0,
                uppercase : 0,
                neither   : 0 } 
  
  for (let char of string) {
    if (isUpper(char)) {
      count.uppercase += 1;
    } else if (isLower(char)) {
      count.lowercase += 1;
    } else {
      count.neither += 1
    }
  }
  
  count.uppercase = (count.uppercase / string.length * 100).toFixed(2)
  count.lowercase = (count.lowercase / string.length * 100).toFixed(2)
  count.neither = (count.neither / string.length * 100).toFixed(2)
  
  console.log(count);
  return count;
}


letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }