const GRIDSIZE = 600;
let sideLength = 16;

// Set width and height of sketch area
const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${GRIDSIZE}px`;
sketchArea.style.height = `${GRIDSIZE}px`;

function fillGrid() {
    this.style.backgroundColor = "black";
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

// Call createGrid function 
createGrid(sideLength);

// Changes grid baesd on new slider value
function changeGrid() {

    // Remove the current grid before placing new one
    while(sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }

    // Prompt user to choose grid size
    // let newGrid = prompt("Enter a grid size between 1-100 (a X a)");
    // newGrid = parseInt(newGrid);
    // console.log(newGrid);
    // while(newGrid < 0 || newGrid > 100 || newGrid) {
    //     newGrid = prompt("Enter a valid grid size between 1-100 (a X a)");
    // }
    let newGrid = slider.value;
    // Use user-prompted grid size to create new grid
    createGrid(newGrid);
}

const slider = document.querySelector(".slider");
const rangeOutput = document.querySelector("#range-display");
slider.addEventListener("input", rangeDisplay);

function rangeDisplay() {
    rangeOutput.innerHTML = slider.value + " x " + slider.value;
}

const button = document.querySelector("#apply-button");
button.addEventListener("click", changeGrid);


