const { defaultCipherList } = require('constants');
const { Socket } = require('dgram');

var spawn = require('child_process').spawn;

// each child process is completely seperate
if( process.argv[2] === 'child'){ // this is the args that we passed in since it's using the same node
    console.log( 'I am inside the child');
    let net = require('net');
} else {
    //process.execPath is where Node is stored
    console.log( process.execPath );
    console.log( __filename );
    //Important
    // const child = spawn(process.execPath, [__filename, 'child'], {
    //     stduio: 'inherit', // this would be the exact same as child.stdout.pipe -> it's shorthand
    // });
    const child = spawn(process.execPath, [__filename, 'child'] ); //*** This is the same as typing `node childProcess2 child`
    child.stdout.pipe(process.stdout); //piping the child process data into the parent process

    console.log( "I'm the parent that is spinning up the child");
}


