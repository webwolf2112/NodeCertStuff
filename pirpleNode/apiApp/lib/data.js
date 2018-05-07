/*

	Library for storing and editing data

*/

const fs = require('fs');
const path = require('path');

let lib = {};

// Base directory of the data file
lib.baseDir = path.join(__dirname, '../.data/');

//write the data to a fild
lib.create = (dir, filename, data, callback) => {
	// Open the file for writing
	fs.open(lib.baseDir + dir + '/' + filename + '.json', 'wx', (err, fileDescriptor) => {
		if(!err && fileDescriptor) {
			let stringData = JSON.stringify(data);

			// Write to the file and close it
			fs.writeFile(fileDescriptor, stringData, (err) => {
				if(!err) {
					fs.close(fileDescriptor, (err) => {
						if(!err) {
							callback(false);

						} else {
							callback('Error Closing new file');
						}
					});
				} else {
					callback('Error writing to new file');
				}
			});

		} else {
			callback('Could not create new file, it may already exist');
			callback(err);
		}
	});
};


//Read data from a file
lib.read = (dir, filename, callback) => {
	fs.readFile(lib.baseDir + dir + "/" + filename + '.json', 'utf8', (err, data) => {
		callback(err,data);
	})
};

lib.update = (dir, filename, data, callback) => {

	// Open the file for writing
	fs.open(lib.baseDir + dir + '/' + filename + '.json', 'r+', (err, fileDescriptor) => {
		if(!err && fileDescriptor) {

			let stringData = JSON.stringify(data);

			fs.ftruncate(fileDescriptor, (err) => {
				if(!err) {
					fs.writeFile(fileDescriptor, stringData, (err) => {
						if(!err) {	
							fs.close(fileDescriptor, (err) => {
								if(!err) {
									callback(false);
								} else {
									console.log('Error closing file');
								}
							})
						} else {
							console.log('Error writing to exising file');
						}
					})
				} else {
					console.log('Error truncating file');
				}
			});

		} else {
			callback('Could not open the file for updating, it may not exist yet');
		} 

	})
};

lib.delete = (dir, filename, callback) => {
	//Unlink the file 
	fs.unlink(lib.baseDir + dir + '/' + filename + '.json', (err) => {
		if(!err) {
			callback(false);
		} else {
			console.log('Trouble Deleting the file');
		}
	})
};


module.exports = lib;