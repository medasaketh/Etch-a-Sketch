const grid = document.getElementById('grid');
const color = document.querySelectorAll('.colorbtns > button');
const erase = document.getElementById('erase');

let colorvar = '000000';
color.forEach(button => {button.addEventListener('click', colorchng)});

function colorchng(e) {

    if(e.target.classList.contains('red')){
        colorvar = 'FF0000';
    }
    else if (e.target.classList.contains('black')){
    
        colorvar = '000000';
    }
    else if (e.target.classList.contains('blue')){
    colorvar = '0000FF';
    }
    else if (e.target.classList.contains('color')){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        colorvar = `${randomColor}`;
    }
    else if (e.target.classList.contains('rainbow')){
        colorvar = 'Rainbow';
    }
    }

function createGrid(size,isFirstcall){

if (isFirstcall==false){
    resetgrid();
}
 grid.style.setProperty('--n',size);

for (let i=0;i<size*size;i++){

let cell = document.createElement('div');

cell.classList.add('cell'); 

cell.addEventListener('mouseover', (e) => {
if(colorvar == 'Rainbow'){
    e.target.setAttribute('style',`background-color: #${Math.floor(Math.random()*16777215).toString(16)};`);
}else{
    e.target.setAttribute('style',`background-color: #${colorvar};`);
}
})

erase.addEventListener('click',()=>{
    cell.style.backgroundColor = 'whitesmoke';
})


grid.appendChild(cell);
}




}


createGrid(32,true);

function resetgrid(){
  const  resetcell = document.querySelectorAll(".cell");
    resetcell.forEach((e) => e.parentNode.removeChild(e));
}