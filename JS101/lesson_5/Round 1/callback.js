/* for loop transformation

// imperative style
It's called imperative since you're telling the
interpreter what to do each step of the way:

let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  let currentNum = numbers[index];
  let squaredNum = currentNum * currentNum;

  transformedNumbers.push(squaredNum);
}

transformedNumbers; // => [ 1, 4, 9, 16, 25 ]

let numbers = [1, 2, 3, 4, 5];

transformedNumbers = numbers.map(num => num * num); // shortest form

transformedNumbers1 = numbers.map(function (num) { // multi-line
  return num * num;
})
console.log(transformedNumbers);
console.log(transformedNumbers1);

[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

// 1 
// 3
// [ 1, 3 ]

let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

// 18, 7, 12, undefined


// forEach does NOT use the value of the callback
// the if statement within arr.map executes, so if the num is greater than 5
// it will be logged to the console
// at the end of interation, the arr.map consists of: [undefined, undefined], [undefined, undefined];
// recall: an if statement that does not execute also returned undefined
// that is then returned to forEach, which does NOT do anything with the call back
// forEach finally returns undefined
*/

[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});

[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).some(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]