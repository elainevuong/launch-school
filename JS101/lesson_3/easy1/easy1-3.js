/* Determine whether the following object of people and their age 
contains an entry for 'Spot': */

function findName(name, ageObject) {
  for (let firstname in ageObject) {
    if (firstname === name) {
      return true;
    }
  }
  return false;
}
/* for/in - for/in is used to iterate over all enumerable properties 
of an object, including propertied inherited from another object. */

function findName1(name, ageObject) {
  let nameArray = Object.keys(ageObject);
  return nameArray.includes(name)
}

/* Array.prototype.includes() */

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(findName('Spot', ages)); // false
console.log(findName('Herman', ages)); // true
console.log(findName1('Spot', ages)); // false
console.log(findName1('Herman', ages)); // true

/* Launch School Solution */ 
ages.hasOwnProperty("Spot");





