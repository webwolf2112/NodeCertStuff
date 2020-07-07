const url = require('url');

const mockURL = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash';
const myURL =
  url.parse(mockURL);

console.log( myURL);

const yourURL = new URL(mockURL);

console.log(yourURL.host);

console.log( __dirname)
console.log( __filename )