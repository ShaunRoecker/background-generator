

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")

// function for changing the css file
function setGradient(){
    body.style.background = "linear-gradient(to right," +
    color1.value + ","
    +color2.value + ")";

    css.textContent = body.style.background + ";";
}

// calling the setGradient function when a new color is selected
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)


color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)




























