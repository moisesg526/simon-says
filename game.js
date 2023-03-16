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

document.addEventListener("keydown", function() {
    if(!started) {
        document.querySelector("#instructions").innerHTML = `Level ${level}`;
        btnCliked();
        started = true;
    }
});

const getRandomColors = () => {
  let randomNum = Math.floor(Math.random() * 4);
  let randomColor = colors[randomNum];
  return randomColor;
};

let order = [getRandomColors()];

let getOrder = [...order];

const highlight = (btn) => {
  return new Promise((resolve, rej) => {
    btn.className += " active";
    setTimeout(() => {
      btn.className = btn.className.replace(" active", "");
      setTimeout(() => {
        resolve();
      }, 300);
    }, 500);
  });
};

let started = false;
let level = 1;

function btnCliked(buttonClicked) {
  const exactBtn = getOrder.shift();
  if (exactBtn === buttonClicked) {
    if (getOrder.length === 0) {
      order.push(getRandomColors());
      getOrder = [...order];
      sequence();
      document.querySelector("#instructions").innerHTML = `Level ${level}`;
    }
  } else {
    document.querySelector("#instructions").innerHTML =
      "Wrong Button Game Over. Press any key to restart game";
    playWrong();
    startOver();
  }
}

const sequence = async () => {
  started = false;
  for (const btn of order) {
    await highlight(btn);
  }
  started = true;
  level++;
};

sequence();

function startOver() {
  level = 1;
  order = [];
  started = false;
}


//CONSOLE LOG THE COLORS

green.addEventListener("click", (e) => {
  console.log("Clicked on green");
});
red.addEventListener("click", (e) => {
  console.log("Clicked on red");
});

yellow.addEventListener("click", (e) => {
  console.log("Clicked on yellow");
});
blue.addEventListener("click", (e) => {
  console.log("Clicked on blue");
});

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
