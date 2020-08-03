// Write a program that exports a function that spawns a process from a cmd
// string and an args array and returns a single duplex stream joining
// together the stdin and stdout of the spawned process:

const { spawn } = require('child_process');
var duplexer2 = require("duplexer2");

module.exports = function(cmd, args) {
     const child = spawn( cmd, args );
     return duplexer2(child.stdin, child.stdout );
};

