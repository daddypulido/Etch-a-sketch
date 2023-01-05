const container = document.querySelector('.container');



function makeDiv(numDivs){
    for(let d =0; d < numDivs; d++){
let square = document.createElement('div');
square.classList.add('grid');
container.appendChild(square)

}
}
makeDiv(256)



let elements = document.getElementsByClassName("grid");
for(let i = 0 ; i < elements.length; i++){
    elements[i].addEventListener("mouseover",changeColor)
   


}



function changeColor(){
        let red = document.getElementById('red').value;
        let green = document.getElementById('green').value;
        let blue = document.getElementById('blue').value;
        let color = `rgb(${red},${green},${blue})`;   
        document.getElementById('box').value = color;
        this.style.backgroundColor = color; 
    console.log(color)
}


