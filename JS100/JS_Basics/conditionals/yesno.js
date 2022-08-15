let randomNumber = Math.round(Math.random());

// Write an if statement that logs 'Yes!' if randomNumber is 1, 
// and 'No.' if randomNumber is 0.

if (randomNumber) {
  console.log('Yes!');
} else {
  console.log('No');
}

(randomNumber) ? console.log('Yes!') : console.log('No');

console.log(randomNumber ? 'Yes!' : 'No');

// condition ? expression1 : expression2

