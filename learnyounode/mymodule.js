const fs = require( 'fs' );
const path = require( 'path' );

const readDir = ( dir, ext, cb ) => {
    fs.readdir( dir, 'utf-8', ( err, data ) => {
        if (err) {
            cb( err );
            return;
        };

        const filteredFiles = [];

        data.forEach( file => {
            if( path.extname(file) === `.${ext}` ) {
                filteredFiles.push( file );
            }
        });

        cb( null, filteredFiles )
    });
}

module.exports = readDir;