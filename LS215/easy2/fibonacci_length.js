/*
function findFibonacciIndexByLength(length) {
  let index = 0;
  while (true) {
    index += 1;
    
    let result = fibonacci(index);
    let strNum = String(result);
    if (BigInt(strNum.length) === length) break
  }
  
  return BigInt(index);
}

function fibonacci(num) {
  if (num === 1 || num === 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;


  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);
  return count;
}
*/

function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  while (true) {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;

    if (String(fibonacci).length >= length) {
      break;
    }
  } 
  
  return count;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);