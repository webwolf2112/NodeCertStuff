// Write a program that accepts one or more numbers as command-line arguments
// and prints the sum of those numbers to the console (stdout).

let sum = 0;

const args = process.argv.slice(2);
args.forEach((val) => {

      sum += parseInt(val);

});

console.log( sum)