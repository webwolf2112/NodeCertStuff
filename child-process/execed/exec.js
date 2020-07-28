const { exec } = require('child_process');

const child = exec('testfile.js', ['hello'], (error, stdout, stderr) => {
    if( error ) {
        console.warn('error ', error);
    }

    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});


