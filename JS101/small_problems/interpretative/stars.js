/*
Write a function that displays an 8-pointed star in an NxN grid, 
where N is an odd integer that is supplied as an argument to the function. 
The smallest such star you need to handle is a 7x7 grid (i.e., when N is 7).

star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

Process the Problem
What to Write: Function
Input: a Number
Output: an 8 Pointed Star - the smallest star is 7x7

7x7 Star:

Line 1: 1 *,     2 space, 1 *,     2 space, 1 *             : Stars = 0, 3, 6
Line 2: 1 Space, 1 Star,  1 Space, 1 Star,  1 Space, 1 Star : Stars = 1, 3, 5
Line 3: 2 Space, 3 Star                                     : Stars = 2, 3, 4
Line 4: 7 Star                                              : Stars = 0, 1, 2, 3, 4, 5, 6
Line 5: 2 Space, 3 Star, 2 Space                            : Stars = 2, 3, 4
Line 6: 1 Space, 1 Star, 1 Space, 1 Star, 1 Space, 1 Star   : Stars = 1, 3, 5
Line 7: 1 *,     2 space, 1 *,     2 space, 1 *             : Stars = 0, 3, 6


*/

