const net = require("net");

// Establishes Conenction with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  conn.on('data', (data) => {
    console.log(data)
  });

  conn.on('connect', () => {
    conn.write("Name: THK");
  });
  
  conn.setEncoding("utf8");
  // console.log(conn);
  return conn;
  
};

console.log("Connecting...");
connect();

module.exports = {connect}