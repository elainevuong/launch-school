/*
Write a function that returns a list of all substrings of a string. 
Order the returned list by where in the string the substring begins. 
This means that all substrings that start at index position 0 should 
come first, then all substrings that start at index position 1, and 
so on. Since multiple substrings will occur at each position, return 
the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote 
in the previous exercise:



// Solution with `map` and Array Borrowing on Strings
function substrings(string) {
  return [].map.call(string, (_, index) => {
    return leadingSubstrings(string.slice(index))
  }).flat();
}

function leadingSubstrings(string) {
  return [].map.call(string, (_, index) => {
    return string.slice(0, index + 1);
  });
}

console.log(substrings('abcde'));

*/

// Solution with `reduce` and Array Borrowing on Strings

function substrings(string) {
  return [].reduce.call(string, (allSubsArr, _, index) => {
    return allSubsArr.concat(leadingSubstrings(string.slice(index)));
  }, []);
}

function leadingSubstrings(string) {
  return [].reduce.call(string, (leadingSubsArr, _, index) => {
    leadingSubsArr.push(string.slice(0, index+ 1));
    return leadingSubsArr;
  },[]);
}

// console.log(substrings('abcde'));

module.exports = { 
  substrings, 
};

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/