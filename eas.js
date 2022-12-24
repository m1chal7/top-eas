// Const gridNumber=prompt 

// Gridwrapper. Styles. Gridtemplate colums = gridNumber 

// For i < gridNumber xx2

// Create div 

// Const divs = queryselectorall div 

// Divs event listener hover div add class hovered 

// Const button get element 

// buttona event listener prompt(gridNumber) 
// Return GridNumber? 


// Do all in one function

// Button events run function 

// Grid styling etc reordered 


// Check how to assign variable from input or select 


const gridNumber = prompt('enter a nr');



const gridWrapper = document.querySelector('.grid-wrapper');
gridWrapper.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;

const gridElement = document.createElement('div');
gridElement.classList.add('grid-element');

const reset = document.querySelector('.reset');


for (i = 0; i < gridNumber**2; i++ ) {
    gridWrapper.appendChild(gridElement.cloneNode(true));
    
}

const gridEls = document.querySelectorAll('.grid-element');
console.log(gridEls);

gridWrapper.addEventListener('mouseover', (e) => {
    e.target.classList.add('hovered');
    
})

gridWrapper.addEventListener('click', (e) => {
    e.target.classList.remove('hovered');
    
})

reset.addEventListener('click', () => {
    gridEls.forEach(grid => {
        grid.classList.remove('hovered');
    });
    
})

