var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', "https://learnwebcode.github.io/json-example/animals-1.json")
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
        //console.log(ourData);
    };
    ourRequest.send();
});

function renderHTML(data) {
    var htmlString = "";
    //console.log("first loop");
    for (var i = 0; i < data.length; i++) {
        //console.log("second loop");
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".";
    };

    animalContainer.insertAdjacentHTML('beforeend', htmlString);

}


/*var myCat = {
    "name": "Meawsalot",
    "species": "cat",
    "fevFood": "tuna",
}
console.log(myCat.fevFood);

var fevColours = ["blue", "green", "purple"];
console.log(fevColours[0]);

var thePets = [{
    "name": "Meawsalot",
    "species": "cat",
    "fevFood": "milk"

}, {
    "name": "barky",
    "species": "dog",
    "fevFood": "fish"

}]
console.log(thePets[0]);
*/