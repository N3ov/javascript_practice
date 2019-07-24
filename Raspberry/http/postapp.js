let express = require("express");
let app = express();

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extend: false }));

app.get('/', function (req, res) {

    res.sendFile(__dirname + '/calc2.html');

});

// app.post('/submit-student-data', function (req, res) {
//
//     let name = req.body.firstName + "" + req.body.lastName;
//     res.send(name + 'Submitted Successfully.');
//
// });

let server = app.listen(5000, function () {


    console.log("Node.js is running.");

});