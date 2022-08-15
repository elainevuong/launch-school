let context = {
  person: [
    {
      first_name: 'Elaine',
      last_name: 'Vuong',
      age: '28',
    },

    {
      first_name: 'Linda',
      last_name: 'Chen',
      age: '27',
    },
  ]
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
