const { connect } = require('./client')
const { setupInput } = require('./input')
// setup interface to handle user input from stdin

connect()
// console.log(connect())
setupInput(connect());
