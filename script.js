const gridContainer = document.getElementById("gridContainer");

function createGrid() {
    let size = prompt("Enter the dimensions of the grid you want:");
    let gridSize = size * size;
    if (typeof size == "string") {
        size = parseInt(size);
        if (size <= 100) {
            // Set the number of rows and columns directly based on size
            gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
            gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
            return createDiv(gridSize);
        } else if (size > 100) {
            console.log("The maximum grid size is 100x100! Please make a smaller grid.");
        } else if (typeof size != "string") {
            console.log("Please input your desired grid size as a string of numbers.");
        }
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

gridContainer.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("gridid")) {
      event.target.style.backgroundColor = "black";
    }
});

let isColorButtonPressed = false;

document.getElementById("color").addEventListener("click", function () {
    isColorButtonPressed = !isColorButtonPressed;
});

gridContainer.addEventListener("mouseover", function (event) {
    if (isColorButtonPressed && event.target.classList.contains("gridid")) {
        const colorPicker = document.getElementById("colorpicker");
        event.target.style.backgroundColor = colorPicker.value;
    }
});

document.getElementById("erase").addEventListener("click", function () {
  let gridItems = document.querySelectorAll(".gridid");
  gridItems.forEach(function (item) {
    item.style.removeProperty("background-color");
  });
});
