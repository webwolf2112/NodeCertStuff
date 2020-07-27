const {exec} = require('child_process');
const api = require('./getApiStuff.js');

console.log('Started');

console.log( api );

// const makeApiCall = exec(api, (error, stdout, stderr) => {
//     debugger;
//     if( error ) {
//         console.log( 'An error has occured', error );
//     }
// });

// makeApiCall.on('exit', () => {
//     console.log('The Process Exited');
// });

