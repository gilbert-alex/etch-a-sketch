// client side script for etch-a-sketch

// globals
const btnSize = document.querySelector('#btn_size');
const board = document.querySelector('#board');
const btnReset = document.querySelector('#btn_reset');
let size = 16


btnSize.addEventListener('click', () => {
    let valid = false;

    while (!valid) { // prompt validation
        size = prompt('Grid Size?', 16);
        if (size >= 16 && size <= 100) {
            valid = true;
        }
    }

    while (board.firstChild) { // delete existing board
        board.removeChild(board.firstChild);
    }
    newBoard(size);
});


btnReset.addEventListener('click', () => {
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
    newBoard(size);
});


board.addEventListener('mouseover', 
    (event) => {
        if (event.target.classList.contains('field')) {
            event.target.style.backgroundColor = 'grey';
        }
    });


function newBoard(size) {
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

// default board at page load
newBoard(size);


