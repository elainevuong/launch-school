function repeat(num, string) {
  new_string = ''
  for (let i = 0; i < num; i += 1) {
    new_string += string
  }
  return new_string
}

function repeat1(num, string) {
  repeated = ''

  counter = 0

  while (counter < num) {
    repeated += string
    counter += 1
  }
  return repeated
}

console.log(repeat1(3, 'ha')); // 'hahaha'