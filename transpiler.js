const fs = require('fs');

class Transpiler {
  /**
   * Transpiles the program from js to A
   * @param {string} program The program as a string
   * @param {string} path OPTIONAL Path to store compiled code
   * If path not given it prints the program.
   */
  constructor(program, path) {
    this.program = program;
    this.path = path;
    this.compiled = undefined;
  }

  saveToDisk() {
    fs.writeFileSync(this.path, this.compiled);
  }

  eval() {
    console.log(this.compiled);
  }

  transpile() {
    console.log('===================')
    console.log('Transpiling program')
    let t0 = new Date().getTime();

    this.compiled = '';
    this.program
      .split('\n')
      .forEach(line => {
        line.split('').forEach(char => {
          for (let i = 0; i < char.charCodeAt(); i++) {
            this.compiled += 'a';
          }
          this.compiled += '\n';
        })
      })



    let t1 = new Date().getTime();
    console.log('===================');
    console.log(`Program transpiled in ${t1 - t0} ms`)
    console.log('===================');
    if (this.path) {
      console.log('Saved to ' + this.path);
      this.saveToDisk();
    }
    else this.eval();
  }
}

module.exports = Transpiler;