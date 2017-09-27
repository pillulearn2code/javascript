// storing data in local storage

window.onload = function() {

    if (localStorage) {
        // Add an event listener for form submissions
        document.getElementById("submit").addEventListener("submit", function() {
            // Get the value of the email field.
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
        document.getElementById("Third_form").innerHTML = " Thank you" + email + "for placing the order.";
    } else {
        document.getElementById("Third_form").innerHTML = "Thank you for placing the order. ";
    }
}