const Emitter = require('events');
const https = require('https');
const fs = require('fs');

const url = "https://hipsum.co/api/?type=hipster-centric&sentences=10";

const myevent = new Emitter();

myevent.on('httpMessage', () => {
    console.log( 'The file was written' );
    fs.readFile('apiFile.js', (err, data) => {
        if (err) throw err;
        console.log('The file was read');
        myevent.emit('end');
      });
});

myevent.on('end', () => {
  console.log( 'That\'s all folks' );
})



const getStuff = () => {
    https.get(url, (resp) => {
        let data = '';
      
        resp.on('data', (chunk) => {
          data += JSON.parse(chunk)[0];
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          fs.writeFile('apiFile.js', data, (err) => {
              if( err ) {
                  console.log( 'An Error Occured writing that file');
              }

              myevent.emit('httpMessage');


          });
        });

        resp.on('error', () => {
          console.log("Error: " + err.message);
        })
      
      });
};


getStuff();