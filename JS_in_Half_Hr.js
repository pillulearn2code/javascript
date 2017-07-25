var newItemCounter = 1;
var ourHeadline = document.getElementById("our-headline");
var ourButton = document.getElementById("our-button");
var listItems = document.getElementById("our-list").getElementsByTagName("li");
var ourList = document.getElementById("our-list");


for (var i = 0; i < listItems.length; i++) {
    //listItems[i].innerHTML = "Hello World";
    listItems[i].addEventListener("click", activateItem);
}

function activateItem() {
    ourHeadline.innerHTML = this.innerHTML;
    this.classList.add("active");
    //alert("Click Detected");
    //console.log("test");
}

ourButton.addEventListener("click", createNewItem);

function createNewItem() {

    ourList.innerHTML += "<li> Someting new " + newItemCounter + "</li>";
    newItemCounter++
}