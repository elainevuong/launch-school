/* After Midnight (Part 1)
The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use JavaScript's Date class methods.
*/

/*
Process the Problem
- Input - an integer, which can be a positive or negative number, including 0
- Output - the time of day in 24H Format
- Explicit Rules
  - Positive Number - the time is AFTER Midnight
  - Negative Number - the time is BEFORE MIDNIGHT

Total Number of Minutes in a Day 
  - 24 hours
  - 60 minutes
    => Total Number is 1,440 minutes

Converting from Negative Integers to Positive Integers
  -3    => 23:57
  1437  => 23:57
  -1437 => 00:03
  3     => 00:03
To convert from negative integers to positive integers, add 1,440 UNTIL the integer is positive

Computing the Number of Minutes
  - To compute the Minutes, take the Positive Integer and compute the remainder after dividing by 60
  - To compute the Hours, take the Positive Integer and round down the result of taking the Positive Integer / 24
  
Algorithm
0) Edge Case - if the integer is 0, return 00:00
1) Edge Case - if the integer is negative, convert it to a positive integer
2) Compute the Number of Hours
3) Compute the Number of Minutes
4) Return the String


*/
function timeOfDay(integer) {
  let hour = 0;
  let minute = 0;
  
  while (integer < 0) {
    integer += 1440
  }
  
  while (integer > 1440) {
    integer -= 1440
  }
    
  
  hour = Math.floor(integer / 60)
  minute = integer % 60
  
  return `${String(hour).padStart(2,0)}:${String(minute).padStart(2,0)}`;
  
}



console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");