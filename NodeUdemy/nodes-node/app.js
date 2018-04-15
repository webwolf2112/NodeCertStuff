

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

var map = {
	'add': function() {
		notes.addNote(argv.title, argv.body);
	},
	'list': function () {
		notes.getAll();
	},
	'read': function () {
		notes.readNote(argv.title);
	},
	'remove': function () {
		notes.removeNote(argv.title);
	}
};


if (map[command]) {
	map[command]();
}  else {
	console.log('command not recoginzed');
}

