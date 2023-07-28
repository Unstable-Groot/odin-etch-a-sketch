const bColor = "#dfdfdf";

const body = document.querySelector("body");
body.style.backgroundColor = bColor

const container = document.querySelector(".grid-container");

const resizeBtn = document.querySelector(".btn-zone button");
resizeBtn.addEventListener("click", createGrid);

function fadein() {
    this.style.backgroundColor = "#000000";
    this.style.transition = "all 0s";
}
function fadeout() {
    this.style.backgroundColor = bColor;
    this.style.transition = "all 3s";
}

function createGrid() {
    let size = prompt("what size grid?");

    //intput check and limit size
    if (size == null || size == "" || isNaN(1+size)) return;
    if (size > 100) size = 100;
    
    container.style.border = "7px solid black" //make grid visable
    resizeBtn.textContent = "Click again to create new Grid"
    //clear old grid
    container.innerHTML = "";
    
    //create grid
    for (let i = 0; i < size * size; i++){
        const block = document.createElement("div");
        block.classList.add("block");
        block.style.width = 100.0 / size + "%"
        block.style.aspectRatio = 1;
        block.addEventListener("mouseover", fadein);
        block.addEventListener("mouseout", fadeout);
        container.appendChild(block);
    }

    return
}





