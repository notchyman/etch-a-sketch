const gridContainer = document.getElementById("gridContainer");

function createGrid() {
  let size = prompt("Enter the dimensions of the grid you want:");
  if (typeof size == "string") {
    size = parseInt(size);
    let gridSize = size * size;
    createDiv(gridSize);
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 20px)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 20px)`;
    return createDiv(gridSize);
  }
}

function createDiv(gridSize) {
  let gridItems = [];
  for (var i = 0; i < gridSize; i++) {
    var new_div = document.createElement("div");
    new_div.className = "gridid";
    gridContainer.appendChild(new_div);
    gridItems.push(new_div);
  }
  return gridItems;
}

createGrid();

document.getElementById("changeSize").onclick = function () {
  const newGridItems = createGrid();
  gridContainer.replaceChildren(...newGridItems);
};
