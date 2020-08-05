const EventEmitter = require('events');
const fs = require('fs');

const myEvent = new EventEmitter();

const myStream = fs.createReadStream('package-lock.json');

myEvent.on('myData', () => {
    console.log("oh it's my data");
});

myEvent.on('ending', () => {
    console.log('this bitch is done');
})


myStream.on('error', (err) => {
    console.log( 'Oh no something bad happened ' + err )
});

myStream.on('data', (chunk) => {
    let data;
    data += chunk.toString();
    console.log( data );
    myEvent.emit('myData');
});

myStream.on('close', () => {
    myEvent.emit('ending');
});




