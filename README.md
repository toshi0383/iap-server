[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

iap-server
===========

A Node.js server which verifies your receipt via Apple server.  
Just deploy and POST your receipt-data, then it will send it to Apple Server,  
and tells you if verification succeeded or not.

```
curl --data "receipt-data=aewfiafawefawefxxx...." [hostname]/
```

Please customize app.js for your own.

checkout examples/ for more details and usage.

```
var Verify = require('./Verify.js');
var verify = new Verify();
verify.check(receipt, function (data, verifySuccess) {
  console.log('verifySuccess: ' + verifySuccess);
  console.log('data: ' + data);
});
```
