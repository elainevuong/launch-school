// return foo() ? 'bar' : qux();
function foo() {
  return true
}


if (foo() === true) {
  'bar';
} else {
  qux();
}

// LS Solution

if (foo()) {
  return 'bar';
} else {
  return qux();
}