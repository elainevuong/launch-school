main();

function main() {
  console.log(`1. Start Script`)
  const data = getData()
  console.log(`4. Data is currently ${data}`)
  console.log(`5. Script Ended`)
}

function getData() {
  console.log(`2. Getting Data from Internet, please wait`)
  return setTimeout(() => {
    console.log(`3. Returning Data from Internet after One Second`)
    return [{name: "Avi"}, {name: "Grace"}]
  })
}