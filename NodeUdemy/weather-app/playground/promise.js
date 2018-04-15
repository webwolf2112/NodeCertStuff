// var myPromise = new Promise((resolve, reject)=>{
// 	 resolve('Hey it returned');
// 	//reject("unable to fulfill promise");
// });

// myPromise.then((data)=>{
// 	console.log(data);
// }, (data)=>{
// 	console.log(data);
// });	

var addMethod = (a, b) => {
	return new Promise((resolve, reject)=>{
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		} else {
			reject('You did not supply a number');
		}
	}); 
}

addMethod(3,5).then((res)=>{
	console.log(`Success: ${res}`);
	return addMethod(res, 'test');
}).then((data)=>{
	console.log(`Second Success: ${data}`)
}).catch((err) => {
	console.log(`Error: ${err}`);
});

