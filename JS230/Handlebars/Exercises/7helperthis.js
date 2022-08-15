let context = 
{
  people: [
    {
      firstname: "Elaine",
      lastname: "Vuong",
    },
    {
      firstname: "Linda",
      lastname: "Chen",
    },
  ],
}

Handlebars.registerHelper("loud", name => name.toUpperCase());
Handlebars.registerHelper("quiet", name => name.toLowerCase());

document.addEventListener("click", () => {
  let source = document.querySelector("#people-template").innerHTML;
  let template = Handlebars.compile(source);
  let html = template(context);
  let destination = document.querySelector("#people");
  destination.innerHTML = html;
})