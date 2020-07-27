// Write a program that will receive two URLs as the first and second  
// command-line arguments.  
 
// Using http.get, create a GET request to these URLs and pass the response  
// body to the callback.  
 
// Pass in an object of task functions, using the property names requestOne  
// and requestTwo, to async.series.  
 
// console.log the results in the callback for series when all the task  
// functions have completed.

const http = require( 'http');
const url1 = process.argv[2];
const url2 = process.argv[3];

const getData = ( url ) => {
    return new Promise( ( resolve, rej ) => {
        let data = '';
        http.get( url, (res) => {
            res.on('data', (chunk) => {
                data += chunk.toString();
            });
            res.on('end', () => {
                resolve( data )
            });
            res.on('error', (err) => {
                rej('Res Error: ', err);
            });

        } ).on( 'error', (err) => {
            console.error( err );
            rej( err );
        });
    } );
};

const runData = async() => {
    const requestOne = await getData( url1 );
    const requestTwo = await getData( url2 );

    console.log( { requestOne, requestTwo } );
}

runData();