var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./')); // for the static file (css)

app.get('/', function(req, res) {
    res.sendFile('First_form.html', { root: __dirname });;
});

app.post('/Second_form.html', function(req, res) {
    res.sendFile('Second_form.html', { root: __dirname });;
});
app.post('/Third_form.html', function(req, res) {
    res.sendFile('Third_form.html', { root: __dirname });;
});

var server = app.listen(5000, function() {
    console.log('Node server is running..');
});