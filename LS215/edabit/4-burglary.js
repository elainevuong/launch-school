/*
Given three arguments ⁠— an object obj of the stolen items, 
the pets name and a value ⁠— return an object with that 
name and value in it (as key-value pairs).

The value argument will be a number.
*/

function addName(object, key, value) {
  object[key] = value;
  return object;
}

console.log(addName({}, "Brutus", 300));                            // returns { Brutus: 300 }
console.log(addName({ piano: 500 }, "Brutus", 400));                // returns { piano: 500, Brutus: 400 }
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)); // returns { piano: 500, stereo: 300, Caligula: 440 }

