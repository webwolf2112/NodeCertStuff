const data = process.argv.slice(2);
const fs = require('fs');

data.forEach( arg => {
    process.send(`The child sent: ${arg}`);
//    'This is the child communicating with the parent via send and message ';
});
