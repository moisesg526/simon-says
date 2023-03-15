const green = document.querySelector(".green");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");

// Sounds for each button

green.addEventListener("click", playGreen);
red.addEventListener("click", playRed);
yellow.addEventListener("click", playYellow);
blue.addEventListener("click", playBlue);

let colors = [green, red, yellow, blue];

const getRandomColors = () => {
  let randomNum = Math.floor(Math.random() * 4);
  let randomColor = colors[randomNum];
  return randomColor;
};

const order = [getRandomColors()];

let getOrder = [...order];

const highlight = (btn) => {
  return new Promise((resolve, rej) => {
    btn.className += " active";
    setTimeout(() => {
      btn.className = btn.className.replace(" active", "");
      setTimeout(() => {
        resolve();
      }, 300);
    }, 1000);
  });
};

let started = false;

const btnCliked = (buttonClicked) => {
  if (!started) return;
  const exactBtn = getOrder.shift();
  if (exactBtn === buttonClicked) {
    if (getOrder.length === 0) {

      order.push(getRandomColors());
      getOrder = [...order];
      sequence();
    }
  } else {
    document.querySelector("#instructions").innerHTML = "Wrong Button Game Over";
    playWrong();
  }
};


const sequence = async () => {
  started = false;
  for (const btn of order) {
    await highlight(btn);
  }
  started = true;
};

sequence();



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

// SOUNDS FOR BUTTONS

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

function playWrong() {
    const audio = new Audio("/sounds/wrong.mp3");
    audio.play();
}

// document.addEventListener("keydown", function() {
//     if(!started) {
//         document.querySelector("#instructions").innerHTML = `Level ${level}`;
//         sequence();
//         started = true;
//     }
// });

// function startOver() {
//     level = 0;
//     gameOrder = [];
//     started = false;
// };