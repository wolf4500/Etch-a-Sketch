const GRIDSIZE = 600;
let sideLength = 16;

// Set width and height of sketch area
const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${GRIDSIZE}px`;
sketchArea.style.height = `${GRIDSIZE}px`;

function fillGrid() {
    this.style.backgroundColor = "black";
}

function rangeDisplay() {
    rangeOutput.innerHTML = slider.value + " x " + slider.value;
}

function changeGrid() {

    // Remove the current grid before placing new one
    while(sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }

    let newGrid = slider.value;

    // Use user-prompted grid size to create new grid
    createGrid(newGrid);
}

// Create Grid
function createGrid(squaresPerSide){
    const totalSquares = squaresPerSide * squaresPerSide;
    const widthOrHeight = `${(GRIDSIZE / squaresPerSide) - 2}px`;

    // Add grid cells to the sketch area
    for(let i = 0; i < totalSquares; i++) {
        gridCell = document.createElement("div");

        gridCell.style.width = widthOrHeight;
        gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", fillGrid);
    }
}

// Call createGrid function using initial 16 x 16 value
createGrid(sideLength);

// Adjust slider output 
const slider = document.querySelector(".slider");
const rangeOutput = document.querySelector("#range-display");
slider.addEventListener("input", rangeDisplay);

// Changes grid based on new slider value
const button = document.querySelector("#apply-button");
button.addEventListener("click", changeGrid);