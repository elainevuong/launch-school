// Creating a `forEach` Function
/*
function forEach(arr, callback) {
  for (let index = 0; index < arr.length; index += 1) {
    callback(arr[index])
  }
}

let arr = [1, 2, 3, 4];
forEach(arr, value => console.log(value * value));
arr.forEach(value => console.log(value * value));
*/

// Defining the Execution Context
class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
[1, 2, 3].forEach(foo.showItem, foo);
 // [4, 5, 6].forEach(foo.showItem) - TypeError: Cannot read property 'prefix' of undefined

 // Creating a `forEach` Function that Accepts a Context Object

/*
function forEach(array, callback, context) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(context, array[index])
  }
}


forEach([1, 2, 3], foo.showItem, foo);
let arr = [1, 2, 3, 4];
forEach(arr, value => console.log(value * value));
// forEach([4, 5, 6], foo.showItem); // TypeError: Cannot read property 'prefix' of undefined
*/

// Adding the Index and Array Arguments

/*
["a", "b", "c"].forEach(function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});
*/

function forEach(array, callback, context) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(context, array[index], index, array)
  }
}

forEach(["a", "b", "c"], function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});

/* Expected Output
After a comes b
After b comes c
After c comes undefined
*/