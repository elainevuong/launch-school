// Without changing the behavior of the following code, remove the call to event.stopPropagation and refactor the result.

document.querySelector('html').addEventListener('click', () => {
  document.querySelector('#container').style = 'display: none';
});

document.querySelector('#container').addEventListener('click', event => {
  event.stopPropagation();
});

/*
When we click on the html, it causes the container ID to be hidden
When we click on the element with an id of container, we STOP the event propagation such that the Event Listener on `html` does not
trigger (if we did NOT have stop event propagation, then the Event Listener on html would be triggered on the bubbling phase
which would cause the container to be hidden)

Goals:
- When we click on HTML (or the area outside of the container) hide the container
- When we click on the Container, keep it as is

The refactored code uses the contains method to determine whether the event.target is the 
container element or one of its children. If event.target isn't part of the container element, 
the program hides the container.
*/

// Launch School Solution
document.querySelector('html').addEventListener('click', event => {
  let container = document.querySelector("#container");
  if (!container.contains(eventTarget)) {
    container.style = 'display: none';
  }
})

// Elaine's Solution
document.querySelector('html').addEventListener('click', event => {
  let container = document.querySelector('#container');

  if (container.contains(eventTarget)) {
    return;
  }

  container.style = 'display: none';
})
