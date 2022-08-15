/*
The insurance guy laughs, he's just kidding. He just needs an updated list. 
You just need one of those Rammstein Vodka bottles.

Given an object with alcoholic drinks and a number, return a string with the 
name of the Rammstein bottle that matches the given number.

There will always be a corresponding Rammstein bottle for the number given.
There will never be 2 Rammstein bottles with the same number.
You always return one Rammstein bottle.
*/

/*
// Long-Form using `Filter`
function getBottle(bottles, amount) {
  return Object.keys(bottles).filter(key => {
    if (key.slice(0,9) === 'Rammstein') {
      return bottles[key] === amount;
    }
  })[0];
}
*/

// Array.find() - The find() method returns the VALUE of the first element in the provided array 
// that satisfies the provided testing function
function getBottle(bottles, num) {
  return Object.keys(bottles).find(key => key.includes('Rammstein') && bottles[key] === num);
}

console.log(getBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 100));          // returns "Rammstein A"
console.log(getBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 50));           // returns "Rammstein B"
console.log(getBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 }, 70)); // returns "Rammstein D"

