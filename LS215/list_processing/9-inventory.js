/*
Write a function that takes two arguments, an inventory item ID and a 
list of transactions, and returns an array containing only the transactions 
for the specified inventory item.
*/
/*

function transactionsFor(id, log) {
  return log.filter(entry => entry.id === id);
}
*/

// Launch School Solution
function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(({id}) => id === inventoryItem);
}

// () Parentheses are Required for Object Destructuring outside of a Declaration
// ({id}) - unpacks the `id` value for each element in the array

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

/*
Object Destructuring - Basic assignment

When unpacking property values from objects, 
destructuring assignment syntax variables MUST use the same name 
as the property names of object being destructured. 

Note: The parentheses `( ... )` around the assignment 
statement are **required** when using object literal 
destructuring assignment without a declaration.


let person = {
  name: 'Elaine',
  age: 27
}

let person2 = {
  name: 'Jason',
  age: 26
}

let array = [person, person2]

array.forEach(({name}) => console.log(name));
// logs Elaine, Jason

*/