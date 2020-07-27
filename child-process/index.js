const fs = require('fs');
const path = require('path');

const  { exec }  = require('child_process');

const mkdir = exec('mkdir hello' , function(err, strdout, stderr){
    if(err) {
        console.log("Folder creation err:" + err);
    } 

    const touch = exec('cd hello/; echo "hello sunshine" >  hello2.js', function(err, strdout, stderr){
        if( err) {
            console.log( "File creation error" + err)
        }
        console.log( 'file was created');
    });

    touch.on('exit', (code) => {
        console.log( `inner child process ${code}`);
        fs.readFile(`${__dirname}/hello/hello2.js`, 'utf-8', (err, data) => {
            if( err ) console.log( err );
            console.log( data );
        });
    } );
});

mkdir.on('exit', (code) => {
  console.log(`child process exited with code ${code}`);
});