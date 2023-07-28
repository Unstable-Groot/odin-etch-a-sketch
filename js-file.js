const container = document.querySelector(".grid-container");

const size = prompt("what size grid?");

for (let i = 0; i < size * size; i++){
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.width = 100.0 / size + "%"
    block.addEventListener("mouseover", fadein);
    block.addEventListener("mouseout", fadeout);
    container.appendChild(block);
}

function fadein() {
    this.classList.add("test");
}
function fadeout() {
    this.classList.remove("test");
}