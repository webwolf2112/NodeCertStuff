const duplexer2 = require('duplexer2');
const throughObjectMode = require('through2').obj   //**Important Remember this */

module.exports = function( counter ){
     const counts = {}
     function write (chunk, _, cb) {
          counts[chunk.country] = (counts[chunk.country] || 0) + 1
          cb()
        }
        function end (cb) {
          counter.setCounts(counts)
          cb()
        }

     const input = throughObjectMode(write, end);
     return duplexer2({ objectMode: true }, input, counter)

};

