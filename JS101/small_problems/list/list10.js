/* Inventory Item Availability
Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise.
*/

/*
Process the Problem
- Input - an inventory ID number, and a list of transactions
            - Each transaction has an id (number), a movement (in/out), and a quantity(number)
- Output - a Boolean that returns true if the inventory item quantity is greater than 0
           Otherwise, it returns False

Examples/Test Cases

Data Structures / Algorithm
1) Select All of the transactions that match the ID provided
2) Based on the selected transactions in Step 1, sum all of the quantities that have a movement 'in'
3) Based on the selected transactions in Step 1, sum all of the quantities that have a movement 'out'
4) Compute the difference of Step 2 - Step 3. If the difference is greater than 0, return true; otherwise return false.

*/

function selectTransactions(ID, transactions) {
  return transactions.filter((elem) => elem.id === ID);  
}

function isItemAvailable(ID, transactions) {
  let idTransactions = selectTransactions(ID, transactions);
  
  let totalIn = idTransactions.filter((elem) => elem.movement === 'in')
                              .reduce((total, elem) => total + elem.quantity, 0);
  
  let totalOut = idTransactions.filter((elem) => elem.movement === 'out')
                              .reduce((total, elem) => total + elem.quantity, 0);
  
  return totalIn > totalOut;
    
}



let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true