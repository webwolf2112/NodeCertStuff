const { exec } = require('child_process');

// //good for command line stuff

exec('ls', (error, stdout, stderr) => {
    if( error ) {
        console.warn('error ', error);
    }

    if( stdout ) {
        console.log(`stdout: ${stdout}`);
    }

    if( stderr ) {
        console.error(`stderr: ${stderr}`);
    }
});


