const { fork } = require('child_process');
//ALLOWS TWO WAY COMMUNICATION BETWEEN PARENT AND CHILD

const url = "https://hipsum.co/api/?type=hipster-centric&sentences=1";

const child = fork( 'getApiStuff2.js', [url]);

child.on('message', ( data ) => {
    console.log( data, 'CHILD INTO PARENT' )
});

child.on('exit', () => {
    console.log( 'EXIT THROUGH THE GIFT SHOP ');
});

child.on('error', ( err ) => {
    console.log('the child could not get your message ', err );
});

child.send('This is the Parent, listen to me child');



