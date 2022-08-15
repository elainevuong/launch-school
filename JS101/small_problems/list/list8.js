/* Grocery List
Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.
*/

/*
Process the Problem
- Input - a grocery list, which is a two-dimensional array
- Output - an array, such that each fruit name appears the number of times equal to its desired quantity

Data Structure / Algorithms
- Create an empty array to capture the expanded new grocery list
- Iterate through each subArray
  - Note that the element at Index 0 of the subArray is the food item
  - Note that the element at Index 1 of the subArray is the number of times to include that item
  - For each element in the subArray
    - Initialize a counter variable, and set it equal to 0
      - While the Counter Variable < the value at Index 1 of the subArray (the number of times to include that item)
      - Add the food item (the element at Index 0 of the subArray) to the new list array
      - Increment the counter
- Return the New Grocery List



*/

function buyFruit(groceryList) {
  let newList = []
  
  groceryList.forEach((subArr) => {
    for (let counter = 0; counter < subArr[1]; counter++) {
      newList.push(subArr[0]);
    }
  });
  
  return newList;
}



console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]