/* 
You are given an array (which will have a length of at least 3, but 
could be very large) containing integers. The array is either 
entirely comprised of odd integers or entirely comprised of even 
integers except for a single integer N. Write a method that takes the 
array as an argument and returns this "outlier" N.
*/

/*
Process the Problem
- input - an array, with a length of at least 3
- output - an outlier, N

Examples / Test Case
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

Data Structure

Algorithm

*/

function findOutlier (integers) {
  let check = 0
  let answer = {} // even: elem
  
  integers.forEach((elem) => {
    if (elem % 2 === 0) {
      check += 1;
      answer['even'] = elem;
    } else {
      check -= 1;
      answer['odd'] = elem;
    }
  });
  
  return check > 0 ? answer['odd'] : answer['even'];
  
}

/*
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}

function findOutlier (integers) {
  let even = integers.filter(a => a % 2 === 0);
  let odd = integers.filter(a => a % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}
*/