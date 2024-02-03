// DOM SELECTORS
const canvas = document.querySelector('.canvas');
let canvasBoxesList = document.querySelectorAll('.canvas-box');
const colors = document.querySelectorAll(".color");

// VARIABLES
let currentGridSize = 16
  , currentColor = "black"
  , currentMode = "random";

// FUNCTIONS
function drawCanvasBoxes(gridSize) {
  for (i = 0 ; i < gridSize ** 2 ; i++) {
    const div = document.createElement("div");
    div.classList.add('canvas-box');
    canvas.appendChild(div);
    div.addEventListener("click", () => {
      changeElementBG(div)
    })
  }
  canvasBoxesList = document.querySelectorAll('.canvas-box');
}

function removeCanvasBoxes() {
  let canvasBoxes = document.querySelectorAll('.canvas-box')
  canvasBoxes.forEach(element => {
    canvas.removeChild(element);
  });
}

function getRandomNum (min, max) {
  // magical code here
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function changeElementBG(elementToChange) {
  if (currentMode == "normal") {
    elementToChange.style.backgroundColor = currentColor;
  } else if (currentMode == "random") {
    elementToChange.style.backgroundColor = 0;
  }
}

// EVENTS



// OTHER STIT
drawCanvasBoxes(currentGridSize)


