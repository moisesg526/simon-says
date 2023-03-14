const green = document.querySelector("#green");
const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const blue = document.querySelector("#blue");

// green.addEventListener("click", playGreen)
green.addEventListener("click", nextSequence )
// red.addEventListener("click", playRed)
red.addEventListener("click", nextSequence )
// yellow.addEventListener("click", playYellow)
yellow.addEventListener("click", nextSequence )
// blue.addEventListener("click", playBlue)
blue.addEventListener("click", nextSequence )

green.addEventListener("click", e => {
    console.log("Clicked on green");
})
red.addEventListener("click", e => {
    console.log("Clicked on red");
})

yellow.addEventListener("click", e => {
    console.log("Clicked on yellow");
})
blue.addEventListener("click", e => {
    console.log("Clicked on blue");
})


// function playGreen() {
//     const audio = new Audio("/sounds/green.mp3");
//     audio.play();
// }
// function playRed() {
//     const audio = new Audio("/sounds/red.mp3");
//     audio.play();
// }
// function playYellow() {
//     const audio = new Audio("/sounds/yellow.mp3");
//     audio.play();
// }
// function playBlue() {
//     const audio = new Audio("/sounds/blue.mp3");
//     audio.play();
// }

let colors = ["green", "red", "yellow", "blue"];
let gameOrder = [];
let playerOrder = [];
let started = false;
let level = 0;

function nextSequence() {
    playerOrder = [];

    level++;
    document.getElementById("instructions").innerHTML = `Level ${level}`;

    let randomNum = Math.floor(Math.random() * 4);
    let randomColor = colors[randomNum];
    gameOrder.push(randomColor);
    sounds(randomColor);
};


function sounds(name) {
    let  audio = new Audio("sounds/" + name + ".mp3" );
    audio.play();
};

document.addEventListener("keydown", function() {
    if(!started) {
        document.querySelector("#instructions").innerHTML = `Level ${level}`;
        nextSequence();
        started = true;
    }
});

function startOver() {
    level = 0;
    gameOrder = [];
    started = false;
};