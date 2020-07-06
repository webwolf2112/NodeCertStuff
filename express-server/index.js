const express = require('express')
const bodyParser = require('body-parser');
const app = express();

var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug";
logger.debug("Some debug messages");



app.get('/', function (err, req, res) {
  if(error) {console.warn( err )}
    logger.trace("Entering cheese testing");
    logger.debug(req);
  res.send('Hello World')
})
 
app.listen(3000);