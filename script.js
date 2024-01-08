const GRIDSIZE = 600;
let squaresPerSide = 16;

// Set width and height of sketch area
const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${GRIDSIZE}px`;
sketchArea.style.height = `${GRIDSIZE}px`;

function fillGrid() {
    this.style.backgroundColor = "black";
}

// Create Grid
function createGrid(){
    const totalSquares = squaresPerSide * squaresPerSide;
    const widthOrHeight = `${(GRIDSIZE / squaresPerSide) - 2}px`;
    
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
createGrid();

