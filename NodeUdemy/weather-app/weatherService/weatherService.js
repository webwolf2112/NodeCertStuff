const https = require('https');
const request = require('request');
const key = '6abcc259f4baeb9f043881ff2d31280a';


let getWeatherData = (lat, lon) => {
	return new Promise((resolve, reject) => {

		let URL = `https://api.darksky.net/forecast/${key}/${lat},${lon}`;

		https.get(URL, (resp) => {
			let data = '';

			resp.on('data', (chunk) => {
				data += chunk;
			});

			resp.on('end', () => {
				let weather = JSON.parse(data);

				if (!data.code) {
					resolve({weather: weather.currently});
				} else {
					reject("Unable to retrive weather data");
				}
				
			});

		}).on('error', (err) => {
			reject('Error' + err);
		});

	});

};

module.exports.getWeatherData = getWeatherData;


