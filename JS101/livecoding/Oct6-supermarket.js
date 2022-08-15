/*
The Supermarket Queue
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time 
required for all the customers to check out! You are provided with two inputs:
	1. Customers - an Array of positive integers representing the queue. Each integer represents a customer, and its value is the 
		 amount of time they require to check out.
	2. n - a positive integer that represents the number of checkout tills

Clarification
There is only ONE queue serving many tills, and the order of the queue NEVER changes. The front person in the queue proceeds to a 
till as soon as it becomes free.

Examples
queueTime([5, 3, 4], 1)     // returns 12; - when there is 1 till, the total time is just the sum of the times
queueTime([10, 2, 3, 3], 2) // returns 10; - here there are two Tills, the 2nd, 3rd, and 4th people in the queue finish before the 1st
queueTime([2, 3, 10], 2)    // returns 12; 
queueTime([], 1);   // returns 0;
queueTime([1,2,3,4], 1); // returns 10
queueTime([1,2,3,4,5], 100); // returns 5
queueTime([2,2,3,3,4,4], 2); // returns 9
*/

/*
Process the Problem
Input:
	1) Queue - an Array of positive integers, each integer represents a customer and the amount of time for a customer to check out
	2) n - represents the number of checkout tills
Output:
	an Integer, representing the total time required for all customers to check out

- Explicit Rules
	- One Queue with an Unchanging Order
	- Whenever a Till is free, the next person in the queue proceeds to a Till

- Implicit Rules
  - Empty Array - (i.e. no Queue) => returns 0
	- One Till => return the sum of the Positive Integers
	- More Tills than Customers => return the largest Number in the Queue

Data Structures 
Till - a Till will be represented by an Array. The elements of a Till represent the customers that are being or have been serviced
	     by that till
Smallest Till - the smallest Till is the NEXT TILL that a customer will go to
End Condition - when the queue is empty!

Algorithm
Edge Cases
1) Empty Array => return 0
2) n = 1 =>  return the Sum of the Positive Integer Array
3) n > Length of the Array => return the largest Integer in the Positive Integer Array

Main Algorithm
0a) Edge Cases - if the queue length is 0, return 0
0b) Edge Cases - if there is only one till, return the total time in the queue
0c) Edge Cases - if there are more tills available than there are customers in queue, return the Maximum of the queue
1) Create a Till Array to contain all the Tills. Create n Empty tills and add it to the Till Array. 
Mechanism - shift from the beginning of the Queue, and add it to the smallest Till. Repeat until the Queue is empty. 
2) While the Queue is NOT Empty
	- Add a Customer to the Till at Index Position 0
	- Sort the Tills Ascending, based on the Total of Each Till
		(NOTE: Since it is sorted ascending, the smallest Till is now the beginning, so we are safe to add a Customer to that Till)
3) The queue is now empty, and the Tills are still sorted in ascending order. Access the last till, and return its total.

Code Wars Algorithm
Data Structure Representation - 
  A till Array. Each Element in the till Array is a Number, that represents that the till is being used by a person.
  The till with the smallest number represents the till that will be free the soonest, and is where the next person should go to.
	Once a customer goes to a till, add the time that the customer will be at the till to that till's Number element. 

1) Create an Array, and fill it with n number of elements, where each element is 0.
2) Iterate through the values of the queue array from beginning to end (for of)
	- Return the index of (i.e. the till) with the smallest value
	- Re-assign the element at the index with the smallest value, with the current element
3) Return the Maximum element (i.e. the till that took the longest time to process its customer) in the till array

The number represents the  customers the till is 

 and each element of the till Array represents the how many of the till. The smallest till will be where the next
customer goes.
- 

*/
// Elaine's Solution
function createTills(numTills) {
  return Array(numTills).fill(undefined).map((arr) => []);
}

function total(till) {
  return till.reduce((total, elem) => Number(total + elem), 0);
}

function sortTillsAsc(tillArray) {
  tillArray.sort((till_a, till_b) => {
    let total_a = total(till_a);
    let total_b = total(till_b);
    
    return total_a - total_b;
  });   
}

function queueTime(queue, tills) {
  if (queue.length === 0) return 0;
  if (tills === 1) return total(queue);
  if (tills > queue.length) return Math.max(...queue);
  
  let totalTills = createTills(tills);
  
  while (queue.length !== 0) {
    sortTillsAsc(totalTills);
    totalTills[0].push(queue.shift());
  }
  
  sortTillsAsc(totalTills);
  
  let largestTill = totalTills[totalTills.length - 1];
  return total(largestTill);
}

// Code Wars Solution
function queueTime(customers, numtills) {
  let tillArr = Array(numtills).fill(0);
  for (let time of customers) {
    let indexSmall = tillArr.indexOf(Math.min(...tillArr));
    tillArr[indexSmall] += time;
  }
  return Math.max(...tillArr);
}