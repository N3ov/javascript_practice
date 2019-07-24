let express = require("express");
let app = express();

app.get('/', function (req, res) {

    res.send("<html><body><h1>Hello World</h1></body>></html>>");

});

app.post('/submit-data', function (req, res) {

    res.send('');

});


let server = app.listen(5000, function () {

    console.log("Node.js server is running.");

});