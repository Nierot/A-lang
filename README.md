# A-lang
A, a programming language consisting of a.

To run an A program clone this github repo.
Then do:
```
const Compiler = require('./compiler');
const fs = require('fs');

const program = fs.readFileSync('./examples/Fibonacci.alang', 'utf-8');
new Compiler(program).compile();
```

This will read the an alang file from the disk, compile it and then run it.
