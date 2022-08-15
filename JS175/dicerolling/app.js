const HTTP = require('http')
const PORT = 3000
const URL = require('url').URL;

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method
  let path = req.url

  const myURL = new URL(path, 'http://localhost');

  if (path === '/favicon.ico') {
    res.statusCode = 404
    res.end()
  } else {
    let params = myURL.searchParams

    let content = generateContent(params)

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.write(`${content}\n`)
    res.write(`Method is: ${method} \nPath is: ${path}\n`);
    res.end();
  }
})

function dieRoll(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateContent(params) {
  let body = ''

  let rolls = params.get('rolls')
  let sides = params.get('sides')

  for (let count = 0; count < rolls; count++) {
    body += `${dieRoll(1, sides)}\n`
  }
  
  return body
}

SERVER.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

/*
The objective is to build an application that simulates rolling a single six-sided die.

Update the current application so that it generates a random number 
between one and six and returns the result in the body of the HTTP response.

Continue to also write the method and path to the body for logging 
purposes, though have the browser render this on a separate line to the dice roll value.
*/