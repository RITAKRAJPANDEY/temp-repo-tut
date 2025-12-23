const http = require('http')

// Create an HTTP server
// The callback runs EVERY time a client makes a request to this server
const server = http.createServer((req, res) => {
    // This message is logged when a request hits the server
    console.log('request event')

    // Send response to the client and end the response
    res.end('Hello World')
})

// Start the server and make it listen on port 5000
// This callback runs ONCE when the server has successfully started
server.listen(5000, () => {
    console.log('server listening on port : 5000....')
})

// Execution flow:
// 1. Server starts listening → "server listening..." is printed
// 2. When a browser/client sends a request,
//    the request handler runs → "request event" is printed
