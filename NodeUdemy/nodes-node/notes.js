const fs = require('fs');
const _ = require('lodash');

var fetchNotes = () => {
	try {
		return JSON.parse(fs.readFileSync(`notes.txt`));
	} catch (e){
		return [];
	}
};

var saveNotes = (notes) => {
	var writeValue = JSON.stringify(notes);
		fs.writeFileSync(`notes.txt`, writeValue);

};

var addNote = (title, body) => {
	
	var notes = fetchNotes();


	if (_.find(notes, {title: title})) {
		console.log('Sorry this has already been added');
	} else {

		notes.push({title, body});
		saveNotes(notes);
		console.log('Adding Note ', title);
		};
	}

var getAll = () => {
	console.log("Here are all of the notes: \n");
	var notes = fetchNotes();
	_.each(notes, (note) => {
		console.log(note.body + '\n');
	});
};

var readNote = (title) => { 
	var notes = fetchNotes();

	var note = notes.filter((note) => note.title === title);

	console.log(note[0].body);

	
};


var removeNote = (title) => {

	debugger; 
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => note.title !== title);
	var message = filteredNotes.length !== notes.length ? "note was removed" : "Note was NOT removed";

	console.log(message);
	
}


//addNote: addNote is identical to the addNode below
module.exports = {
	addNote,
	getAll,
	readNote,
	removeNote
}