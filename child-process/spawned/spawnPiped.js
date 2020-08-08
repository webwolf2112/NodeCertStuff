// You can also pass the output of one child process as the input to the another child process.

const { spawn } = require('child_process');


const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn( 'wc', ['-l'] );

find.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
    console.log(`The wordcount is ${data}`);
});

find.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
    console.log(`number of files: ${data}`);
});


wc.stderr.on('data', data => {
    console.warn(' An error has occured', data);
    return;
});

wc.on('exit', () => {
    console.log('This exited');
});
