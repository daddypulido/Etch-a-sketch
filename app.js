const container = document.querySelector('.container');
const allDivs = document.querySelectorAll('.grid')
let gridSize = document.querySelector('.grid-size');



const gridChoices = [];
for(let j = 1; j <= 64 ; j++){
    gridChoices.push(j);
}

         gridSize.addEventListener('click',()=> {
 let numberChoice = prompt('Please chose grid size')
 let toNum = parseFloat(numberChoice);
 if(gridChoices.includes(toNum)){
    makeRows(toNum,toNum)
    hoverColor()
} else {
  alert('Max width or height 64.Please try again')
}
        })
   
     




// function that creates the the divs inside of the container
function makeRows(rows,cols){
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-cols',cols)
    for(let d =0; d < (rows * cols); d++){
let cell = document.createElement('div');
cell.classList.add('grid');

container.appendChild(cell)

}
}



let elements = document.getElementsByClassName("grid");
const eraser = document.querySelector('.eraser');

// function that allows to execute change color
//  to the current element that the mouse hovers over
function hoverColor(){
    for(let i = 0 ; i < elements.length; i++){
        elements[i].addEventListener("mouseover",changeColor)

    }
}



function eraserButton(){
    eraser.addEventListener("click",() =>{
    window.location.reload()
    })

}
eraserButton()
// function that allows the RGB to change the color of the current element
function changeColor(){
        let red = document.getElementById('red').value;
        let green = document.getElementById('green').value;
        let blue = document.getElementById('blue').value;
        let color = `rgb(${red},${green},${blue})`;   
        document.getElementById('box').value = color;
        this.style.backgroundColor = color; 
}



