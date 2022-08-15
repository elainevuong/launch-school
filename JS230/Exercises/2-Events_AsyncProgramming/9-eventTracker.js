/*
Implement a function that tracks events on a web page by wrapping a 
callback function in a function that adds each event to a tracker object 
before invoking the callback. In other words, your function should take 
a callback function as an argument and return a new function that:

Records the event, if the specific event hasn't been recorded before.
Executes the original callback function.

blue, red, orange green
*/


const divRed = document.querySelector('#red');
const divBlue = document.querySelector('#blue');
const divOrange = document.querySelector('#orange');
const divGreen = document.querySelector('#green');

const tracker = (() => {
  const events = [];
  return {
    list() {
      return events.slice();
    },
    elements() {
      return this.list().map(({target}) => target);
    },
    add(event) {
      events.push(event);
    },
    clear() {
      events.length = 0;
      return events.length;
    },
  };
})();

function track(callback) {
  function isEventTracked(events, event) {
    return events.includes(event);
  }

  return event => {
    if (!isEventTracked(tracker.elements(), event)) {
      tracker.add(event);
    }

    callback(event);
  };
}

divRed.addEventListener('click', track(event => {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(event => {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(event => {
  document.body.style.background = 'green';
}));

  /*
  console.log(tracker.list().length);                                      // 4
  console.log(tracker.elements());                                         // [div#blue, div#red, div#orange, div#green]
  console.log(tracker.elements()[0] === document.querySelector('#blue'));  // true
  console.log(tracker.elements()[3] === document.querySelector('#green')); // true
  console.log(tracker.list()[0]);                                          // click { target: div#blue, buttons: 0, clientX: 195, clientY: 190, layerX: 195, layerY: 190 }
  console.log(tracker.clear());                                            // 0
  console.log(tracker.list());                                             // []
  console.log(tracker.list()[0] = 'abc');                                  // 
  console.log(tracker.list().length);                                      // 0
  */