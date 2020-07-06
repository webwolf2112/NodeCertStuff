
const { spawn } = require('child_process');
const child = spawn('ls', ['-lh']);

const name = 'beeotch'
const parentFunction = ( data ) => {
    console.log( 'Yo I am the parent', name );
    console.log( data );
};

const parentClose = () => {
    console.log( 'this Closed');
};


child.stdout.on('data', (data) => {
    console.log( 'data 2');
  console.log(`stdout: ${data}`);
  parentFunction( data.toString() );
  for( let i = 0; i < 10; i++) {
    console.log( 'loopy loop');
}
});

child.stderr.on('data', (data) => {
    console.log( 'data 2');
  console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
    console.log( 'it closed ');
    console.log(`child process exited with code ${code}`);
    parentClose();
});
