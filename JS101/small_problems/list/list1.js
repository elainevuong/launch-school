// Function Declaration
function sum(num) {
  return String(num).split('').reduce((total, elem) => total + Number(elem), 0);
}

// Function Expression
let sum1 = function(num) {
  return String(num).split('').reduce((total, elem) => total + Number(elem), 0);
}

// Arrow Function
let sum2 = num => String(num).split('').reduce((total, elem) => total + Number(elem), 0);