let grid = document.querySelector(".grid");
let col = document.querySelector(".col");
let row = document.querySelector(".row");
let sizeButton = document.querySelector(".size-button");
let clearButton = document.querySelector(".clear-button");

sizeButton.addEventListener("click", () => {
    let x = prompt("Enter grid size:");
    gridSize(x);
});

clearButton.addEventListener("click", clearGrid);

function gridSize(x) {
    if (x > 100) {
        return alert("Maximum value of 100");
    }

    for (let i = 0; i < x; i++) {
        let col = document.createElement("div");
        grid.appendChild(col);
        col.classList.add("col");
        for (let j = 0; j < x; j++) {
            let row = document.createElement("div");
            col.append(row);
            row.classList.add("row");
            row.addEventListener("mouseover", () => {
                row.style.cssText = "background-color: black";
            });
        }
    }
}

function clearGrid() {
    location.reload();
}


