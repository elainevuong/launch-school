/* Further Exploration
Rewrite leadingSubstrings using list processing functions. That is, convert the string into an array of some sort and use functions like map, filter, or reduce to get the desired substrings. (You will also need to use join.) Try not to use forEach as that is too similar to the for loop approach.
*/

function leadingSubstrings(string) {
  return [...string].map((_, index) => string.slice(0, index + 1));
}

/* 
function leadingSubstrings(string) {
  return [...string].reduce((array, _, index) => {
    array.push(string.slice(0, index + 1));
    return array;
  }, []);
}
*/

function leadingSubString1(string) {
  return [...string].reduce((array, _, index) => {
    array.push(string.slice(0, index + 1));
    return array;
  }, []);
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]