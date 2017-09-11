var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname });;
});

app.post('/submit-student-data', function(req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;

    res.send(name + ' Submitted Successfully!');
});

/*
app.post('/', function(req, res) {
    res.sendFile('Confirmation.html', { root: __dirname });;
});
*/


var server = app.listen(5000, function() {
    console.log('Node server is running..');
});