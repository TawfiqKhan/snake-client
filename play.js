const { connect } = require('./client')
// setup interface to handle user input from stdin

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
};
const setupInput = function () {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();
