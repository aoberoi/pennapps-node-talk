
/*
 * GET home page.
 */

var opentok = require('opentok');

var ot = new opentok.OpenTokSDK('854511', '93936990b97ffede04378028766bdc1755562cce');

var sessionId;

ot.createSession('localhost', function(s) {
  sessionId = s;
});

exports.index = function(req, res){
  var token = ot.generateToken(sessionId);
  res.render('index', {
    sessionId: sessionId,
    token: token
  });
};

