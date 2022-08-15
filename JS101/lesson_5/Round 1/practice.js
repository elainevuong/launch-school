/* 
// Question 1
Order the following array of number strings by descending numeric value 
(largest number value to smallest)? 

let arr = ['10', '11', '9', '7', '8'];

// Long Form Method
arr.sort((a, b) => {
  a = Number(a);
  b = Number(b);
  return b - a;
})

console.log(arr);

// Short Form Method
let arr1 = ['10', '11', '9', '7', '8'];
arr1.sort((a, b) => Number(b) - Number(a))
console.log(arr1);

// Question 2
// order the following array of objects based on the year of publication of 
// each book, from the earliest to the latest?

let books = [
  { title: 'One Hundred Years of Solitude', 
    author: 'Gabriel Garcia Marquez', 
    published: '1967' },
  { title: 'The Great Gatsby', 
    author: 'F. Scott Fitzgerald', 
    published: '1925' },
  { title: 'War and Peace', 
    author: 'Leo Tolstoy', 
    published: '1869' },
  { title: 'Ulysses', 
    author: 'James Joyce', 
    published: '1922' },
  { title: 'The Book of Kells', 
    author: 'Multiple Authors', 
    published: '800' },
];

books.sort((a, b) => {
  return Number(a.published) - Number(b.published);
});

console.log(books);

// Question 3

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]);

let arr2 = [{ first: ['a', 'b', 'c'], 
              second: ['d', 'e', 'f'] }, 
            { third: ['g', 'h', 'i'] }];
console.log(arr2[1]['third'][0]);
console.log(arr2[1].third[0]);

let arr3 = [['abc'], 
            ['def'], 
            { third: ['ghi'] }];
console.log(arr3[2].third[0][0]);

let obj1 = { a: ['d', 'e'], 
             b: ['f', 'g'], 
             c: ['h', 'i'] };
console.log(obj1.b[1]);

let obj2 = { first: { d: 3 }, 
             second: { e: 2, f: 1 }, 
             third: { g: 0 }}

console.log(Object.keys(obj2.third)[0]);

// Question 4
// Change the value 3 to a 4
let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4
console.log(arr1)

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4
console.log(arr2)

let obj1 = { first: [1, 2, [3]] };
obj1['first'][2][0] = 4
console.log(obj1);

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4
console.log(obj2);

// For In -> iterates over enumerable properties (i.e. indices and keys)
// For Of -> iterates over the values of any iterable collection

let munsters = {
  Herman:   { age: 32, gender: 'male' },
  Lily:     { age: 30, gender: 'female' },
  Grandpa:  { age: 402, gender: 'male' },
  Eddie:    { age: 10, gender: 'male' },
  Marilyn:  { age: 23, gender: 'female'}
};

// Short Form
console.log(Object.values(munsters).reduce((accum, member) => {
    if (member.gender === 'male') {
      return accum + member.age;
    } else {
      return accum;
    }
  }, 0)
);

// Long Form 
console.log(Object.values(munsters).reduce(function (accum, member) {
  if (member.gender === 'male') {
    return accum + member.age;
    } else {
    return accum;
    }  
  }, 0)
);  

// For In Loop (iterates over the KEYs)
let totalMaleAge = 0

for (let member in munsters) {
  if (munsters[member].gender === 'male') {
    totalMaleAge += munsters[member].age;
  }
};

console.log(totalMaleAge);

// For Each with Accumulator
let memberDetails = Object.values(munsters);
let totalMaleAge = 0;

memberDetails.forEach(member => {
  if (member.gender === 'male') {
    totalMaleAge += member.age;
  }
});

// Exploration For Of (Values) and For In (Keys/Indices)
let arr1 = [1, 222, 3, 43, 5];

for (let number of arr1) {
  console.log(number)
} // => 1, 222, 3, 43, 5

for (let number in arr1) {
  console.log(number)
} // => 0 1 2 3 4

// Exploring Reduce Functionality
console.log(arr1.reduce((accum, val) => accum + val, 0));

//reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)
//reduce(function callbackFn(previousValue, currentValue, currentIndex, array) { ... }, initialValue)


let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let total = 0
for (let member of Object.values(munsters)) {
  if (member.gender === 'male') {
    total += member.age;
  }
}

console.log(total);
// for / of loop, and if statement

// ForEach

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

total = 0

Object.values(munsters).forEach ((member) => {
  if (member.gender === 'male') {
    total += member.age;
  }
})

console.log(total);

// Reduce

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// Short Form with Variable Assignment
total = Object.values(munsters).reduce((accum, current) => {
          if (current.gender === 'male') {
            return accum + current.age;
          } else {
            return accum;
          }
        }, 0);

console.log(total);


// Long Form 
console.log(Object.values(munsters).reduce(function (accum, member) {
if (member.gender === 'male') {
  return accum + member.age;
  } else {
  return accum;
  }  
}, 0)
);



// Problem 6

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// for of and iteration through Object.entries

for (let [name, details] of Object.entries(munsters)) {
  console.log(`${name} is a ${details.age}-year-old ${details.gender}`);
}

// (Name) is a (age)-year-old (male or female).

Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1].age;
  let gender = entry[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
})

// Problem 7

let a = 2;
let b = [5, 8];
let arr = [a, b];

// arr = [2, [5, 8]];

arr[0] += 2; // arr = [4, [5, 8]];
console.log(arr);
arr[1][0] -= a; // arr = [4, [3, 8]];

console.log(arr);


// Problem 8

// Using the forEach method, write some code to output all vowels 
// from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

VOWELS = 'aeiou';

Object.values(obj).forEach((wordArray) => {
  wordArray.forEach((word) => {
    word.split('').forEach((letter) => {
      if (VOWELS.includes(letter)) {
        console.log(letter);
      }
    })
  })
})

// Problem 9
// Given the following data structure, return a new array with the same structure, 
// but with the values in each subarray ordered -- alphabetically or numerically 
// as appropriate -- in ascending order. 

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// alphabetical sort - use regular .sort()
// numerical sort - use sort((a, b) => a - b);

newArr = arr.map((subArray) => {
  if (typeof(subArray[0]) === 'string') {
    return subArray.slice().sort();                 // .slice() for obtaining a copy
  } else {
    return subArray.slice().sort((a, b) => a - b);
  }
}) 

// map - maintains the structure, and returns a NEW ARRAY
// sort -> sorts each subarray
// if it's letters, maintain the regular sort order
// if it's a number, sort using the ascending numerical method

console.log(newArr);

// Problem 10 - descending order sort

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let copyArr = arr.slice()

newArr = copyArr.map((subArray) => {
  if (typeof(subArray[0]) === 'string') {
    return subArray.slice().sort().reverse();
  } else {
    return subArray.slice().sort((a, b) => b - a);
  }
});

// LS Solution
arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});

// => [ [ 'c', 'b', 'a' ], [ 11, 2, -3 ], [ 'green', 'blue', 'black' ] ]

console.log(newArr)


// Problem 11

// Given the following data structure, use the map method to return a new array 
// identical in structure to the original but, with each number incremented 
// by 1. Do not modify the original data structure.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(obj => {
              let incrementedObj = {};

              for (let key in obj) {
                incrementedObj[key] = obj[key] + 1;
              }

              return incrementedObj;
            })

console.log(newArr);
console.log(arr);

// Problem 12
Given the following data structure, use a combination of methods, including filter, 
to return a new array identical in structure to the original, but containing 
only the numbers that are multiples of 3. 

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// Long Form Solution
let newArr = arr.map((subArray) => {
  return subArray.filter((elem) => {
    if (elem % 3 === 0) {
      return elem;
    }
  });
})

console.log(newArr);

let newArr2 = arr.map((subArray) => {
  return subArray.filter((elem) => elem % 3 === 0 );
});

console.log(newArr2);
*/

// Problem 13

// Given the following data structure, sort the array so that the sub-arrays are 
// ordered ascending, based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
});

// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

