const duplex2 = require('duplex2');
const throughObjectMode = require('through2').obj   //**Important Remember this */

module.exports = function( counter ){
     const counts = {}
     function write (row, _, next) {
          counts[row.country] = (counts[row.country] || 0) + 1
          next()
        }
        function end (done) {
          counter.setCounts(counts)
          done()
        }

     const input = through(write, end);
     return duplexer({ objectMode: true }, input, counter)

};

