const OPERATOR = ['+', '-', '*', '/'];

document.addEventListener('DOMContentLoaded', () => {
  let result = document.getElementById("result");
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let operator = document.getElementById("operator")
  let form = document.querySelector("form");

  form.addEventListener('submit', event => {
    event.preventDefault(); 
    let value1 = Number(num1.value);
    let value2 = Number(num2.value);
    let operation = OPERATOR[operator.selectedIndex];
    let evaluation = getResult(value1, value2, operation);
    result.textContent = String(evaluation);
  });

  function getResult(value1, value2, operation) {
    switch (operation) {
      case '+': 
        return value1 + value2;
      case '-': 
        return value1 - value2;       
      case '*': 
        return value1 * value2;       
      case '/': 
        return value1 / value2;
    } 
  }
});