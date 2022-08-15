 /* 
Name Swapping
Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

Examples:

swapName('Joe Roberts');    // "Roberts, Joe"
*/

function swapName(fullname) {
  let firstName = fullname.split(' ')[0]
  let lastName = fullname.split(' ')[1]
  return `${lastName}, ${firstName}`
}

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"


function swapLongName(fullname) {
  let nameArr = fullname.split(' ')
  let lastName = nameArr[nameArr.length - 1]
  let firstName = nameArr.slice(0, nameArr.indexOf(lastName)).join(' ');
  return `${lastName}, ${firstName}`
}
console.log(swapLongName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"

/* 
const swapName = (name) => {
  const [ firstName, lastName ] = name.split(" ")
  return `${lastName} ${firstName}`
}

*/