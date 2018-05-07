/*
	This is the primary file for the API

*/	

// Dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const config = require('./config');
const {router, handlers} = require('./router'); 
 
// The server should respond to all requests with a string
const server = http.createServer((req,res) => {

	// get the URL and parse it
	let parsedUrl = url.parse(req.url, true);

	// Get the path from that URL
	let path = parsedUrl.pathname;
	let trimmedPath = path.replace( /^\/+|\/+$/g,'');

	// Get the query string as an object
	let queryStringObject = parsedUrl.query;

	// Get the HTTP Method
	let method = req.method.toLowerCase();

	// Get the Headers as an object
	let headers = req.headers;

	// Get the payload if there is any
	// this decods the payload to the correct format in our case utf-8
	let decoder = new StringDecoder('utf-8');
	let buffer = '';

	// if there is no payload this will not fire
	req.on('data', (data) => {
		return buffer += decoder.write(data);
	});

	// requests will always have an end event.
	req.on('end', () => {
		buffer += decoder.end();

		// Choose the handler the request should go to, if not send the not found
		let chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;

		// Construct the data object to send to the handler
		let data = {
			trimmedPath,
			queryStringObject,
			method,
			headers,
			buffer
		};

		// Route the request to the handler specified in the router
		chosenHandler(data, (statusCode, payload) => { 
			// Use the status called by the handler or default to 200
			statusCode = typeof(statusCode) === 'number' ? statusCode : 200;

			// Use the payload called back by the hanlder or default to empty object
			payload = typeof(payload) === 'object' ? payload : {};

			//Convert the payload to a string
			let payloadString = JSON.stringify(payload);

			//return the response
			res.setHeader('Content-Type' , 'application/json');
			res.writeHead(statusCode);
			res.end(payloadString);

			console.log(`Returning : ${payloadString} ${statusCode}`);

		});

	});
	
});

// Start the server, and listen on port 3000
server.listen(config.port, () => {
	console.log(`The server is listening on port ${config.port} in the ${config.envName} environment`);

});



