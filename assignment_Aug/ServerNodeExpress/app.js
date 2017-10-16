var express = require('express');
var app = express();
var dataToSecondForm
var email;
var PIN;
var NIN;

//middle ware
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// for the static file (css)
app.use(express.static('./')); // for the static file (css)

// Define GET POST requestes to server.

app.get('/', function(req, res) {
    console.log("request infomation", req.body);
    res.sendFile('First_form.html', { root: __dirname });
});

app.post('/Second_form.html', function(req, res) {
    res.sendFile('Second_form.html', { root: __dirname });
    dataToSecondForm = req.body;
    console.log("request infomation to second form ", dataToSecondForm);
    email = dataToSecondForm.email;
    PIN = dataToSecondForm.PIN;
    NIN = dataToSecondForm.NIN;

});

app.post('/Third_form.html', function(req, res) {
    res.sendFile('Third_form.html', { root: __dirname });
    var dataToThirdForm = req.body;
    console.log("request infomation to third form ", req.body);


});

// server port
var server = app.listen(5000, function() {
    console.log('Node server is running..');
});

app.get('/thanks', function(req, res) {
    console.log("request infomation", req.body);
    console.log(dataToSecondForm);

    res.send(dataToSecondForm);

    return;

    // res.sendDate(email);
    //res.sendDate(PIN);
    //res.sendDate(NIN);
});





/*
// storing data in local storage

window.onload = function() {

    if (localStorage) {
        // Add an event listener for form submissions
        document.getElementById("submit").addEventListener("submit", function() {
            // Get the value of the name field.
            var email = document.getElementById("email").value;
            // Save the name in localStorage.
            localStorage.setItem("email", email);
        });
    }
}

// retreving date form localStroage

window.onload = function() {

    //retrieve the email.
    var email = localStorage.getItem("email");
    if (name != "undefined" || name != "null") {
        document.getElementById("Third_form").innerHTML = " Thank you" + name + "for placing the order.";
    } else {
        document.getElementById("Third_form").innerHTML = "Thank you for placing the order. ";
    }
}
*/