// Welcome Stranger

/* Create a function that takes 2 arguments, an array and an object. 
The array will contain 2 or more elements that, when combined with 
adjoining spaces, will produce a person's name. The object will 
contain two keys, "title" and "occupation", and the appropriate values. 
Your function should return a greeting that uses the person's full name, 
and mentions the person's title */

// Elaine Solution
function greetings(name, details) {
  return `Hello ${name[0]} ${name[1]} ${name[2]}! Nice to have a ${details.title} ${details.occupation} around.`
}

function greetings1(name, details) {
  return `Hello ${name.join(' ')}! Nice to have a ${details.title} ${details.occupation} around.`
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);

console.log(
  greetings1(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.