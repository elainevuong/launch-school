/*
The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all 
and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. 
Find out what you said.

Given an object, return a string that concatenates all the values and adds the 2nd key at the end. 
Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

The keys will always be 1: 2: 3: in this order. Don't mistake keys with indexes.
I'm rating the challenge very easy because it can be hardcoded but try to do it dynamically, 
that is, imagine tomorrow you receive an object with 4 keys instead, your function would still work.
*/

function saysWhat(object) {
  let secondWord = '';
  return Object.keys(object).reduce((newString, key) => {
    if (key === Object.keys(object)[1]) {
      secondWord = object[key];
    }
    newString += object[key] + ' ';
    return newString;
  }, '').concat(secondWord);
}

console.log(saysWhat({ 1: "Mommy", 2: "please", 3: "help" })); // returns "Mommy please help please"
console.log(saysWhat({ 1: "Me", 2: "innocent", 3: "is" }));    // returns "Me innocent is innocent"
console.log(saysWhat({ 1: "Must", 2: "lawyer", 3: "call" }));  // returns "Must lawyer call lawyer"

