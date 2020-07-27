const fs = require('fs');
const http = require( 'http');

const file = process.argv = 'url.txt';

const getUrl = () => {
    return new Promise( (res, rej) => {
        fs.readFile(file, (err,data) => {
            if( err ) rej( err );
            res( data.toString());
        });
    });
};

const getData = async ( ) => {
    const url = await getUrl();

    http.get(url, (res) => {
        let fileData = '';
        res.on('data', (chunk) => {
            fileData += chunk.toString();
        });
        res.on('end', () => {
            console.log( fileData );
        });
        res.on('error', (err) => {
            console.log( 'A response error occured: ', err );
        });

    }).on( 'error', (err) => {
        console.error( err );
    });
};

getData();