// Import the built-in 'http' module from Node.js
// This module allows us to create a web server
const http = require('http');

// Create an HTTP server object
// At this point, the server exists but is NOT handling requests yet
const server = http.createServer();

// Listen for incoming requests from clients (browser, Postman, etc.)
server.on('request', (req, res) => {

    // 'req' (request) contains information about the incoming request
    // 'res' (response) is used to send data back to the client

    // Send a response to the client and end the connection
    res.end('welcome');
});

// Start the server and make it listen on port 5000
// Now the server is live and can accept requests
server.listen(5000);
