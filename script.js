// -----------------VARIABLES
var containerFluid = document.getElementById("container-fluid")
var body = document.getElementById("body");
var title = document.getElementById("title");
var blue = document.getElementById("blue");
var red = document.getElementById("red");
var green = document.getElementById("green");
var yellow = document.getElementById("yellow");
var button = document.getElementById("button");
var startButton = document.getElementById("start-button");
var startButtonContainer = document.getElementById("start-button-container");

var colors = ["blue", "red", "green", "yellow"];
var colorsArray = [];
var clicksArray = [];

var randomNumber = 0;
var onOff = 0;
var isItYourTurn = 0;



var highScore = document.getElementById("high-score");
var record = 0;
// -----------------EVENTS

startButton.addEventListener("click", begin);


    blue.addEventListener("click", clickChangeColorBlue);
    red.addEventListener("click", clickChangeColorRed);
    green.addEventListener("click", clickChangeColorGreen);
    yellow.addEventListener("click", clickChangeColorYellow);


body.addEventListener("mouseover", isItNextLevel);



// -----------------FUNCTIONS---------------------
function isItNextLevel() {
    if (clicksArray.length === colorsArray.length) {
        nextLevel();
    }
}

// -----------------BEGIN

function begin() {
    if (onOff == 0) {
        containerFluid.classList.remove("container-fluid-lost");
        randomize();
        startButtonContainer.classList.toggle("button-pressed");
        clicksArray = [];
    }
}

// -----------------HIGH SCORE

function setHighScore() {

    if (colorsArray.length > record) {
        record = colorsArray.length;
        highScore.innerHTML = "High Score: " + record;
    }
}

// -----------------CHANGE COLORS


function changeColors(color) {
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
    isItYourTurn++;
    console.log(isItYourTurn);
    randomNumber = Math.floor(Math.random() * 4);
    var nextColor = colors[randomNumber];
    colorsArray.push(nextColor);
    console.log(nextColor);
    console.log(colorsArray);

    var i = 0

    function loop() {
        setTimeout(
            function () {
                changeColors(colorsArray[i]);
                i++;
                if (i < colorsArray.length) {
                    loop();
                }
            }, 1000)
    }
    loop();
    title.innerHTML = "Level " + colorsArray.length;
    onOff++;
    setHighScore();
}


// -----------------CHAGE COLOR

function changeColorBlue(e) {
    blue.classList.toggle("fancyBlue");
    setTimeout(function prueba(e) {
        blue.classList.remove("fancyBlue")
    }, 800);
    playC();
}

function changeColorRed(e) {
    red.classList.toggle("fancyRed");
    setTimeout(function prueba(e) {
        red.classList.remove("fancyRed")
    }, 800);
    playEb();
}

function changeColorGreen(e) {
    green.classList.toggle("fancyGreen");
    setTimeout(function prueba(e) {
        green.classList.remove("fancyGreen")
    }, 800);
    playF();
}

function changeColorYellow(e) {
    yellow.classList.toggle("fancyYellow");
    setTimeout(function prueba(e) {
        yellow.classList.remove("fancyYellow")
    }, 800);
    playG();
}

// -----------------CLICK - CHAGE COLOR

function clickChangeColorBlue(e) {
    blue.classList.toggle("fancyBlue");
    setTimeout(function prueba(e) {
        blue.classList.remove("fancyBlue")
    }, 800);
    clicksArray.push("blue");
    console.log(clicksArray);
    playC();
}

function clickChangeColorRed(e) {
    red.classList.toggle("fancyRed");
    setTimeout(function prueba(e) {
        red.classList.remove("fancyRed")
    }, 800);
    clicksArray.push("red");
    console.log(clicksArray);
    playEb()
}

function clickChangeColorGreen(e) {
    green.classList.toggle("fancyGreen");
    setTimeout(function prueba(e) {
        green.classList.remove("fancyGreen")
    }, 800);
    clicksArray.push("green");
    console.log(clicksArray);
    playF();
}

function clickChangeColorYellow(e) {
    yellow.classList.toggle("fancyYellow");
    setTimeout(function prueba(e) {
        yellow.classList.remove("fancyYellow")
    }, 800);
    clicksArray.push("yellow");
    console.log(clicksArray);
    playG();
}

// -----------------NEXT LEVEL
function nextLevel() {
    for (var k = 0; k < colorsArray.length; k++) {
        if (JSON.stringify(colorsArray) == JSON.stringify(clicksArray)) {
            console.log("Ganaste");
            clicksArray = [];
            randomize();
            break;
        } else {
            onOff = 0;
            title.innerHTML = "Press Any Key to Start";
            console.log("Perdiste");
            colorsArray = [];
            clicksArray = [];
            containerFluid.classList.toggle("container-fluid-lost");
            title.innerHTML = "WRONG!";
            setTimeout(function delay() {
                startButtonContainer.classList.remove("button-pressed");
                title.innerHTML = "Press Start"
            }, 1000);

            break;
        }
    }
}



// -----------------SOUNDS


function playC() {
    var c = new Audio();
    c.src = "./C.mp3"
    c.play();
}

function playEb() {
    var eb = new Audio();
    eb.src = "./eb.mp3"
    eb.play();
}

function playF() {
    var f = new Audio();
    f.src = "./f.mp3"
    f.play();
}

function playG() {
    var g = new Audio();
    g.src = "./g.mp3"
    g.play();
}