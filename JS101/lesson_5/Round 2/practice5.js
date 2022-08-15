// Compute and display the total age of the male members of the family.
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// EV - entries, filter, and reduce
let total = Object.entries(munsters)
                  .filter((name) => name[1]['gender'] === 'male')
                  .reduce((total, name) => total + name[1].age, 0);

console.log(total);

// LS - method with Object.values()
let total1 = Object.values(munsters)
                   .filter((obj) => obj.gender === 'male')
                   .reduce((total, member) => total + member.age, 0);

console.log(total1);