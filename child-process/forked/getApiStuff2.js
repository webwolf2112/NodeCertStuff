const https = require('https');

https.get( process.argv[2], (res) => {
    let finalData = '';

    res.on('data', (chunk) => finalData += chunk.toString());
    res.on('end', () => {
        process.send(finalData);
        //exiting so it won't keep listening to the parent!
        process.exit();
    });
    res.on('error', ( err ) => {
        console.stdError('An error occured in the response', err);
    });
}).on('error', (err) => {
    console.error(' An error occured with the HTTP get ', err );
});

process.on('message', (data) => {
    console.log( 'event triggered from the process.send giving the data to the parent file ', data);
});




