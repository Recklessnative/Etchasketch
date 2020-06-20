let container = document.querySelector("#container");
let input = document.querySelector("#inputsize");
let gridSize = 32; //placeholder value
let button =  document.querySelector("#changegridsize");
let mode = "standard";

button.addEventListener("click", () =>{
container.innerHTML="";
gridSize = input.value;
container.style.gridTemplateColumns="repeat("+gridSize+", 1fr)";
container.style.gridTemplateRows="repeat("+gridSize+", 1fr)";
createGrid();
container.style.border="black solid"
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  


function createGrid(){
for(let i=0; i<(gridSize*gridSize); i++){
    var grid = document.createElement("div");
    grid.className = "etchgrid";
    container.appendChild(grid);
    grid.addEventListener("mouseover", (e) => {
        if(document.getElementById("colours").checked == false){
        e.target.style.backgroundColor="black";
    }

    else{
        e.target.style.backgroundColor=getRandomColor();



    }
        
        
        })
  
};};








 //ervoor zorgen dat gridsize werkt maar ook dat container hetzelfde blijft.



