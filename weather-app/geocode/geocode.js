const request = require('request');

let geocodeAddress= (address, callback) => {

	let add = encodeURIComponent(address);

	const url = `http://maps.googleapis.com/maps/api/geocode/json?address=${add}`;

 	request({
	url: url,
	json: true
	}, (error, response, body)=>{

		if (error) {
			callback(error);
		} else if(body.status === 'ZERO_RESULTS') {
			callback('Unable to find that address');
		} else if(body.status === 'OK') {
			let data = body;

			callback(undefined, {
				address: data.results[0].formatted_address,
				latitude: data.results[0].geometry.location.lat,
				longitude: data.results[0].geometry.location.lng
			});
	
		} else {
			callback('An Unknown error happened');
		}
	});
};


module.exports.geocodeAddress = geocodeAddress;



