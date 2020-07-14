
// const app = require('express')();
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);


// app.get('/', (req, res) => {
//     if( req ) {
//         res.sendFile(path.join(__dirname, 'index.html'));
//     }
// });
// io.on('connection', client => {
//   client.on('event', data => { 
//       console.log( data );
//   });
//   client.on('disconnect', () => { 
//       console.log( 'client disconnected');
//   });
// });

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const path = require('path');

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, 'index.html'));
});

const randomArray =[
    "That's What She said",
    "I love you too.",
    "Why would you say that",
    "What, I didn't hear you",
    "Ohh you are too cute",
    "Yo Dawg",
    "Ha ha ha, you are so funny",
    "Frankly My Dear . . I don't give a damn",
    "Doode",
    "Crickets  . . . . Chirp . . Chirp",
    "That's What She said",
    "I love you too.",
    "Why would you say that",
    "What, I didn't hear you",
    "Ohh you are too cute",
    "Yo Dawg",
    "Ha ha ha, you are so funny",
    "Frankly My Dear . . I don't give a damn",
    "Doode",
    "Crickets  . . . . Chirp . . Chirp",
    "That's What She said",
    "I love you too.",
    "Why would you say that",
    "What, I didn't hear you",
    "Ohh you are too cute",
    "Yo Dawg",
    "Ha ha ha, you are so funny",
    "Frankly My Dear . . I don't give a damn",
    "Doode",
    "Crickets  . . . . Chirp . . Chirp",
];

io.on('connection', (socket) => {
   socket.on('chatMessage', function(data) {
      socket.emit('message',  `You: ${data}`);
      setTimeout(()=> {
        const arrayNumber = Math.round(Math.random() * 10);
        socket.emit('message', 'Computer: ' + randomArray[arrayNumber]);
      }, 500);
   });
});

http.listen(8000, function() {
   console.log('listening on localhost:8000');
});