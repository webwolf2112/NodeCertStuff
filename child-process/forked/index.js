const { fork } = require('child_process');

const url = "https://hipsum.co/api/?type=hipster-centric&sentences=1";

const child = fork('getApiStuff.js', [ url ] );

child.on('message', (data) => {
    console.log( 'message data from the child', data );
});

child.on('exit', () => {
    console.log('the child ended');
});




