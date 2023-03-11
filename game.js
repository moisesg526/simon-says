const green = document.querySelector("#green-id");
const red = document.querySelector("#red-id");
const yellow = document.querySelector("#yellow-id");
const blue = document.querySelector("#blue-id");

green.addEventListener("click", playGreen)
red.addEventListener("click", playRed)
yellow.addEventListener("click", playYellow)
blue.addEventListener("click", playBlue)

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

function playGreen() {
    const audio = new Audio("/sounds/green.mp3");
    audio.play();
}
function playRed() {
    const audio = new Audio("/sounds/red.mp3");
    audio.play();
}
function playYellow() {
    const audio = new Audio("/sounds/yellow.mp3");
    audio.play();
}
function playBlue() {
    const audio = new Audio("/sounds/blue.mp3");
    audio.play();
}

const colors = ["green", "red", "yellow", "blue"];
const gameOrder = [];
const playerOrder = [];

const started = false;


