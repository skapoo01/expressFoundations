const http = require('http');
const express = require('express');

const app = express() // returns a node request handler

// adding a middleware that logs the requested url, and responds with 'Hello Express'
app.use(function(req, res) {
    console.log('In comes a request to :' + req.url);
    res.end('Hello Express!');
});

// create server and pass it the middleware stack
http.createServer(app).listen(3000, function() {
    console.log('Server running on port 3000');
});