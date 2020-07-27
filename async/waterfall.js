// In this problem you will need to write a program that first reads the
//   contents of a file.

//   The path will be provided as the first command-line argument to your
//   program (i.e. process.argv[2]).

//   The file will contain a single URL. Using http.get, create a GET request
//   to this URL and console.log the response body.

const async = require('async');
const fs = require('fs');
const http = require('http');
const pathToFile = process.argv[2];

const readFile = (callback) => {
    fs.readFile( pathToFile, (err, data) => {
        if( err ){
            console.log( err );
        }
        callback(null, data.toString());
    });
};

const getStuff = ( url, done ) => {

    http.get(url, (res) => {
 
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk.toString(); });
    res.on('end', () => {
        done( null, rawData );   /******WHEN USING ASYNC YOU HAVE TO PASS IN NULL IN THE CALLBACKS!!! */
    });
    }).on('error', (e) => {
        if(e){
            console.error( e );
        }
    });
};

async.waterfall([
    readFile,
    getStuff,
], function (err, result) {
    // result now equals 'done'
    if( err ) {
        console.log( 'Error: ', err );
    }
    console.log( result )
});


