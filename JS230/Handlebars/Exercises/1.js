/*
// 1. Grab Source (get its `innerHTML`);
let source = document.querySelector('#intro-template').innerHTML // all the inner HTML within the handlebars Script

// 2. Create the Template Function by Compiling the Source using Handlebars
let template = Handlebars.compile(source);

// 3. Create the Context Object
let context = {
	name: "Elaine",
};

// 4. Obtain the HTML after Passing the Template the Context Object
let html = template(context);

// 5. Get the Element to set the new HTML onto
let destination = document.querySelector('.intro');

// 6. Set the new HTML
destination.innerHTML = html;
*/

document.addEventListener("click", () => {
  let source = document.querySelector("#intro-template").innerHTML;
  let template = Handlebars.compile(source);
  let context = {
    name: "Elaine",
  }
  let html = template(context);
  let destination = document.querySelector('.intro'); // needs to be inserted into the 'div';
  destination.innerHTML = html;
})
