const https = require('https');

const getApiStuff = ( ) => {
    https.get(process.argv[2], (res) => {
        console.log( process.argv[3] , 'is Node Certified');
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




