var express = require('express');
var app = express();

//setting middleware
app.use(express.static(__dirname + '/public')); //Serves resources from public folder
app.use('/images', express.static(__dirname + '/images'));

var server = app.listen(5050);
