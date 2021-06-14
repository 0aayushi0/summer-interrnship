var fs = require('fs');

var data = fs.readFileSync('demo1.txt');
console.log("Synchronous read:" + data.toString());
console.log("Program Ended");