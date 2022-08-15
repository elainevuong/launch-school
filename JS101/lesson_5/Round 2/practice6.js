// Given the family object, print the name, age, and gender of each family member:

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Object.entries(munsters).forEach((member) => {
  let name = member[0]
  let age = member[1].age
  let gender = member[1].gender
  console.log(`${name} is a ${age}-year-old ${gender}`);
});

// (Name) is a (age)-year-old (male or female).