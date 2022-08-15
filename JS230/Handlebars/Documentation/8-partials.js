let context = 
{
  todos:    [
    {'id': '1', 'title': 'todo1', 'day': '11', 'month': '11',
      'year': '2017', 'completed': 'true', 'description': 'Some Description'},
    {'id': '2', 'title': 'todo2', 'day': '', 'month': '',
      'year': '', 'completed': 'false', 'description': ''}
  ]
}

document.addEventListener("click", () => {
  let source = document.querySelector("#all_todos_template").innerHTML;
  console.log(source);
  let template = Handlebars.compile(source);
  let html = template(context);
  console.log(html);
  let destination = document.querySelector('#all_todos'); // needs to be inserted into the 'div';
  destination.innerHTML = html;
})