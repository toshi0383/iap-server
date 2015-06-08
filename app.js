var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')

app.use(bodyParser.json({ type: 'application/json' }))
//app.use( bodyParser.json() );       // to support JSON-encoded bodies
//app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  //extended: true
//}));

var Verify = require('./Verify.js');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.post('/', function(req,res) {
  var body = JSON.parse(JSON.stringify(req.body))
  var receipt = body.receipt_data
  var verify = new Verify();
  verify.check(receipt, function (data, verifySuccess) {
    console.log('verifySuccess: ' + verifySuccess);
    console.log('data: ' + data);
    res.write("{\"url\":\"http://www.example.com\"}")
    if (!verifySuccess) {
      res.status(500)
    }
    res.end()
  })
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
