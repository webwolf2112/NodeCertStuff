// Write a program that performs an HTTP GET request to a URL provided to you
// as the first command-line argument. Write the String contents of each
// "data" event from the response to a new line on the console (stdout).
const http = require( 'http' );
const url = process.argv[2];

http.get(url, (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  res.setEncoding('utf8');
  let rawData = '';

  res.on('data', (chunk) => { console.log( chunk.toString()) });

}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});