// -----------------VARIABLES

var body = document.getElementById("body");

var blue = document.getElementById("blue");
var red = document.getElementById("red");
var green = document.getElementById("green");
var yellow = document.getElementById("yellow");

var colors = ["blue", "red", "green", "yellow"];
var colorsArray = [];

var randomNumber = 0;
// -----------------EVENTS

body.addEventListener("keydown", randomize)

blue.addEventListener("click", changeColorBlue);
red.addEventListener("click", changeColorRed);
green.addEventListener("click", changeColorGreen);
yellow.addEventListener("click", changeColorYellow);


// -----------------FUNCTIONS---------------------

function repeat(e){
    
}


// -----------------RANDOMIZE


function randomize(e) {
    randomNumber = Math.floor(Math.random()*4);
    var nextColor = colors[randomNumber];
    if (nextColor == "blue") {
        changeColorBlue();
    }
    if (nextColor == "red") {
        changeColorRed();
    }
    if (nextColor == "green") {
        changeColorGreen();
    }
    if (nextColor == "yellow") {
        changeColorYellow();
    }
  
    
    colorsArray.push(nextColor);
    console.log(nextColor);
    console.log(colorsArray);

    for (var i=0; i < colorsArray.length; i++) {
        console.log("Hola");
    }
}


// -----------------CHAGE COLOR


function changeColorBlue(e) {
    blue.classList.toggle("fancyBlue");
    setTimeout(function prueba(e) {
        blue.classList.remove("fancyBlue")
    }, 800);
}

function changeColorRed(e) {
    red.classList.toggle("fancyRed");
    setTimeout(function prueba(e) {
        red.classList.remove("fancyRed")
    }, 800);
}

function changeColorGreen(e) {
    green.classList.toggle("fancyGreen");
    setTimeout(function prueba(e) {
        green.classList.remove("fancyGreen")
    }, 800);
}

function changeColorYellow(e) {
    yellow.classList.toggle("fancyYellow");
    setTimeout(function prueba(e) {
        yellow.classList.remove("fancyYellow")
    }, 800);
}