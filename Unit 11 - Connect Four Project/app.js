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
            // Create new square - Label with Row # and Col #
            let newSquare = document.createElement("div");
            newSquare.classList.add("square", "empty", `row-${WIDTH - x}`, `column-${y}`);
            
            // If top row being created, outline so player knows where to place pieces
            if (x === 0){newSquare.classList.add("column-top")}
            row.append(newSquare);
        }
        document.getElementById("game-board").append(row);
    }
}

//Select top row, add event listeners to each square
const addEventsToTopRow = () => {
    Array.from(document.querySelectorAll(".column-top")).map((square) => {
        square.addEventListener("click", handleClick);
        square.addEventListener("mouseenter", mouseEnter);
        square.addEventListener("mouseleave", mouseLeave);
    })
}

const mouseEnter = (event) => addPlayerToken(event);
const mouseLeave = () => removePlayerToken();

const addPlayerToken = (event) => {
    let image = document.getElementById(`player${currPlayer}`).firstElementChild.getAttribute("src")
    let playerToken = document.createElement("img");
    playerToken.setAttribute("src", image);
    playerToken.classList.add("player-token");
    event.target.append(playerToken);
}

const removePlayerToken = () => {
    let playerToken = document.getElementsByClassName("player-token")[0];
    playerToken.remove();
}

const changePlayerToken = () => {
    let image = document.getElementById(`player${currPlayer}`).firstElementChild.getAttribute("src")
    let playerToken = document.getElementsByClassName("player-token")[0];
    playerToken.setAttribute("src", image)
}

// Handle Click Event on top squares
const handleClick = () => {
    square = document.getElementsByClassName("player-token")[0].parentElement;    
    if (gameOver) return;
    let emptySquare = findNextEmptyRowInCol(square); //Get first empty square
    if (!emptySquare) return;

    placePieceInBoard(emptySquare)
    checkForWin();
    checkBoard();
    switchPlayer();
    changePlayerToken();
}

const switchPlayer = () => {
    // Dim player token
    let playertoken = document.getElementById(`player${currPlayer}`)
    playertoken.style.opacity = 0.2;
    currPlayer === 1 ? currPlayer = 2 : currPlayer = 1;
    playertoken = document.getElementById(`player${currPlayer}`)
    playertoken.style.opacity = 1.0;

}

// Return first empty row when top square clicked
const findNextEmptyRowInCol = (column) => {
    let columnNumberClicked = column.getAttribute("class");
    columnNumberClicked = columnNumberClicked[columnNumberClicked.indexOf("column-") + 7]; // 7 is length of the string column-
    
    // Using Column number clicked, find all rows in column. Return null if last row is only empty row
    const rows = Array.from(document.querySelectorAll(`.column-${columnNumberClicked}`)).reverse();
    let square =  rows.find((value) => { if (value.classList.contains("empty")) { return value } });
    return square.classList.contains(`row-${HEIGHT + 1}`) ? null : square
}

const placePieceInBoard = (square) => {
    let image = document.createElement("img");
    currPlayer === 1 ? image.setAttribute("src", "frasier.png") : image.setAttribute("src", "Niles.png");
    square.append(image);

    square.classList.toggle('empty');
    currPlayer === 1 ? square.classList.toggle("player1") : square.classList.toggle("player2");
    return
}

// Checking if board still has empty squares
const checkBoard = () => {
    const rows = Array.from(document.querySelectorAll(".row")).reverse();
    rows.pop();         // Ignore top row where game pieces are added
    
    // Check if gameboard has more empty squares
    rows.forEach(function (row) { row.querySelectorAll(".empty").length > 0 ? boardFull = false : boardFull = true; })
    if (boardFull) endGame("TIE");
}

const endGame = (winner) => {
    gameOver = true;
    winner === 1 ? winner = 'Frasier' : winner = 'Niles';

    if (winner === "TIE") {
        const timer = setTimeout(() => {
            window.alert("DRAW! Game Over!")
        }, 200);
    } else {
        const timer = setTimeout(() => {
            window.alert(`${winner} wins the game!`)
        }, 200);
    }
}

const checkForWin = () => {
    // Vertical and horizontal checks are separate from diagonal due to error handling order in TRY statments. 
    for (let y = 1; y <= HEIGHT + 1; y++) {
        
        const row = document.querySelectorAll(`.row-${y}`);
        const column = document.querySelectorAll(`.column-${y}`);
        
        for (let x = 0; x <= WIDTH; x++) {
            try {
                // Get horizontal and vertical squares
                let horizontal = [row[x].classList[3], row[x + 1].classList[3], row[x + 2].classList[3], row[x + 3].classList[3]];
                let vertical = [column[x].classList[3], column[x + 1].classList[3], column[x + 2].classList[3], column[x + 3].classList[3]];
                                
                //Check if every square in array contains same player
                horizontal = horizontal.every((square) => square === `player${currPlayer}`);
                vertical = vertical.every((square) => square === `player${currPlayer}`);
                
                if (horizontal || vertical) {endGame(currPlayer)}
            } catch {}

            try {
                // Get right diagonal squares
                let rightDiagonal = [document.getElementsByClassName(`row-${y} column-${x}`), document.getElementsByClassName(`row-${y + 1} column-${x + 1}`),
                                     document.getElementsByClassName(`row-${y + 2} column-${x + 2}`), document.getElementsByClassName(`row-${y + 3} column-${x + 3}`)];
                
                // Check if every square in array contains same player
                rightDiagonal = rightDiagonal.every((square) => square[0].classList[3] === `player${currPlayer}`);
               
                if (rightDiagonal){endGame(currPlayer)}
            } catch {}
                

            try {
                // Get left diagonal squares
                let leftDiagonal  = [document.getElementsByClassName(`row-${y} column-${x}`), document.getElementsByClassName(`row-${y + 1} column-${x - 1}`),
                                     document.getElementsByClassName(`row-${y + 2} column-${x - 2}`), document.getElementsByClassName(`row-${y + 3} column-${x - 3}`)]
                
                // Check if every square in array contains same player
                leftDiagonal = leftDiagonal.every((square) => square[0].classList[3] === `player${currPlayer}`);

                if (leftDiagonal){endGame(currPlayer)}
            } catch {}
        }
    }
}

switchPlayer();   // Switch Player ran twice to activate opacity change on token
switchPlayer();
makeBoard();
addEventsToTopRow();
