const fs = require('fs');

class Compiler {
  /**
   * Compiles the program
   * @param {string} program The program as a string
   * @param {string} path OPTIONAL Path to store compiled code
   * If path not given it evaluates the program directly.
   */
  constructor(program, path) {
    this.program = program;
    this.path = path;
    this.compiled = undefined;
  }

  saveToDisk() {
    fs.writeFileSync(this.path, this.compiled.join(''));
  }

  eval() {
    eval(this.compiled.join(''));
  }

  compile() {
    console.log('===================')
    console.log('Compiling program')
    let t0 = new Date().getTime();
    let line = 1;
    this.compiled = this.program
      .split('\n')
      .map(str => {
        if (/(?!a).*$/.exec(str)[0] !== '') throw new Error('Syntax Error: Invalid Char found at line ' + line)
        line++;
        return str;
      })
      .map(str => {
        if (str === '') return;
        return String.fromCharCode(str.split('').length)
      })
    let t1 = new Date().getTime();
    console.log('===================');
    console.log(`Program compiled in ${t1 - t0} ms`)
    console.log('===================');
    if (this.path) this.saveToDisk();
    else this.eval();
  }
}

module.exports = Compiler;