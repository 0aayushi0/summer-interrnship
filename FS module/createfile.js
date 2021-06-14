var fs = require('fs');

fs.writeFile('test.txt', 'hey! I am Aayushi', function(err) {
    if (err) throw err;
    console.log('File Created');
});