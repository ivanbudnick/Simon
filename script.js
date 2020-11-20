// -----------------VARIABLES

var body = document.getElementById("body");
var title = document.getElementById("title");
var blue = document.getElementById("blue");
var red = document.getElementById("red");
var green = document.getElementById("green");
var yellow = document.getElementById("yellow");
var button = document.getElementById("button");

var colors = ["blue", "red", "green", "yellow"];
var colorsArray = [];
var clicksArray = [];

var randomNumber = 0;
var onOff = 0;
// -----------------EVENTS

body.addEventListener("keydown", begin);
button.addEventListener("click", nextLevel);

blue.addEventListener("click", clickChangeColorBlue);
red.addEventListener("click", clickChangeColorRed);
green.addEventListener("click", clickChangeColorGreen);
yellow.addEventListener("click", clickChangeColorYellow);


// -----------------FUNCTIONS---------------------

// -----------------BEGIN

function begin(){
    if (onOff == 0){
randomize();
    }
    }

// -----------------CHANGE COLORS


function changeColors(color){
    if (color == "blue") {
        changeColorBlue();
    }
    if (color == "red") {
        changeColorRed();
    }
    if (color == "green") {
        changeColorGreen();
    }
    if (color == "yellow") {
        changeColorYellow();
    }
}

// -----------------RANDOMIZE


function randomize(e) {
    randomNumber = Math.floor(Math.random()*4);
    var nextColor = colors[randomNumber];
    
    colorsArray.push(nextColor);
    console.log(nextColor);
    console.log(colorsArray);
    
    var i=0
    function loop(){
        setTimeout(
            function(){
                changeColors(colorsArray[i]);
                i++;
                if (i<colorsArray.length){loop();}
            }
        ,1000)        
    }
    loop();
title.innerHTML = "Level "+ colorsArray.length;
onOff++;
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

// -----------------CLICK - CHAGE COLOR

function clickChangeColorBlue(e) {
    blue.classList.toggle("fancyBlue");
    setTimeout(function prueba(e) {
        blue.classList.remove("fancyBlue")
    }, 800);
    clicksArray.push("blue");
    console.log(clicksArray);
}

function clickChangeColorRed(e) {
    red.classList.toggle("fancyRed");
    setTimeout(function prueba(e) {
        red.classList.remove("fancyRed")
    }, 800);
    clicksArray.push("red");
    console.log(clicksArray);
}

function clickChangeColorGreen(e) {
    green.classList.toggle("fancyGreen");
    setTimeout(function prueba(e) {
        green.classList.remove("fancyGreen")
    }, 800);
    clicksArray.push("green");
    console.log(clicksArray);
}

function clickChangeColorYellow(e) {
    yellow.classList.toggle("fancyYellow");
    setTimeout(function prueba(e) {
        yellow.classList.remove("fancyYellow")
    }, 800);
    clicksArray.push("yellow");
    console.log(clicksArray);
}

// -----------------NEXT LEVEL
function nextLevel(){
for (var k=0; k < colorsArray.length; k++){
    if (JSON.stringify(colorsArray)==JSON.stringify(clicksArray)) {
        console.log ("Ganaste"); 
        clicksArray = [];
        randomize();
        break;
    } else {
        onOff = 0;
        title.innerHTML = "Press Any Key to Start";
        console.log("Perdiste");
        colorsArray = [];
        clicksArray = [];
        break;
    }
}
}
