const express = require('express')
const app = express();
const fs = require('fs');

app.get('/', (req, res, next) => {
    fs.readFile('./app.js', (err, data) => {
        if( err ) {
            res.send('We are sorry, something went wrong and we can not read your file');
        }
    
        //If you just send the data it will download a file
        res.send(String(data));
    } );
   });

app.use((error, req, res, next) => {
    res.status(500).send(error);
    next();
   })
 
app.post('/', function (req, res) {
    setTimeout(()=>{
        res.send('This Posted');
    }, 400);
  })

app.listen(5000)