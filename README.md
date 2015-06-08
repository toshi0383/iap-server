AppstoreIAP
===========

Appstore In-App Purchase server validation.

For usage,please see examples/.
        
        
        var Verify = require('./Verify.js');

        var verify = new Verify();
        verify.check(receipt, function (data, isValid) {
            console.log('is valid :  ' + isValid);
            console.log('receive data :  ' + data);
        });

    
