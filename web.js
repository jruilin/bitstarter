var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var mystring = Buffer (30);
  mystring = fs.readFileSync('index.html');
  response.send(mystring.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
