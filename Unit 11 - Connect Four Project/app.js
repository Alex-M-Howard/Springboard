// /** Connect Four
//  *
//  * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
//  * column until a player gets four-in-a-row (horiz, vert, or diag) or until
//  * board fills (tie)
//  */

let WIDTH = 7;
let HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
const board = []; // array of rows, each row is array of cells  (board[y][x])

// Create game board 
const makeBoard = () => {
    for (let x = 0; x <= HEIGHT; x++){
        let row = document.createElement("div");
        row.classList.add("row");
        for (let y = 1; y <= WIDTH; y++){
            let newSquare = document.createElement("div");
            newSquare.classList.add("square", "empty",`row-${WIDTH - x}`,`column-${y}`);

            // If top row being created, outline so player knows where to place pieces
            if (x === 0){newSquare.classList.add("column-top")}
            row.append(newSquare);
        }
        document.getElementById("game-board").append(row);
    }
}

//Select top row, add event listeners to each square
const addEventsToTopRow = () => {
    Array.from(document.querySelectorAll(".column-top")).map((square) => square.addEventListener("click", handleClick));
}

// Handle Click Event on top squares
const handleClick = (event) => {
    let emptySquare = findNextEmptyRowInCol(event.target); //Get first empty square
    checkSquare(emptySquare);
    checkForWinner();
}


// Return first empty row when top square clicked
const findNextEmptyRowInCol = (column) => {
    let columnNumberClicked = column.getAttribute("class");
    columnNumberClicked = columnNumberClicked[columnNumberClicked.indexOf("column-") + 7]; // Will grab col. number 7 is length of column-
    
    // Using Column number clicked, find all rows in column
    const rows = Array.from(document.querySelectorAll(`.column-${columnNumberClicked}`)).reverse();
    return rows.find((value) => { if (value.classList.contains("empty")) { return value } });
}

const checkSquare = (square) => {
    return square.classList.contains("row-7") ? true : placePieceInBoard(square);
}

const placePieceInBoard = (square) => {
    square.classList.toggle('empty');
    if (currPlayer === 1) {
        square.style.backgroundColor = 'blue';
        currPlayer = 2;
    } else {
        square.style.backgroundColor = 'red';
        currPlayer = 1;
    }
    return
}

const checkForWinner = () => {
    const rows = Array.from(document.querySelectorAll(".row")).reverse();
    rows.pop();         // Ignore top row where game pieces are added
    
    // Check if gameboard has more empty squares
    rows.forEach(function (row) { row.querySelectorAll(".empty").length > 0 ? boardFull = false : boardFull = true; })
    





    if (boardFull){console.log('GAME OVER')}
}


// /** endGame: announce game end */

// function endGame(msg) {
//   // TODO: pop up alert message
// }



//   // check for win
//   if (checkForWin()) {
//     return endGame(`Player ${currPlayer} won!`);
//   }

//   // check for tie
//   // TODO: check if all cells in board are filled; if so call, call endGame

// /** checkForWin: check board cell-by-cell for "does a win start here?" */

// function checkForWin() {
//   function _win(cells) {
//     // Check four cells to see if they're all color of current player
//     //  - cells: list of four (y, x) cells
//     //  - returns true if all are legal coordinates & all match currPlayer

//     return cells.every(
//       ([y, x]) =>
//         y >= 0 &&
//         y < HEIGHT &&
//         x >= 0 &&
//         x < WIDTH &&
//         board[y][x] === currPlayer
//     );
//   }

//   // TODO: read and understand this code. Add comments to help you.

//   for (var y = 0; y < HEIGHT; y++) {
//     for (var x = 0; x < WIDTH; x++) {
//       var horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
//       var vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
//       var diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
//       var diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

//       if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
//         return true;
//       }
//     }
//   }
// }

makeBoard();
addEventsToTopRow();
