const {exec} = require('child_process');
const https = require('https');

const url = "https://hipsum.co/api/?type=hipster-centric&sentences=200";

const getApiStuff = () => {
    https.get(url, (res) => {
        let data = '';
    
        res.on('data', (chunk) => data += chunk);  
    
        res.on('end', () => data );
        res.on('error', (error) => {
            console.log( 'Error: ', error);
        });
    });
};

module.exports = getApiStuff;



