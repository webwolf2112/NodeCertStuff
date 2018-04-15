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
const geocode = require('./geocode/geocode');
const weatherService = require('./weatherService/weatherService.js');



geocode.geocodeAddress(argv.address).then((geoResults)=>{

	weatherService.getWeatherData(geoResults.latitude, geoResults.longitude).then((results) => {
		
		console.log(`Temp: ${results.weather.temperature}, Feels Like: ${results.weather.apparentTemperature} in ${geoResults.city}`);
			
	
	}, (err)=>{
		console.log(`Error: ${err}`);
	});

}).catch((err)=>{
	console.log(`Error: ${err}`);
});

  
// geocode.geocodeAddress(argv.address, (errorMessage, geoResults) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	} else {

// 		weatherService.getWeatherData(geoResults.latitude, geoResults.longitude, (err, results) => {
// 			if (err) {
// 				console.log('Something went wrong: ' + err);
// 			} else {
// 				console.log(`Temp: ${results.weather.temperature}, Feels Like: ${results.weather.apparentTemperature} in ${geoResults.city}`);
				
// 			}
// 		});

// 	}
// });



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