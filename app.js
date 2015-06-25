var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')

app.use(bodyParser.json({ type: 'application/json' }))

var Verify = require('./Verify.js');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.post('/verifyReceipt', function(req,res) {
  var body = req.body
  var receipt = body.receipt_data
  var verify = new Verify();
  verify.check(receipt, function (data, verifySuccess) {
    console.log('verifySuccess: ' + verifySuccess);
    console.log('data: ' + data);
    res.status(200).json({url:"/files/beetv_ios/m017/demo.html"})
  })
});
app.get('/url', function(erq, res) {
  res.status(200).json({url:"https://iap-verify-server.herokuapp.com/verifyReceipt"})
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
