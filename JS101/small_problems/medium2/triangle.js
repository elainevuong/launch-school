/* Triangle
Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.
*/

function triangle(num1, num2, num3) {
  let sides = [num1, num2, num3].sort((a, b) => a - b);
  if ( sides.includes(0) ) return 'invalid';
  if ( (sides[0] + sides[1]) < sides[2] ) return 'invalid';
  if ( (sides[0] === sides[1]) && (sides[1] === sides[2]) ) return 'equilateral';
  if ( (sides[0] === sides[1]) || (sides[1] === sides[2]) ) return 'isosceles';
  return 'scalene'; 
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
