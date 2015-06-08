var receipt = process.argv[2]
var Validation= require('../Validation.js');

var validation = new Validation();
validation.check(receipt, function (data, isValid) {
  console.log('is valid :  ' + isValid);
  console.log('receive data :  ' + data);
});
