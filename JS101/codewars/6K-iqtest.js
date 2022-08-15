/*
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

Process the Problem
- Input - a String of integers separated by spaces
- Output - a 1-based index position that indicates the index of the number that is 'different'
- Explicit Rule
  - Majority Odd - if the majority of the numbers are odd, then the 'different' number is the 
    number that is even
  - Majority Even - if the majority of the numbers are even, then the 'different' number is
    the number that is odd

Data Structure
- Use a Flip Tracker, Initialize it to Zero
  - If the Integer is positive, increment the Flip Tracker
  - If the Integer is negative, decrement the Flip Tracker
    - If the Flip Tracker is > 0, then the 'different' value is odd
    - If the Flip Tracker is < 0, then the 'different' value is even
- Use an Object
  -> key - be even or odd
  -> value - be the index of the occurrence + 1

Algorithm
Create a Flip Tracker variable and initialize it to the value 0
Create an empty Position Object
Given a String of Integers separated by Spaces
  - Split the Integers into an Array of Numbers separated by Spaces
  - Iterate through each of the Integers in the Array
    - If the Integer is Even
      - Increment the Flip Tracker
      - Add 'even' as a key to the Position Object, with a value which is the: Index of the 
        Current Element + 1
    - Otherwise (the Integer is Odd)
      - Decrement the Flip Tracker
      - Add 'odd' as a key to the Position Object, with a value which is the: Index of the 
        Current Element + 1
If Flip Tracker is Greater than 0, return the value of the 'odd' Position Object property
If Flip Tracker is Less than 0, return the value of the 'even' Position Object property
*/


function iqTest(numbers){
  let flipTracker = 0
  let positionObj = {}
  numbers.split(' ').forEach((elem, index) => {
    if (elem % 2 === 0) {
      flipTracker += 1;
      positionObj['even'] = index + 1;
    } else {
      flipTracker -= 1;
      positionObj['odd'] = index + 1;
    }
  });
  
  return flipTracker > 0 ? positionObj['odd'] : positionObj['even'];
  
}