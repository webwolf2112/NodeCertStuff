// Convert data from process.stdin to upper-case data on process.stdout using
// the through2 module.

const through = require('through2');

/* * IMPORTANT DON'T USE ARROW FUNCTIONS!!! **/

const tr = through( function (chunk, enc, callback) {
    this.push(chunk.toString().toUpperCase());
    callback()
    }
    );

process.stdin.pipe(tr).pipe(process.stdout)
