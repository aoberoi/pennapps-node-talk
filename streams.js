// A request is a readable stream
var http = require('http');
http.createServer(function(req, res) {
  req.on('data', function(chunk) {
    console.log('got %d bytes of data', chunk.length);
  });
  req.on('end', function() {
    console.log('end of request');
  });
});

// You can get a writable stream to the filesystem
var fs = require('fs');
var ws = fs.createWriteStream('tmp.txt');
ws.write('hello world');
ws.end();
