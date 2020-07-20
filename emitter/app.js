const Emitter = require('events');
const https = require('https');
const fs = require('fs');

const url = "https://hipsum.co/api/?type=hipster-centric&sentences=10";

const emit = new Emitter();

let parentData;


emit.on('httpMessage', () => {
    console.log( 'The file was written' );
    fs.readFile('apiFile.js', (err, data) => {
        if (err) throw err;
        console.log(data.toString());
      });
});



const getStuff = () => {
    https.get(url, (resp) => {
        let data = '';
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          fs.writeFile('apiFile.js', data, (err) => {
              if( err ) {
                  console.log( 'An Error Occured writing that file');
              }

              emit.emit('httpMessage');


          });
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
};


getStuff();