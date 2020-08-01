// Implement a Readable stream, initiate a new stream instance from your
// implementation and pipe to process.stdout. You will receive the content to
// add to your stream like first argument.

const { Readable } = require('stream'); 

const readStream = new Readable({
    read() {}
  });


readStream.push(process.argv[2]);

readStream.pipe(process.stdout);