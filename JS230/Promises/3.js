/*
If you want to FORCE your code to RUN SYNCHRONOUSLY, and WAIT for a promise
to resolve BEFORE continuing, you can use async and await.

If a function returns a promise, you can tell your code to WAIT for
the promise to resolve, BEFORE CONTINUING to run the rest of your program. 
*/

let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

async function main() {
  let resolvedPromise = await myFirstPromise;
  console.log(`Yay ${resolvedPromise}`);
}

main()