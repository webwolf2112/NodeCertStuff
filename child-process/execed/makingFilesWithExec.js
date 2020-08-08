const fs = require('fs');

const  { exec }  = require('child_process');

const mkdir = exec('mkdir dynamicDirectory' , function(err, strdout, stderr){
    if(err) {
        console.warn("Folder creation err:" + err);
        return;
    } 

    const touch = exec('cd dynamicDirectory/; echo "hello sunshine" >  hello2.js', function(err, strdout, stderr){
        console.log( 'TOTORO', stderr)
        if( stderr) {
            console.warn(err, stderr, 'easfdasfsdf');
            return;
        }
        fs.readFile(`${__dirname}/hello/hello2.js`, 'utf-8', (err, data) => {
            if( err ) console.log( err );
            console.log( data );
        });
    });

    touch.on('exit', (code) => {
        console.log( `inner child process ${code}`);
    } );
});

mkdir.on('exit', (code) => {
  console.log(`child process exited with code ${code}`);
});