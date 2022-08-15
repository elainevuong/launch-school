function featured(num) {
  if (num >= 9876543201) return "There is no possible number that fulfills those requirements.";
  let startNum;
  for (let i = num + 1; i <= 9876543201; i++) {
    if (multipleSeven(i) && isOdd(i)) {
      startNum = i;
      break;
    }
  }

  for (startNum; startNum <= 9876543201; startNum += 14) {
    if (digitOccursOnce(startNum)) {
      return startNum;
    }
  }
}

function digitOccursOnce(num) {
  let numArr = String(num).split('').sort((a, b) => a - b);
  
  for (let i = 0; i < numArr.length - 1; i++) {
    if (numArr[i + 1] - numArr[i] === 0) return false;
  }  
  return true;
}

function multipleSeven(num) {
  return (num % 7 === 0) ? true : false;
}

function isOdd(num) {
  return (num % 2 === 1) ? true : false;
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."