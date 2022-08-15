const context = {
  name: "RIP Harambe",
  artist: {
      name: "Elon Musk",
      recordLabel: "Emo G Records"
  }
};

document.addEventListener("click", () => {
  let source = document.querySelector("#nested-template").innerHTML;
  let template = Handlebars.compile(source);
  console.log(template);
  let html = template(context);
  let destination = document.querySelector("#nested");
  destination.innerHTML = html;
})