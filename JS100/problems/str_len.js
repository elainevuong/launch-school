let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

// Use map and filter to first determine the lengths of all the elements 
// in an array of string values, then discard the even values (keep the odd values)

// Full Solution
function oddLengths(array) {
  str_len = array.map(function(item) {
    return item.length;
  });

  odd_lengths = str_len.filter(function(length) {
    if (length % 2 !==0 ) {
      return length;
    }
  });
  
  return odd_lengths

}  

function oddLengths1(strings) {
  let lengths = strings.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 === 1 );
  return oddLengths;
}




