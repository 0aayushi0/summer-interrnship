var fs = require('fs');
fs.readFile("demo1.txt", "utf-8", function(err, data) {
    if (err) throw err;
    console.log(data);
});