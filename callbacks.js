// sometimes the results of a function call cannot be returned immediately,
// (like when it does some I/O), get results with a callback
// you can implement a callback interface for functions you expose

var dns = require('dns');
dns.lookup('google.com', function(err, ipAddress) {

  // NODE CONVENTION: the first parameter given to a callback is the error
  //                  check if it is truthy before continuing
  if (err) return handleError(err);
  console.log('google.com resolved to %s', ipAddress); 

});

// you can write functions that return results in a callback too
function addOneLater(x, cb) {
  setTimeout(function() {
    cb(null, x + 1);
  }, 200);
}
