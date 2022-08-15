// Implement a function that makes an element bold and allows the user of the function to optionally do something else with it.

document.addEventListener('DOMContentLoaded', () => {
  let sectionElement = document.querySelector('section');
  makeBold(sectionElement, function(elem) {  elem.classList.add('highlight');});
  console.log(sectionElement.classList.contains('highlight'));
  console.log(sectionElement.style.fontWeight);
})


function makeBold(elem, callback) {
  elem.style.fontWeight = 'bold';
  if (callback && typeof callback === 'function') {
    callback(elem);
  }
}