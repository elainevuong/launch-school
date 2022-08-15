/*
Write a function that displays a four-pointed diamond in an nxn grid, where 
n is an odd integer supplied as an argument to the function. You may assume 
that the argument will always be an odd integer.

Examples:
diamond(1);
*

diamond(3);
 *
***
 *

diamond(7);
   *
  ***
 *****
*******
 *****
  ***
   *


diamond(9);
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

Process the Problem & Examples
- first row has one star
- each subsequent row has the number of stars increased by two
- the row with N number of stars is the mid row
  - for Diamond(3), the middle row is row 2
  - for Diamond(9), the middle row is row 5
- after the middle row is reached, the number of stars decreases by two

Diamond 9:
1 - 3 Space, 1 Star
2 - 2 Space, 3 Star
3 - 1 Space, 5 Star
4 - 0 Space, 7 Star
6 - 1 Space, 5 Star
7 - 2 Space, 3 Star
8 - 3 Space, 1 Star

Diamond 9:
1 - 4 Space, 1 Star
2 - 3 Space, 3 Star
3 - 2 Space, 5 Star
4 - 1 Space, 7 Star
5 - 0 Space, 9 Star
6 - 1 Space, 7 Star
7 - 2 Space, 5 Star
8 - 3 Space, 3 Star
9 - 4 Space, 1 Star

Data Structure
Variables 

Algorithm
Variables
- NumSpaces = RoundDown(N / 2);
- NumStars = 1; each time it increases or decreases by two

1A) Declare a Variable NumSpaces, initialize it to RoundDown(N / 2)
1B) Declare a Variable Num Stars, initialize it to the value of 1

2) while loop NumStars > 0
  - print NumSpaces
  - print NumStars
  if (NumStars < N)
    NumStars += 2;
    Num Spaces -= 1;
  else if (Numstars === N) 
    NumStars -= 2;
    NumSpaces += 1;
*/

function diamond(number) {
  let numSpaces = Math.floor(number / 2);
  let numStars = 1;

  while (numStars < number) {
    console.log(' '.repeat(numSpaces) + '*'.repeat(numStars));
    numStars += 2;
    numSpaces -= 1;
  }

  while (numStars > 0) {
    console.log(' '.repeat(numSpaces) + '*'.repeat(numStars));
    numStars -= 2;
    numSpaces += 1;
  }
}

diamond(3);
diamond(5);
diamond(7);
diamond(9);