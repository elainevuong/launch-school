/*
Write a function that receives two strings and returns n, where n is equal to the number of characters 
we should shift the first string forward to match the second. The check should be case sensitive.

For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 
characters forward to produce the second string, so 5 would be returned.

If the second string isn't a valid rotation of the first string, the method returns -1.

"coffee", "eecoff" => 2
"eecoff", "coffee" => 4
"moose", "Moose" => -1
"isn't", "'tisn" => 2
"Esham", "Esham" => 0
"dog", "god" => -1

Process the Problem
Input - Two Strings
Output - A Number. The number should equal to the number of characters we shift the first string forward 
to match the second. If the second string is not a valid rotation of the first string, return -1.

Rules
  - Case Sensitive Shift
  
coffee, 'eecoff' ->
  - No Rotation - coffee;
    - check to see if coffee === 'eecoff' - if it does, return 0;
      coffee.slice(0)
  - First Rotation
      ecoffe
      coffee.slice(-1) + coffee.slice(0, string.length - 1)
  - Second Rotation
      coffee.slice(-2) + coffee.slice(0, string.length - 2)
      eecoff
  - Third Rotation
      feecof
      coffee.slice(-3) + coffee.slice(0, string.length - 3);
  - Fourth Rotation
      ffeeco
      coffee.slice(-4) + coffee.slice(0, string.length - 4);
  - Fifth Rotation
      offeec
      coffee.slice(-5) + coffee.slice(0, string.length - 5);

      
Start at 1, end at string.length - 1;

Rotate from 1 up to the Number of Letters - 1.
With each Rotation check to see if the Word is Equal to the Output String
  - If it is, return the current Index Number
If it is not, return -1


Edge Cases - check for lengths
*/

function shiftedDiff(first,second) {
  if (first.length !== second.length) return -1;
  if (first === second) return 0;
  
  for (let shift = 1; shift <= first.length; shift++) {
    let firstSlice = shift * -1
    let length = first.length;
    let rotation = first.slice(firstSlice) + first.slice(0, length - shift);
    if (rotation === second) return shift;
  }
  
  return -1;
}

console.log(shiftedDiff('coffee', 'eecoff')); // 2
console.log(shiftedDiff('eecoff', 'coffee')); // 4
console.log(shiftedDiff('moose', 'Moose'));   // -1
console.log(shiftedDiff("isn't", 'tisn'));    // -1
console.log(shiftedDiff('Esham', 'Esham'));   // 0
console.log(shiftedDiff('dog', 'god'));       // -1