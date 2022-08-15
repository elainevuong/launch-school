let context = {
  person: {
    firstname: "Elaine",
    lastname: "Vuong",
  },
}

document.addEventListener("click", () => {
  let source = document.querySelector("#person-template").innerHTML;
  let template = Handlebars.compile(source);
  let html = template(context);
  let destination = document.querySelector("#person");
  destination.innerHTML = html;
})