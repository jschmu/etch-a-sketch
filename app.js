const container = document.querySelector('.container')

function getNumber() {
    let number = prompt('How manay boxes should there be per side?', '');
    let divSize = 500 / number;
    
    for (let i = 0; i < number * number; i++) {
        const div = document.createElement('div');
        div.classList.add('new');
        div.style.setProperty('height', divSize.toString() + 'px');
        div.style.setProperty('width', divSize.toString() + 'px');
        container.appendChild(div);
    }
    const changeDivs = document.querySelectorAll('.new'); //creates a nodelist
    
    changeDivs.forEach(changeDiv => changeDiv.addEventListener('mouseover', 
    (event) => {
        event.target.style.backgroundColor = 'red';
    }));
    changeDivs.forEach(changeDiv => changeDiv.addEventListener('mouseout', 
    (event) => {
        event.target.style.backgroundColor = 'yellow';
    }));
}



