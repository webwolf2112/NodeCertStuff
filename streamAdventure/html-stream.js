// Your program will get some html written to stdin. Convert all the inner html to
//      upper-case for elements with a class name of "loud",
//      and pipe all the html to stdout.

const through2 = require('through2');
const trumpet = require('trumpet');
const tr = trumpet();

const loud = tr.select('.loud').createStream();


loud.pipe(through2(function(chunk, enc, callback){
    this.push(chunk.toString().toUpperCase());
  callback();
})).pipe(loud);


process.stdin.pipe(tr).pipe(process.stdout);






// cd  /Users/vanessahenson/.nvm/versions/node/v14.4.0/lib/node_modules/stream-ad
//  venture/problems/html_stream/solution.js