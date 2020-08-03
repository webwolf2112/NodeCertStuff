const { spawn } = require('child_process');

//No communication per say with the parent but you could do a Parent function

const child = spawn( 'ls' );

child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    parentFunctionOutsideOfTheChildProcess(data.toString()); //To string because it's a stream
  });
  
  child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  
  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

const parentFunctionOutsideOfTheChildProcess = (data) => {
    console.log( 'The parent says: ', data );
};

