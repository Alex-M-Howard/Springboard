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
            newSquare.classList.add("square");
            newSquare.innerText = `${y}${WIDTH-x}`

            // If top row being created, outline so player knows where to place pieces
            if (x === 0 ){newSquare.classList.add("column-top")}
            row.append(newSquare);
        }
        document.getElementById("game-board").append(row);
    }
}

// Allow top row to be clicked to place pieces on to game board
const addEventsToTopRow = () => {
    const topSquares = document.querySelectorAll(".column-top");
    for (square of topSquares) {
        square.addEventListener("click", handleClick);
    }
}

// Attempt to place game piece on the board
const handleClick = (event) => findNextEmptyRowInCol(event.target)


// Return top empty spot (y) when column (x) clicked
const findNextEmptyRowInCol = (column) => {
    let row = column.parentElement
    
    console.log(row)
}

// function findSpotForCol(x) {
//   // TODO: write the real version of this, rather than always returning 0
//   return 0;
// }

// /** placeInTable: update DOM to place piece into HTML table of board */

// function placeInTable(y, x) {
//   // TODO: make a div and insert into correct table cell
// }

// /** endGame: announce game end */

// function endGame(msg) {
//   // TODO: pop up alert message
// }

// /** handleClick: handle click of column top to play piece */

// function handleClick(evt) {
//   // get x from ID of clicked cell
//   var x = +evt.target.id;

//   // get next spot in column (if none, ignore click)
//   var y = findSpotForCol(x);
//   if (y === null) {
//     return;
//   }

//   // place piece in board and add to HTML table
//   // TODO: add line to update in-memory board
//   placeInTable(y, x);

//   // check for win
//   if (checkForWin()) {
//     return endGame(`Player ${currPlayer} won!`);
//   }

//   // check for tie
//   // TODO: check if all cells in board are filled; if so call, call endGame

//   // switch players
//   // TODO: switch currPlayer 1 <-> 2
// }

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
