const crypto = require('crypto');
const fs = require('fs');
const hash = crypto.createHash('sha256');

const input = fs.createReadStream('test.txt');
input.pipe(hash).pipe(process.stdout);

crypto.randomBytes(256, (err, buf) => {
    if (err) throw err;
    console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
  });