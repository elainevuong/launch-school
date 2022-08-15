const HTTP = require('http');
const PORT = 3000;

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;

  if (path === '/favicon.ico') {
    res.statusCode = 404
    res.end()
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`${method} ${path}\n`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

/*
Node includes a module called HTTP. This module contains various classes 
which provide the functionality required to implement a HTTP server, but 
in a much simpler way and more abstract way than with our netcat example. 

Declare a PORT number for listening for incoming requests

The Node HTTP module defines a method called createServer(). 
Calling this method returns a new instance of the http.Server class.

We assign the http.Server object returned by createServer to a constant 
called SERVER. This object has access to a method defined by the http.Server 
class, called listen(). This method can take a port number as an argument, 
and then listen for incoming TCP connections on that port.

One thing to understand about what's happening here is that the server is 
listening for incoming TCP connections. The http.Server class extends the 
net.Server class, which is used to create a TCP server in much the same 
way that we used netcat in the previous course. In fact, we could have 
implemented our HTTP server in a similar way here by working at a lower 
level and just using Net module. Using Node's HTTP module instead abstracts 
away a lot of the complexity of doing that ourselves since it allows us to 
work directly with individual requests and responses at the HTTP level, 
rather than a stream of data at the TCP level.

This object has a method property, the value of which is the request method 
component of the HTTP request. It also has a url property; this could perhaps 
be more aptly named 'resource', since its value is the path and query component 
of the HTTP request rather than the entire url.


*/