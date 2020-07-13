//Create a service that reads a url from a file and then gets the contents of the other file


const fs = require('fs');
const urlFile = 'urlFile.txt';

const getUrl = () => {
    console.log( urlFile );
    return new Promise( ( res, rej ) => {
        fs.readFile( urlFile, (err, data ) => {
            res(data.toString());
        });
    } );
};

const readFile = async() => {
    const url = await getUrl();

    console.log( url );
    let fileText = '';

    // fs.readFile(url, (err, data) => {
    //     if( err ) throw new Error( err );
    //     // console.log( data.toString() );
    // });
    const stream = fs.createReadStream(url);
        stream.on('data', (chunk) => { fileText += chunk});
        stream.on('end', () => {
            console.log( fileText );
        });
}

readFile();