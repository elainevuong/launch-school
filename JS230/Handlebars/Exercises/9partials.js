Handlebars.registerPartial(
  "person", 
  "{{person.name}} is {{person.age}} years old. <br>"
)

let context = {
  persons: [
  { name: "Nils", age: 20 },
  { name: "Teddy", age: 10 },
  { name: "Nelson", age: 40 },
  ],
}

document.addEventListener("click", () => {
  let source = document.querySelector("#person-template").innerHTML;
  let template = Handlebars.compile(source);
  let html = template(context);
  let destination = document.querySelector("#person-id");
  destination.innerHTML = html;
})