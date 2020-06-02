const http = require('http');
const express = require('express');

var app = express();

// passive middleware
app.use(function(req, res, next) {
    console.log("request method: " + req.method);
    console.log("request url: " + req.url);
    next();
});

// final routing middleware
app.use(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain" });
    res.end("Hello from example middleware!");
});

http.createServer(app).listen(3000, function() {
    console.log("Server running on port 3000");
});