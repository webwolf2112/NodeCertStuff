const yargs = require('yargs');
const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Addess to fetch weather for ',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;;
const geocode = require('./geocode/geocode.js');

  
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(JSON.stringify(results, undefined, 2));
	}
});




// const http = require('http');
// http.get(url, (resp) => {
// 	let data = '';

// 	resp.on('data', (chunk) => {
// 		data += chunk;
// 	});

// 	resp.on('end', () => {
// 		console.log("This is from the HTTP request");
// 		console.log(JSON.parse(data));
// 	});


// }).on('error', (err) => {
// 	console.log(`Error: ${err}`);
// });