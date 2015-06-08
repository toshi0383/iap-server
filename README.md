iap-server
===========

Apple AppStore In-App Purchase server which verifies your receipt via Apple server.

Please checkout examples/ for details.

```
var Verify = require('./Verify.js');
var verify = new Verify();
verify.check(receipt, function (data, verifySuccess) {
  console.log('verifySuccess: ' + verifySuccess);
  console.log('data: ' + data);
});
```
