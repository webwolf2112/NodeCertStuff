// // https://www.youtube.com/watch?v=9Hshh7U0a_c

const fork = require('child_process').fork;

const args = ['hello', 'i', 'love', 'you', 'wont', 'you', 'tell', 'me', 'your', 'name'];

console.log("Hello I'm spinning up a process");

const child = fork('childProcess3-child.js', args );

child.on('message', (message) => {
    console.log(`This is the parent: ${message}`);
});

child.on('error', ( err ) => {
    console.log( 'This threw an error ', err );
});

child.on('exit', () => {
    console.log("The child process exited");
});


