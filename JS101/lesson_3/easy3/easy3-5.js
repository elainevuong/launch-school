/* Can you rewrite this function so it only has one return statement and does not 
explicitly use either true or false?*/

// Returns Using an Or
function isColorValid(color) {
  return (color === 'blue' || color === 'green')
}

// Returns Using an Arrow Function
const isColorValid = color => color === "blue" || color === "green";

// Returns Using an Array and .includes()
function isColorValid1(color) {
  let colors = ['blue', 'green']
  return colors.includes(color)
}

// Returns using a Ternary Operator
function isColorValid2(color) {
  return color === 'blue' || color === 'green' ? true : false;
}