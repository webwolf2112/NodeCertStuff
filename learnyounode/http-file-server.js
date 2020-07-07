// Write an HTTP server that serves the same text file for each request it
// receives.

// Your server should listen on the port provided by the first argument to
// your program.

// You will be provided with the location of the file to serve as the second
// command-line argument. You must use the fs.createReadStream() method to
// stream the file contents to the response.

const http = require('http');
const fs = require( 'fs' );

const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer((req, res) => {
    const stream = fs.createReadStream(filePath);

    fs.createReadStream(filePath).pipe(res)
} );

server.listen(port);