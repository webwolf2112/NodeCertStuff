// // https://www.youtube.com/watch?v=9Hshh7U0a_c

const args = ['hello', 'i', 'love', 'you', 'wont', 'you', 'tell', 'me', 'your', 'name'];
 
const fork = require('child_process').fork;

console.log('Parent firing up');

const child = fork('forkMeChild.js', args );

child.on('error', (err) => {
    console.log( 'Captain we have an error' );
});

child.on('message', (message) => {
    console.log(`The parent delivering the child message: ${message}`);
});

child.on('exit', ( err ) => {
    if( err ) {
       console.warn( 'And Error has occured ', err);
    } else {
        console.log('It exited');
    }
});