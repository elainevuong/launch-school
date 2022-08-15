function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2; // be careful of the let here! It will print 1, 2 WITHOUT
    console.log(a);
  }
}

myFunction();