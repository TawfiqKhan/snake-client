const net = require("net");
const {IP, PORT} = require("./constants")

// Establishes Conenction with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    conn.write("Name: THK");
  });

  conn.on('data', (data) => {
    console.log(data)
    if(data === "you ded cuz you idled");
    process.exit();
  });

  conn.setEncoding("utf8");
  // console.log(conn);
  return conn;
  
};

console.log("Connecting...");
connect();

module.exports = {connect}