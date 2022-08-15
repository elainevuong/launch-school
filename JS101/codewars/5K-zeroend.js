/* 
Write an algorithm that takes an array and moves all of the zeros to 
the end, preserving the order of the other elements.
*/

var moveZeros = function (arr) {
  let nonZero = []
  let zeroArr = []
  arr.forEach((elem) => {
    if (elem === 0) {
      zeroArr.push(elem);
    } else {
      nonZero.push(elem);
    }
  });
  
  return nonZero.concat(zeroArr);

}