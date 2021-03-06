# Express Foundations

## Table of Contents
- [Setting up a project](#1-setting-up-a-project)
- [Middleware](#2-middleware)
- Routing
- Rendering views
- Connecting to MySQL
- Connecting to MongoDB
- Form Processing
- REST APIs
- Authentication
- Admin heirarchy
- Deployment

Controllers?
Models?
What's the analog?



## 1. Setting up a project
To use express in a project:
1. Install the node module express i.e. ``` npm install express ```
2. Create a request handler using a call to express()
3. Add a stack of middlewares
4. Pass middleware stack to http server using the createServer() method.

```javascript
// hello_express/index.js

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
```




## 2. Middleware
Similar to Node request handler, but multiple middleware can be chained together to accomplish things like user authentification, error handling, routing, etc. in a sequence. Similar to middleware in other frameworks like RoR (Rack Middleware), Django and Laravel.

Key points:
1. Middelware can either pass on control to the next middleware using next(), or it can respond to the request. If no middleware sends a response, then the server stalls.
2. Express adds to http methods. It does not take anything away.

### 2.1. How to use Middleware

### 2.2. Middleware to serve static files

### Questions
- How does next() work?




## 3. Routing




## 4. Views
- Rendering Views
- Setting up EJS
- EJS Syntax
- EJS Templating