// DOM SELECTORS
const canvas = document.querySelector(`.canvas`);
let canvasBoxesList = document.querySelectorAll('.canvas-box');

// VARIABLES
let currentGridSize = 16;
let currentColor = "black";

// FUNCTIONS
function drawCanvasBoxes(gridSize) {
  for (i = 0 ; i < gridSize ** 2 ; i++) {
    const div = document.createElement("div");
    div.classList.add('canvas-box');
    canvas.appendChild(div);
    div.addEventListener("click", () => {
      changeElementBG(currentColor, div)
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

function changeElementBG(color, elementToChange) {
  elementToChange.classList.add(color)
}

// EVENTS



// OTHER STUFF
drawCanvasBoxes(currentGridSize)


