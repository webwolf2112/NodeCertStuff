const https = require('https');
const request = require('request');
const key = '6abcc259f4baeb9f043881ff2d31280a';


let getWeatherData = (lat, lon) => {

	let URL = `https://api.darksky.net/forecast/${key}/${lat},${lon}`;

	https.get(URL, (resp) => {
		let data = '';

		resp.on('data', (chunk) => {
			data += chunk;
		});

		resp.on('end', () => {
			let weather = JSON.parse(data);

			if (!data.code) {
				console.log(weather.currently.temperature);
			} else {
				console.log("Unable to retrive weather data");
			}
			
		});

	}).on('error', (err) => {
		console.log('Error' + err);
	});

};

module.exports.getWeatherData = getWeatherData;


