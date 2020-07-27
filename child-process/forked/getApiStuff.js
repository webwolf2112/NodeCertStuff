const https = require('https');

const getApiStuff = ( ) => {
    https.get(process.argv[2], (res) => {
        let data = '';
    
        res.on('data', (chunk) => data += chunk);  
    
        res.on('end', () => {
            process.send( data );
            
        } );
        res.on('error', (error) => {
            throw new Error();
        });
    });
};

getApiStuff();




