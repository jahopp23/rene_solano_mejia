var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/views'));

app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html')); 
}); 

app.listen(3000); 

console.log("Web App live at Port:3000"); 


