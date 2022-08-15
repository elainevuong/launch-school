main();

function main() {
  console.log(`1. Start Script`)
  const data = getData().then(data => {
    console.log(`4. Data is currently ${JSON.stringify(data)}`)
    console.log(`5. Script Ended`)
  });
}

function getData() {
  console.log(`2. Getting Data from Internet, please wait`)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`3. Returning Data from Internet after One Second`)
      resolve([{name: "Avi"}, {name: "Grace"}])
    })
  })
}

/*
`setTimeout` is an Asynchronous function
Within the `getData` Function
We return a Promise Object
Within the Promise, we call `setTimeout`
Once setTimeout completes its asynchronous execution
We resolve the promise, and we return `[{name: "Avi"}, {name: "Grace"}]`

In our main function, we chain a `then` call
The `then` call can make use of the `data` resolved the resolution 
of the Promise within the `getData` data.

The rest of our code must execute within the `then`
*/