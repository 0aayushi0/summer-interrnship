var http = require('http');
http.createServer(function(req, res) {
    res.end("welcome to Node js");
}).listen(4000);
console.log("server is started on port 4000");