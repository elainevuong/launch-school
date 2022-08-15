/*
document.addEventListener('DOMContentLoaded', event => {
  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    let newItem = document.querySelector('#name').value
    let newQuantity = document.querySelector('#quantity').value

    if (!newQuantity) {
      newQuantity = '1';
    }

    let newListItem = document.createElement('li')
    newListItem.innerHTML = `${newQuantity} ${newItem}`;
    document.querySelector('#grocery-list').appendChild(newListItem);

    event.currentTarget.reset();
  })
});
*/

// Think about the Grocery List like a Component
// Write reusable code that makes it easy to modify the Component

(function groceryListManager() {
  class GroceryList {
    constructor(listContainerElement) {
      this.list = document.querySelector(listContainerElement);
    }

    addItem(name, quantity) {
      let listItem = document.createElement('li');
      listItem.append(`${quantity} ${name}`);

      this.list.append(listItem);
    }
  }

  document.addEventListener("DOMContentLoaded", event => {
    let form = document.querySelector("form");
    let myGroceryList = new GroceryList("#grocery-list"); // identifies the groceryList
    const getValueOf = (selector) => form.querySelector(selector).value;
    
    form.addEventListener("submit", event => {
      event.preventDefault();

      let name = getValueOf("#name");
      let quantity = getValueOf("#quantity") || 1;

      myGroceryList.addItem(name, quantity);
      form.reset();
    });
  });
})();
