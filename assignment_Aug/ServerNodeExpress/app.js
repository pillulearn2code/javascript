var express = require('express');
var app = express();

//middle ware
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// for the static file (css)
app.use(express.static('./')); // for the static file (css)

// Define GET POST requestes to server.

app.get('/', function(req, res) {
    res.sendFile('First_form.html', { root: __dirname });;
});

app.post('/Second_form.html', function(req, res) {
    console.log("request infomation", req.body);
    res.sendFile('Second_form.html', { root: __dirname });;
});

app.post('/Third_form.html', function(req, res) {
    console.log("request infomation", req.body);
    res.sendFile('Third_form.html', { root: __dirname });;
});

// server port
var server = app.listen(5000, function() {
    console.log('Node server is running..');
});