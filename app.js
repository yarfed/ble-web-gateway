console.log("fuck");
var noble = require('noble');
var peripheralIdOrAddress='00158700bc6f';

noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning();
  } else {
    noble.stopScanning();
  }
});
 
 noble.on('discover', function(peripheral) {
  
  if (peripheral.id === peripheralIdOrAddress || peripheral.address === peripheralIdOrAddress) {
    console.log(peripheral);
     
 //jjjj
    } 

  });
 
  
 