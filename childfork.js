const data = process.argv.slice(2);

data.forEach( arg => {
    process.send(`Greetings: ${arg}`);
});

const randomNumber = Math.round(Math.random() * 10);

// console.error('There was an error') // this will be output to parent error
// throw new Error( 'hey')
// process.exit(1);
if( randomNumber % 2 == 0 ) {
    process.exit(1);
}
