// Your program will be given a passphrase on process.argv[2], an
// initialization value on process.argv[3] and 'aes256' encrypted data will
// be written to stdin.

// Simply decrypt the data and stream the result to process.stdout.

const crypto = require('crypto');
const initValue = process.argv[3];
const passPhrase = process.argv[2];
const encryptedType = 'aes256';

const stream = crypto.Decipheriv( encryptedType, passPhrase, initValue );

process.stdin.pipe( stream ).pipe( process.stdout ); //You have to stream the process.stdin for this to work


