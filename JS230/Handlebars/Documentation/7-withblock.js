let context = {
  city: {
    name: "San Francisco",
    summary: "San Francisco is the <b>cultural center</b> of <b>Northern California</b>",
    location: {
      north: "37.73,",
      east: -122.44,
    },
    population: 883305,
  },
}

document.addEventListener("click", () => {
  let source = document.querySelector("#entry-template").innerHTML;
  console.log(source);
  let template = Handlebars.compile(source);
  let html = template(context);
  console.log(html);
  let destination = document.querySelector('.entry'); // needs to be inserted into the 'div';
  destination.innerHTML = html;
})