// What Century is That?


function century(year) {
  let centuryYear = numberCentury(year)

  return String(centuryYear) + centurySuffix(centuryYear);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

function numberCentury(year) {
  let currentCentury = Math.floor(year / 100)
  return (year % 10 > 0) ? currentCentury + 1 : currentCentury
}

// EV New Solution

const suffixes = { 0: 'th', 
                   1: 'st',
                   2: 'nd',
                   3: 'rd',}


function beginning(year) {
  year = year / 100
  return Number.isInteger(year) ? year : Math.ceil(year);
}

function century(year) {
  let mainYear = String(beginning(year));
  
  if (mainYear.endsWith('13') || mainYear.endsWith('12') || mainYear.endsWith('11')) {
    mainYear += suffixes['0'];
  } else {
    let lastNum = mainYear.slice(-1);
    mainYear += suffixes[lastNum];
  }
  
  return mainYear;
}


/*
console.log(numberCentury(2000));        // "20th"
console.log(numberCentury(2001));        // "21st"
console.log(numberCentury(1965));        // "20th"
console.log(numberCentury(256));         // "3rd"
console.log(numberCentury(5));           // "1st"
console.log(numberCentury(10103));       // "102nd"
console.log(numberCentury(1052));        // "11th"
console.log(numberCentury(1127));        // "12th"
console.log(numberCentury(11201));       // "113th"
*/

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
