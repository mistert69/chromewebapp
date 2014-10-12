var onGetDevices = function(ports) {
  console.log("test");
  for (var i=0; i<ports.length; i++) {
    console.log(ports[i].path);
  }
}
chrome.serial.getDevices(onGetDevices);


var onConnect = function(connectionInfo) {
   // The serial port has been opened. Save its id to use later.
  _this.connectionId = connectionInfo.connectionId;
  // Do whatever you need to do with the opened port.
}
// Connect to the serial port /dev/ttyS01
chrome.serial.connect("/dev/ttyS01", {bitrate: 115200}, onConnect);

var stringReceived = '';

var onReceiveCallback = function(info) {
    if (info.connectionId == expectedConnectionId && info.data) {
      var str = convertArrayBufferToString(info.data);
      if (str.charAt(str.length-1) === '\n') {
        stringReceived += str.substring(0, str.length-1);
        onLineReceived(stringReceived);
        stringReceived = '';
      } else {
        stringReceived += str;
      }
    }
  };

chrome.serial.onReceive.addListener(onReceiveCallback);


var writeSerial=function(str) {
  chrome.serial.send(connectionId, convertStringToArrayBuffer(str), onSend);
}
// Convert string to ArrayBuffer
var convertStringToArrayBuffer=function(str) {
  var buf=new ArrayBuffer(str.length);
  var bufView=new Uint8Array(buf);
  for (var i=0; i<str.length; i++) {
    bufView[i]=str.charCodeAt(i);
  }
  return buf;
}


