// Import only createReadStream from Node.js built-in 'fs' (file system) module
// createReadStream is used to read large files in small chunks instead of all at once
const { createReadStream } = require('fs');

// Create a readable stream for the file 'big.txt'
// highWaterMark: size of each chunk (in bytes) to be read at a time
// encoding: 'utf8' converts the Buffer data into readable text
const stream = createReadStream(
  './content/subfolder/big.txt',
  {
    highWaterMark: 90000, // Read 90 KB of data per chunk
    encoding: 'utf8',     // Decode the data as UTF-8 text
  }
);

// 'data' event fires every time a new chunk of data is read from the file
// result contains a portion (chunk) of the file
stream.on('data', (result) => {
  console.log(result); // Print each chunk to the console
});

// 'error' event fires if something goes wrong while reading the file
// Example: file not found, permission issue, etc.
stream.on('error', (err) => {
  console.log(err);
});
