const express = require('express');

let app = express();

//register a handler for a http request
app.get('/', (req, res) => {
	res.send({hello: 'Hello World', name: 'Vanessa', likes:['Chocolate']})
});

app.get('/about', (req, res) => {
	res.send('<h1>About Page</h1>');
});

app.get('/bad', (req, res) => {
	res.send({error: 'Error Handling Request'});
});

//3000 is a very common port for developing locally
app.listen(3000);