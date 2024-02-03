// DOM SELECTORS
const canvas = document.querySelector(".canvas");
let activeColor;
const randomToggle = document.getElementById("random");
const gridButton = document.getElementById("grid");
const resetButton  = document.getElementById("reset");

// VARIABLES
let currentGridSize = 16
  , currentColor = "black"
  , currentMode = "normal"
  , colorsList = ["white", "black", "red", "blue", "green", "yellow", "brown", "pink"];

// FUNCTIONS
function drawCanvasBoxes() {
  for (i = 0 ; i < currentGridSize ** 2 ; i++) {
    const div = document.createElement("div")
    div.classList.add("canvas-box")
    div.style.height = 560 / currentGridSize + "px"
    div.style.width = 560 / currentGridSize + "px"
    canvas.appendChild(div)
    div.addEventListener("click", () => {
      changeElementBG(div)
    })
  }
}

function drawColorPicker() {
  colorsList.forEach(element => {
    const div = document.createElement("div")
    div.classList.add("color")
    div.style.backgroundColor = element
    document.querySelector(".colors").appendChild(div)
    div.addEventListener("click", () => {
      currentColor = element;
      activeColor.classList.remove("active")
      activeColor = div;
      activeColor.classList.add("active")
    })
  });
  activeColor = document.querySelector(".color:nth-child(2)")
}

function removeCanvasBoxes() {
  let canvasBoxes = document.querySelectorAll(".canvas-box")
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
    elementToChange.style.backgroundColor = colorsList[getRandomNum(1, colorsList.length - 1)];
  }
}

function changeGrid() {
size = prompt("Input grid size(2-60)", 16)
  if (size >= 2 && size <= 60) {
    currentGridSize = size;
    removeCanvasBoxes()
    drawCanvasBoxes(size)
  }
}

// EVENTS
randomToggle.addEventListener("click", () => {
  if (currentMode != "random") {
    currentMode = "random"
    randomToggle.classList.add("active")
  } else {
    currentMode = "normal";
    randomToggle.classList.remove("active")
  }
})

gridButton.addEventListener("click", () => {changeGrid()})

resetButton.addEventListener("click", () => {
  removeCanvasBoxes()
  drawCanvasBoxes()
})

// OTHER SHIT
drawCanvasBoxes()
drawColorPicker()
activeColor.classList.add("active")
