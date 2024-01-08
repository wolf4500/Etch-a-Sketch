const GRIDSIZE = 600;
let rows = 16;
let cols = 16;

// Set width and height of sketch area
const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${GRIDSIZE}px`;
sketchArea.style.height = `${GRIDSIZE}px`;

// Create Grid
function createGrid(){
    for(let i = 0; i < rows * cols; i++) {
        gridCell = document.createElement("div");

        gridCell.style.width = `${(GRIDSIZE / cols) - 2}px`;
        gridCell.style.height = `${(GRIDSIZE / rows) - 2}px`;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);
    }
}

// Call createGrid function 
createGrid();

