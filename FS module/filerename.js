var fs = require('fs');

fs.rename('demo.txt', 'demo1.txt', function(err) {
    if (err) throw err;
    console.log('File Renamed!');
});