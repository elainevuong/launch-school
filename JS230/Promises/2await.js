main();

async function main() {
  console.log(`1. Start Script`)
  let data = await getData();
  console.log(`4. Data is currently: ${JSON.stringify(data)}`);
  console.log(`5. Script End`)
}

function getData() {
  console.log(`2. Getting data from Internet, please wait`);
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`3. Retrieving Data from Internet`)
      resolve([{name: "Avi"}, {name: "Grace"}])
    })
  });
}