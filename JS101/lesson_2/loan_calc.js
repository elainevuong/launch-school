// A Loan Calculator

// Formats
var dollarFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

var rateFormat = new Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 2
});

// Libraries Required
const readline = require('readline-sync');

// Functions 
function getInput(variable) {
  console.log(`=> Please enter your ${variable}`);
  let input = readline.question();

  while (invalidNumber(input)) {
    console.log(`=> Please enter valid input for ${variable}`);
    input = readline.question();
  }

  return input;
}

function invalidNumber(num) {
  return num.trim() === '' ||
         Number(num) < 0   ||
         Number(num) === 0 ||
         Number.isNaN(Number(num));
}

function repeatCheck() {
  console.log(`=> Would you like to calculate another monthly payment? (Y/N)`);
  let check = readline.question().toLowerCase();

  while (check !== 'y' && check !== 'n') {
    console.log(`=> Please enter Y if you'd like to calculate another monthly payment, otherwise please enter N to exit`);
    check = readline.question().toLowerCase();
  }

  return check;
}

// Program Begins
const REQUIREDINPUT = ['Loan Amount ($)', 'Annual Percentage Rate (%)', 'Loan Duration in Years'];
let exit;

console.log('=> Welcome to your Loan Calculator!');

do {

  let loanAmount = getInput(REQUIREDINPUT[0]);
  let apr = getInput(REQUIREDINPUT[1]);
  let loanYears = getInput(REQUIREDINPUT[2]);

  let confirmation;

  do {
    console.log(`=> Based on the information you provided, please confirm if the following are correct:\n 
      1) Loan Amount: ${dollarFormat.format(loanAmount)} 
      2) Annual Percentage Rate: ${rateFormat.format(apr / 100)}
      3) Loan Duration in Years: ${loanYears} \n
    If any of the information is incorrect, 
      => enter 1 to correct the Loan Amount; 
      => enter 2 to correct the Annual Percentage Rate; and 
      => enter 3 to correct the Loan Duration in Years. 
    If there are no errors, please press Y to proceed`);

    confirmation = readline.question().toLowerCase();

    switch (confirmation) {
      case '1':
        loanAmount = getInput(REQUIREDINPUT[0]);
        break;
      case '2':
        apr = getInput(REQUIREDINPUT[1]);
        break;
      case '3':
        loanYears = getInput(REQUIREDINPUT[2]);
        break;
    }

  } while (confirmation !== 'y');

  let monthlyInterestRate = apr / 12;
  let loanMonths = loanYears * 12;
  let monthlyPayment = loanAmount * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-loanMonths))));

  console.log(`=> Your monthly payment is ${dollarFormat.format(monthlyPayment)}!`);

  exit = repeatCheck();

} while (exit === 'y');

console.log(`=> Thanks for using the Loan Calculator! Goodbye!`);