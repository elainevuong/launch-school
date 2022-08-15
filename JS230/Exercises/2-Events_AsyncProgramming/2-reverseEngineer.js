// Without changing the behavior of the following code, remove the call to 
// event.stopPropagation and refactor the result.


/* When the user clicks anywhere on the page outside the element with an id of container, 
the code hides the container element. It uses event.stopPropagation to prevent the click 
from hiding the container element when the user clicks the container itself or a child of the container. */

document.querySelector('html').addEventListener('click', () => {
  document.querySelector('#container').style = 'display: none';
});

document.querySelector('#container').addEventListener('click', event => {
  // event.stopPropagation();

});

// Solution - if the container does NOT contain the event.target (meaning we did NOT click within the container)
// Then we want to hide it (means we clicked outside)

/*
The refactored code uses the contains method to determine whether the event.target is the 
container element or one of its children. If event.target isn't part of the container element, 
the program hides the container.
*/

document.querySelector('html').addEventListener('click', (event) => {
  const container = document.querySelector('#container');

  if (!container.contains(event.target)) {
    container.style = 'display: none';
  }

});