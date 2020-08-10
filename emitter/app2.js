const Eimtter = require('events');
// const Emitter = require('./vanilla-eimtter');
const https = require('https');
const fs = require('fs');

const myEvent = new Emitter();
const fileName = 'secondTest.txt';
const url = "https://hipsum.co/api/?type=hipster-centric&sentences=200";

myEvent.on('httpRes', () => {
    console.log( 'We got the response');
    fs.readFile(fileName, (err, data) => {
        console.log( "the file has been read ", data.length );
        myEvent.emit('end');
    });
});

myEvent.on('end', () => {
    console.log('That\s all she wrote');
});

https.get(url, (res) => {

    let data = '';

    res.on('data', (chunk) => {
        data += JSON.parse(chunk);
    });

    res.on('end', () => {
        fs.writeFile(fileName, data, (err) => {
            if( err ){
                console.log( 'An Error occured during file write', err );
            }
            myEvent.emit('httpRes');
        });
    });

    res.on('error', (err) => {
        console.log( 'Response error: ', err)
    });
    
});