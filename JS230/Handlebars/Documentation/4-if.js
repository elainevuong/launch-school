let context = {
  author: true,
  firstName: "Elaine",
  lastName: "Vuong",
}

/*
Handlebars.registerHelper('loud',  function(string) {
  return string.toUpperCase();
});
*/

Handlebars.registerHelper('loud',  string => string.toUpperCase());

document.addEventListener("click", () => {
  let source = document.querySelector("#entry-template").innerHTML;
  console.log(source);
  let template = Handlebars.compile(source);
  let html = template(context);
  console.log(html);
  let destination = document.querySelector('.entry'); // needs to be inserted into the 'div';
  destination.innerHTML = html;
})
