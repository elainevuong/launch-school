Handlebars.registerHelper('list', function(people, options) {
  let itemsAsHtml = people.map(person => "<li>" + options.fn(person) + "</li>");
  let result = "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>"
  return new Handlebars.SafeString(result);
});

let context = {
  people: [
    {
      firstname: "Yehuda",
      lastname: "Katz",
    },
    {
      firstname: "Carl",
      lastname: "Lerche",
    },
    {
      firstname: "Alan",
      lastname: "Johnson",
    },
  ],
}

document.addEventListener("click", () => {
  let source = document.querySelector("#list-template").innerHTML;
  let template = Handlebars.compile(source);
  let html = template(context);
  let destination = document.querySelector("#list-id");
  destination.innerHTML = html;
})