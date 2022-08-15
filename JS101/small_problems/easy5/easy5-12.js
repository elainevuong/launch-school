/* After Midnight Part 2

As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

Process the Problem
- Input - a time of day in 24H Hour
- Output - the Number of Minutes before and After Midnight

*/


function beforeMidnight(time) {
  let hours = Number(time.slice(0, 2));
  let minutes = Number(time.slice(3,5));
  
  if ((hours === 0 && minutes === 0) || (hours === 24 && minutes === 0)) return 0;
  
  return 1440 - afterMidnight(time); 
}

function afterMidnight(time) {
  let hours = Number(time.slice(0, 2));
  let minutes = Number(time.slice(3,5));
  
  if ((hours === 0 && minutes === 0) || (hours === 24 && minutes === 0)) return 0;
  
  return (hours * 60 + minutes);
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);

console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);

console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
