let context = {
  people: [
    { firstname: "Elaine" },
    { firstname: "Linda" },
  ],
  prefix: "Hello",
}

document.addEventListener("click", () => {
  let source = document.querySelector("#intro-template").innerHTML;
  console.log(source);
  let template = Handlebars.compile(source);
  let html = template(context);
  console.log(html);
  let destination = document.querySelector('.intro'); // needs to be inserted into the 'div';
  destination.innerHTML = html;
})
