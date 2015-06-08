iap-server
===========

Apple AppStore In-App Purchase server which verifies your receipt.

Please checkout examples/ for details.

```
var Verify = require('./Verify.js');
var verify = new Verify();
verify.check(receipt, function (data, isValid) {
  console.log('is valid :  ' + isValid);
  console.log('receive data :  ' + data);
});
```
