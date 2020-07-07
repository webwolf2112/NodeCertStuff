const argv = require('yargs').argv;
let sum = 0;

console.log( argv );

process.argv.forEach((val, index) => {
    if( index > 1 ) {
        sum += parseInt(val);
    }
  });

console.log( sum );