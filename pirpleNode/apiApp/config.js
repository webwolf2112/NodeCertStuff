//Create an export configuration variables\
//NODE_ENV=production node index.js

const enviroments = {};


enviroments.staging = {
	'port': 3000,
	'envName': 'staging'
};

enviroments.production = {
	'port': 5000,
	'envName': 'Production'
};

// Determine which environment was passed as a command-line argument
let currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is in the same environment
let enviromentToExport = typeof(enviroments[currentEnvironment]) === 'object' ? enviroments[currentEnvironment] : enviroments.staging;


module.exports = enviromentToExport;
