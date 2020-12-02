// Running an A program
const Compiler = require('./compiler');
const fs = require('fs');

// Read program from file
const program = fs.readFileSync('./examples/Fibonacci.alang', 'utf-8');
// Compile it
new Compiler(program).compile();