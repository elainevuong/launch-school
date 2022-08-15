/* Alyssa was asked to write an implementation of a rolling buffer. You can add and remove elements from a rolling buffer. However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer.

She wrote two implementations of the code for adding elements to the buffer. In presenting the code to her team leader, she said "Take your pick. Do you prefer push() or concat() for modifying the buffer?".

Is there a difference between these implementations, other than the method she used to add an element to the buffer? */

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

/* 
let buffer = [1, 2, 3, 4, 5]
let newElement = 6
let maxBufferSize = 5
buffer.push(newElement) => [1, 2, 3, 4, 5, 6]
since the length of the buffer is greater than the maxBufferSize
we will remove the first element from the array and return it
we then return the buffer

Using .push() - is a destructive function, which modifies the original buffer object


*/

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

/* 
when we use buffer.concat(newElement) - we return a NEW array, that is the result of
concatenating the buffer with the newElement.


// Launch School Solution
Yes, there is a difference. While both methods have the same return value, the first implementation mutates the argument represented by buffer. That is, the caller will see that the array is different when the function returns. The rollingBuffer2 implementation doesn't mutate the argument specified by the value of buffer
*/