

const btnSize = document.querySelector('#btn_size');
const board = document.querySelector('#board');


btnSize.addEventListener('click', () => {
    size = prompt('Grid Size?', 16);
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
    console.log(size);
    newBoard(size);
});


board.addEventListener('mouseover', 
    (event) => {event.target.style.backgroundColor = 'black'});


function newBoard(size=16) {
    for (let r = 0; r < size; r++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (let f = 0; f < size; f++) {
            const field = document.createElement('div');
            field.setAttribute('id', `${r}-${f}`);
            field.classList.add('field');
            row.appendChild(field);
        }
        board.appendChild(row);
    }
};

newBoard();


