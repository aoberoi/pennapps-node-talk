// Event emitters are another common pattern for recieving interesting
// information from an object over time

var net = require('net');
var server = net.createServer();
// when you use the .on() method, its an event emitter
server.on('connection', function (stream) {
  // this will happen over and over every time a connection comes in
  console.log('someone connected!');
});
server.listen(1337);
