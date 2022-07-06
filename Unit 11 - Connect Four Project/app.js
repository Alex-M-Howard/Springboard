// /** Connect Four
//  *
//  * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
//  * column until a player gets four-in-a-row (horiz, vert, or diag) or until
//  * board fills (tie)
//  */
const RIGHTdiagonal = 11;
const LEFTdiagonal = 9;
let WIDTH = 7;
let HEIGHT = 6;
let gameOver = false;
let currPlayer = 1; // active player: 1 or 2
const board = []; // array of rows, each row is array of cells  (board[WIDTH][HEIGHT])

// Create game board 
const makeBoard = () => {
    for (let x = 0; x <= HEIGHT; x++){
        let row = document.createElement("div");
        row.classList.add("row");
        for (let y = 1; y <= WIDTH; y++){
            let newSquare = document.createElement("div");
            newSquare.classList.add("square", "empty",`row-${WIDTH - x}`,`column-${y}`, `_${WIDTH-x}${y}`);
            newSquare.innerText = (`${WIDTH - x}${y}`);
           
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
    if (gameOver) return;
    let emptySquare = findNextEmptyRowInCol(event.target); //Get first empty square
    checkSquare(emptySquare);
    checkForWin();
    checkBoard();
    switchPlayer();
}

const switchPlayer = () => {
    currPlayer === 1 ? currPlayer = 2 : currPlayer = 1;
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
    currPlayer === 1 ? square.classList.toggle("player1") : square.classList.toggle("player2");
    return
}

const checkBoard = () => {
    const rows = Array.from(document.querySelectorAll(".row")).reverse();
    rows.pop();         // Ignore top row where game pieces are added
    
    // Check if gameboard has more empty squares
    rows.forEach(function (row) { row.querySelectorAll(".empty").length > 0 ? boardFull = false : boardFull = true; })
    if (boardFull) endGame("TIE");
}

const endGame = (winner) => {
    gameOver = true;
    if (winner === "TIE") {
        const timer = setTimeout(() => {
            window.alert("DRAW! Game Over!")
        }, 200);
    } else {
        const timer = setTimeout(() => {
            window.alert(`Player ${winner} wins the game!`)
        }, 200);
    }
}

const checkForWin = () => {

    
    // Vertical and Horizontal Checks
    for (let y = 1; y <= HEIGHT + 1; y++) {
        
        const row = document.querySelectorAll(`.row-${y}`);
        const column = document.querySelectorAll(`.column-${y}`)
        
        for (let x = 0; x <= WIDTH; x++) {
            console.log('x', x)
            try {
                //Index 4 is the player name
                let horizontal = [row[x].classList[4], row[x + 1].classList[4], row[x + 2].classList[4], row[x + 3].classList[4]];
                let vertical = [column[x].classList[4], column[x + 1].classList[4], column[x + 2].classList[4], column[x + 3].classList[4]];
                let rightDiagonal = [document.getElementsByClassName(`row-${y} column-${x}`), document.getElementsByClassName(`row-${y + 1} column-${x + 1}`), document.getElementsByClassName(`row-${y + 2} column-${x + 2}`), document.getElementsByClassName(`row-${y + 3} column-${x + 3}`)]
                let leftDiagonal = [document.getElementsByClassName(`row-${y} column-${x}`), document.getElementsByClassName(`row-${y + 1} column-${x - 1}`), document.getElementsByClassName(`row-${y + 2} column-${x - 2}`), document.getElementsByClassName(`row-${y + 3} column-${x - 3}`)]
                
                

                // Check if every square in array is same player
                horizontal = horizontal.every((square) => square === `player${currPlayer}`)
                vertical = vertical.every((square) => square === `player${currPlayer}`)
                rightDiagonal = rightDiagonal.every((square) => square === `player${currPlayer}`)
                leftDiagonal = leftDiagonal.every((square) => square === `player${currPlayer}`)
                
                // Check for horizontal or vertical victory!
                if (horizontal || vertical || rightDiagonal || leftDiagonal) { endGame(currPlayer) }
                
            } catch {
                continue;
            }
        }
    }

    // Diagonal Checks
    for (let i = 1; i < WIDTH * HEIGHT; i++) {
        let rDiagonal = [document.getElementsByClassName(`_${i}`), document.getElementsByClassName(`_${i + RIGHTdiagonal}`), document.getElementsByClassName(`_${i + 2 * RIGHTdiagonal}`), document.getElementsByClassName(`_${i + 3 * RIGHTdiagonal}`)]
        let lDiagonal = [document.getElementsByClassName(`_${i}`), document.getElementsByClassName(`_${i + LEFTdiagonal}`), document.getElementsByClassName(`_${i + 2 * LEFTdiagonal}`), document.getElementsByClassName(`_${i + 3 * LEFTdiagonal}`)]
        // console.log('Right', i, i + RIGHTdiagonal, i + 2 * RIGHTdiagonal, i + 3 * RIGHTdiagonal)
        // console.log('Left', i, i + LEFTdiagonal, i + 2 * LEFTdiagonal, i + 3 * LEFTdiagonal)
        
        
        try {
        //    let rDiagonal = [document.getElementsByClassName(`${i}`), document.getElementsByClassName(`${i + RIGHTdiagonal}`), document.getElementsByClassName(`${i + 2 * RIGHTdiagonal}`), document.getElementsByClassName(`${i + 3 * RIGHTdiagonal}`)]
        //    let lDiagonal = [document.getElementsByClassName(`${i}`), document.getElementsByClassName(`${i + LEFTdiagonal}`), document.getElementsByClassName(`${i + 2 * LEFTdiagonal}`), document.getElementsByClassName(`${i + 3 * LEFTdiagonal}`)]
            rDiagonal = rDiagonal.map((square) => square[0].classList[4])
            lDiagonal = lDiagonal.map((square) => square[0].classList[4])

            
          
            // Store player attached to square in array
            
            // Check if every square in array is same player
 
            //rDiagonal = rDiagonal.every((square) => square.classList[4] === `player${currPlayer}`)
            // lDiagonal = lDiagonal.every((square) => square[0][0].classList[4] === `player${currPlayer}`)
            

            // Check for a diagonal victory!
            if (rDiagonal || lDiagonal) {(true) }//endGame(currPlayer) }
           
        } catch (error) {
            continue;
            console.log(error);
        }   
    }
}

makeBoard();
addEventsToTopRow();
