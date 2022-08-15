/*
Implement the function unique_in_order which takes as argument a 
sequence and returns a list of items without any elements with the 
same value next to each other and preserving the original order of elements.
*/

// Using Slice to Check the Last Thing Added to the Array
function uniqueInOrder(input) {
  let uniqueArr = [];
  
  for (let index = 0; index < input.length; index++) {
    if (uniqueArr.slice(-1)[0] !== input[index]) {
      uniqueArr.push(input[index]);
    }
  }
  
  return uniqueArr;
}

// Keeping Track of the Last Thing Added using Last
function uniqueInOrder(input) {
  let uniqueArr = [];
	let last;  

  for (let index = 0; index < input.length; index++) {
    if (last !== input[index]) {
	      last = input[index];
				uniqueArr.push(last);
    }
  }
  
  return uniqueArr;
}


uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]