/*
Write a randomizer function that accepts n callbacks and calls each callback at some 
random point in time between now and 2 * n seconds from now. For instance, if the 
caller provides 5 callbacks, the function should run them all sometime within 10 seconds.

While running, randomizer should log the elapsed time every second: 1, 2, 3, ..., 2 * n.
*/

/*
function randomizer(...callbacks) {
  let range = callbacks.length * 2;
  generateNumberLogger(range);

  callbacks.forEach(callback => {
    let randomNum = generateRandomNum(range)
    setTimeout(callback, randomNum * 1000);
  });
}

function generateNumberLogger(range) {
  for (let number = 1; number <= range; number++) {
    setTimeout(() => {
      console.log(number);
    }, number * 1000);
  }
}

function generateRandomNum(range) {
  return Math.ceil(range * Math.random());
}

function randomizer(...callbacks) {
  let end = callbacks.length * 2;
  let start = 0;
  if (callbacks.length === 0) return;

  const secondsCounter = setInterval(() => {
    start++;
    console.log(start);

    if (start === end) {
      clearInterval(secondsCounter);
    }
  }, 1000)

  callbacks.forEach(callback => {
    let randomDelay = Math.floor(Math.random() * end) * 1000;
    setTimeout(callback, randomDelay);
  })
}
*/

function randomizer(...callbacks) {
  let range = callbacks.length * 2;

  for (let num = 1; num <= range; num++) {          
    setTimeout(() => console.log(num), num * 1000);
  }

  for (let index = 0; index < callbacks.length; index++) {
    let randomNum = Math.floor(range * Math.random()) + 1;
    setTimeout(callbacks[index], randomNum * 1000);
  }
}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

randomizer(callback1, callback2, callback3);