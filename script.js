// -----------------VARIABLES

var body = document.getElementById("body");

var blue = document.getElementById("blue");
var red = document.getElementById("red");
var green = document.getElementById("green");
var yellow = document.getElementById("yellow");

// -----------------EVENTS

body.addEventListener("keydown", startGame)

blue.addEventListener("click", changeColorBlue);
red.addEventListener("click", changeColorRed);
green.addEventListener("click", changeColorGreen);
yellow.addEventListener("click", changeColorYellow);

// -----------------FUNCTIONS

function startGame(e) {

    blue.classList.toggle("fancyBlue");
    setTimeout(function prueba(e) {
        blue.classList.remove("fancyBlue")
    }, 1000);

}

function changeColorBlue(e) {
    blue.classList.toggle("fancyBlue");
    setTimeout(function prueba(e) {
        blue.classList.remove("fancyBlue")
    }, 1000);
}

function changeColorRed(e) {
    red.classList.toggle("fancyRed");
    setTimeout(function prueba(e) {
        red.classList.remove("fancyRed")
    }, 1000);
}

function changeColorGreen(e) {
    green.classList.toggle("fancyGreen");
    setTimeout(function prueba(e) {
        green.classList.remove("fancyGreen")
    }, 1000);
}

function changeColorYellow(e) {
    yellow.classList.toggle("fancyYellow");
    setTimeout(function prueba(e) {
        yellow.classList.remove("fancyYellow")
    }, 1000);
}