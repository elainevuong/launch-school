/*
> let sectionElement = document.querySelector('section');
> makeBold(sectionElement, function(elem) {
    elem.classList.add('highlight');
  });

> sectionElement.classList.contains('highlight');
= true
> sectionElement.style.fontWeight;
= "bold"
*/

function makeBold(elem, callback) {
  elem.style.fontWeight = 'bold';
  callback(elem);
}

