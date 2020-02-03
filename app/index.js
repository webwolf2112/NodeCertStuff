
const express = require('express');
const content = require('./content');
const app = express();

app.get('/', function (req, res) {
  res.append(content(req,res));
})

app.listen(9000);