// use require to import installed/system modules
var fs = require('fs');

// a param that looks like a file path to directly import source
var foo = require('./foo');

// expose functions by attaching them to exports global object
exports.addOne = function(x) {
  return x + 1;
}

// OR expose whole objects by assigning to module.exports
function Person(name) {
  this.name = name;
}
module.exports = Person;

