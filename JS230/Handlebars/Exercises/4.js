Handlebars.registerHelper("capitalize", function(string) {
  if (string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  return '';
});

let context = {
  name: "elaine",
}

document.addEventListener("click", () => {
  let source = document.querySelector("#capitalize-template").innerHTML;
  let template = Handlebars.compile(source);
  let html = template(context);
  let destination = document.querySelector("#capitalize");
  destination.innerHTML = html;
})