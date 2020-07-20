var Emitter = require('events');
const eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET_STRING, () => {
    console.log( 'Somewhere, someone said hello');
});

emtr.on(eventConfig.GREET_STRING, () => {
    console.log( 'a greeting occured');
});

console.log( 'hello');

emtr.emit(eventConfig.GREET_STRING);