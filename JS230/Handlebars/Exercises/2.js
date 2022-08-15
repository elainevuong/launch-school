let context = {
  cities: [
    {
      name: "New York City",
      population: 8623000
    },
    {
      name: "Los Angeles",
      population: 3971000
    },
  ]
};

document.addEventListener("click", () => {
  let source = document.querySelector('#city-template').textContent;
  let template = Handlebars.compile(source);
  let html = template(context);
  let destination = document.querySelector('#cities');
  destination.innerHTML = html;
})

/*
let source = document.querySelector("#intro-template").innerHTML;
let template = Handlebars.compile(source);
let context = {
  name: "Elaine",
}
let html = template(context);
let destination = document.querySelector('.intro'); // needs to be inserted into the 'div';
destination.innerHTML = html;
*/