/* 
Cute Angles
Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

Examples:

Copy Code
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"

Edge Cases
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

Note: your results may differ slightly depending on how you round values, but should generally be within a second or two of the results shown.
*/

/* 
Process the Problem
- Input - a floating point number, between 0 and 360 degrees
- Output - a string, representing an angle in degrees, minutes, and seconds
- Explicit Rules
  - DD˚MM'SS"
  - There are 60 minutes in a degree, and 60 seconds in a minute
- Implicit Rules
  - Edge Case #1 - 1 - return 0°00'00"
  - Edge Case #1 - 360 - return 360°00'00" or 0°00'00"
  - Rounded, Whole Numbers - returns itself -> dms(30);           // 30°00'00"
  
  - dms(76.73);        // 76°43'48"
    - 76       =>      => 76˚
    - .73 * 60 => 43.8 => 43'
    - .8  * 60 =>      => 48"
    
  - dms(254.6);        // 254°35'59"
    - .6 * 60  => 35'59" => would argue that this should return 36'? **
    
  - dms(93.034773);    // 93°02'05"
    - 93                       => 93˚
    - 0.034773 * 60 => 2.08638 => 02'
    - 0.08638  * 60 => 5.1828  => 05" 

Examples/Test Cases

Data Structure
  - Floating Point Number
  - Degrees, Minutes, and Seconds
  - String Interpolation returned as a String

Algorithm

** The remainder operator (%) returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend **
  - Check Edge Cases
    - If the input is 360, return 360°00'00" or 0°00'00"
    - If the input is 0, return 0°00'00"
    - If the input is a rounded whole number between 0 and 360, return [the number]°00'00"
    
  - 1) Determining the Degrees
    - Initialize a new variable to represent the degrees
    - Given the input, round down to the nearest whole number. Assign the result to represent the degrees.
  
  - 2) Determining the Minutes
    - In order to perform the operation to determine the number of minutes, we need to obtain the number
      AFTER the decimal point of the input number provided
    - Initialize a new variable to represent the minutes
    - a) Use the Input Number as the first operand, and the Number 1 as the second operand, and perform a remainder operation (%) in order to get the remainder AFTER the decimal point
    - Multiply the result of performing step a) by 60 to determine the Number of Minutes
    
  - 3) Determining the Number of Seconds
    - In order to perform the operation to determine the number of degrees, we need to obtain the number
      AFTER the decimal point of the MINUTE number computed in Step 2
    - Initialize a new variable to represent the seconds
    - b) Use the Minute Number as the first operand, and the Number 1 as the second operand, and perform a remainder operation (%) in order to get the remainder AFTER the decimal point
    - Multiply the result of performing step b) by 60 to determine the Number of Seconds

*/
// EV Solution
function dms(angle) {
  if (angle === 0) return `0°00'00"`
  if (angle === 360) return `360°00'00" or 0°00'00"`
  if (Number.isInteger(angle)) return `${angle}°00'00"`
  
  let degrees = addZeroes(String(parseInt(angle)));
  let minutes = angle % 1 * 60
  let seconds = minutes % 1 * 60
  
  minutes = addZeroes(String(parseInt(minutes)));
  seconds = addZeroes(String(parseInt(seconds)));
  
  return `${degrees}°${minutes}'${seconds}`
}

function addZeroes(output) {
  return output.length === 1 ? '0' + output : output;
}

function dms(angle) {
  
  if (angle === 0) return "0°00'00\""
  
  if (angle === 360) return "360°00'00\" or 0°00'00\""
  
  let degrees = getDegrees(angle);
  let minutes = getMinutes(angle);
  let seconds = getSeconds(minutes);
  
  return format(degrees) + '°' +  
         format(minutes) + "'" + 
         format(seconds) + '"'
}

function getDegrees(angle) {
  return Math.floor(angle);
}

function getMinutes(angle) {
  return (angle % 1) * 60 ;
}

function getSeconds(minute) {
  return (minute % 1) * 60 ;
}

function format(number) {
  if (number < 10) {  // denotes single digits
    return '0' + String(Math.floor(number)); 
  }
  return String(Math.floor(number));
  
}


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"

console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

// Array Destructuring
function swap(array) {
  let first = 0;
  let last = array.length - 1;
  [array[first], array[last]] = [array[last], array[first]];
  return array;
}


console.log(swap([1, 2, 3, 4])); // returns [4, 2, 3, 1] (destructive)