let container = document.querySelector("#container");

let gridSize = prompt("How many columns?"); //placeholder value
container.style.gridTemplateColumns="repeat("+gridSize+", 1fr)";
container.style.gridTemplateRows="repeat("+gridSize+", 1fr)";


for(let i=0; i<(gridSize*gridSize); i++){
    var grid = document.createElement("div");
    grid.className = "etchgrid";
    container.appendChild(grid);};

 //ervoor zorgen dat gridsize werkt maar ook dat container hetzelfde blijft.



