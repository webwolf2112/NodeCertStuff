//Define the handlers

let handlers = {};

handlers.notFound = (data, callback) => {
	callback(404);
};

handlers.ping = (data, callback) => {
	callback(200);
}



//Defining a request router
let router = {
	'ping' : handlers.ping
}

module.exports = {
	handlers,
	router
};