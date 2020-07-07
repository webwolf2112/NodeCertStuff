// Write a TCP time server!

// Your server should listen to TCP connections on the port provided by the
// first argument to your program. For each connection you must write the
// current date & 24 hour time in the format:

//    "YYYY-MM-DD hh:mm"

// followed by a newline character. Month, day, hour and minute must be
// zero-filled to 2 integers. For example:

//    "2013-07-06 17:42"

// After sending the string, close the connection.

const net = require('net');

const port = process.argv[2];

// function zeroFill(i) {
//     return (i < 10 ? '0' : '') + i
//   }

// function now () {
//     var d = new Date()
//     return d.getFullYear() + '-'
//       + zeroFill(d.getMonth() + 1) + '-'
//       + zeroFill(d.getDate()) + ' '
//       + zeroFill(d.getHours()) + ':'
//       + zeroFill(d.getMinutes())
//   }

const server = net.createServer((socket) => {
  socket.end( now() + '\n' );
  
});

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
  }
  
  function now () {
    var d = new Date()
    return d.getFullYear() + '-'
      + zeroFill(d.getMonth() + 1) + '-'
      + zeroFill(d.getDate()) + ' '
      + zeroFill(d.getHours()) + ':'
      + zeroFill(d.getMinutes())
  }

server.on('error', (err) => {
  throw err;
});
server.listen( port );