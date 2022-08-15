let a = 1;

function foo() {
  console.log(a);
  let a = 2;
  console.log(a);
}

foo();