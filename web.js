#!/usr/bin/env node
var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());
app.use(express.static(__dirname + '/static'));
app.get('/', function(request, response) {
  var mystring = Buffer (30);
  mystring = fs.readFileSync('index.html');
  response.send(mystring.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
