/*
"A divisibility rule is a shorthand way of determining whether a given integer is divisible by a fixed divisor without performing the division, usually by examining its digits."

When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

1, 10, 9, 12, 3, 4 because:

10 ^ 0 = 1      ->  1 (mod 13)
10 ^ 1 = 10     -> 10 (mod 13)
10 ^ 2 = 100    ->  9 (mod 13)
10 ^ 3 = 1000   -> 12 (mod 13)
10 ^ 4 = 10000  ->  3 (mod 13)
10 ^ 5 = 100000 ->  4 (mod 13)

Then the whole pattern repeats. Hence the following method:

Multiply
the right most digit of the number with the left most number in the sequence shown above,
the second right most digit with the second left most digit of the number in the sequence.
The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.

Example:
What is the remainder when 1234567 is divided by 13?

7      6     5      4     3     2     1  (digits of 1234567 from the right)
×      ×     ×      ×     ×     ×     ×  (multiplication)
1     10     9     12     3     4     1  (the repeating sequence)
Therefore following the method we get:

7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

We repeat the process with the number 178:

8x1 + 7x10 + 1x9 = 87

and again with 87:

7x1 + 8x10 = 87

From now on the sequence is stationary (we always get 87) and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13 ( i.e 9).

Task:
Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.

thirt(1234567) calculates 178, then 87, then 87 and returns 87.

thirt(321) calculates 48, 48 and returns 48
*/

/*
Process the Problem
Input: an Integer
Output: a Stationary Number

Rules:
  - Given an Integer, find its Stationary Number
    - Take the Number, Convert it to a String, then Into an Array of Digits, and Reverse its Digits
    - 13 Array of Modulos: [1, 10, 9, 12, 3, 4]
      - 1234567 -> 7654321
        - Getting to the correct Index in Array of Modulos -> use the Index number from the Digit Array, Modulo 6
          - Return a New Array, which will consist of the Digit Array * the 13 Array of Modulos
              - ** Make sure to convert the Individual Digits to Numbers **
            - Reduce the new Array into Single Sum 
            - Check to see if thirt(on the new single Sum) is stationary
              - If it is Stationary, return the Stationary Number
              - Otherwise, call `thirt` again
*/

function thirt(number) {
  let attempt1 = calculateStationary(number);
  let attempt2;
  
  do {
    attempt2 = calculateStationary(attempt1);
    
    if (attempt1 !== attempt2) {
      attempt1 = calculateStationary(attempt2);
    }
  
  } while (attempt1 !== attempt2);
  
  return attempt1;
}

function calculateStationary(number) {
  const CONVERTER = [1, 10, 9, 12, 3, 4];
  let reversedDigits = String(number).split('').reverse();
  let newDigits = reversedDigits.map((number, index) => {
    index = index % 6;
    return number * CONVERTER[index];
  });
  
  let sum = newDigits.reduce((total, number) => total + Number(number), 0);

  return sum;                                   
}

console.log(thirt(1234567));      // calculates 178, then 87, then 87 and returns 87. 
console.log(thirt(178));          // 8 * 1 + 7 * 10 + 1 * 9 -> returns 87
console.log(thirt(321));          // calculates 48, 48 and returns 48
console.log(thirt(8529));         // calculates 79
console.log(thirt(85299258), 31)
console.log(thirt(5634), 57)
console.log(thirt(1111111111), 71)
console.log(thirt(987654321), 30)