/*
Right Triangles
Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

Process the Problem
Input: n, a positive integer
Output: logs a right triangle, whose sides each have n stars

5 Triangle:
4 Spaces, 1 Star  = Index = 0;
3 Spaces, 2 Stars = Index = 1;
2 Spaces, 3 Stars = Index = 2;
1 Spaces, 4 Stars = Index = 3;
0 Spaces, 5 Stars = Index = 4;

*/

function triangle(number) {
  for (let numStar = 1; numStar <= number; numStar++) { 
    let numSpaces = number - numStar;
    console.log(`${' '.repeat(numSpaces)}${'*'.repeat(numStar)}`);
  }
}


triangle(5);

/*
    *
   **
  ***
 ****
*****
*/

triangle(9);
/*
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
*/