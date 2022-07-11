// Class -> Connect Four
// What should construct each time?
// construct with width, height, board


class ConnectFour {
    constructor(HEIGHT = 6, WIDTH = 7) {
        this.height = HEIGHT;
        this.width = WIDTH;
        this.board = [];
        this.currPlayer = 1;
        this.gameOver = false;
    }

    makeBoard() {
        /** makeBoard: create in-JS board structure:
        *   board = array of rows, each row is array of cells  (board[y][x])
        */
        for (let y = 0; y < this.height; y++) {
            this.board.push(Array.from({ length: this.width }));
        }
    }

    makeHtmlBoard() {
        /** makeHtmlBoard: make HTML table and row of column tops. */
        const board = document.getElementById('board');

        // make column tops (clickable area for adding a piece to that column)
        const top = document.createElement('tr');
        top.setAttribute('id', 'column-top');
        top.addEventListener('click', this.handleClick.bind(this));

        for (let x = 0; x < this.width; x++) {
            const headCell = document.createElement('td');
            headCell.setAttribute('id', x);
            top.append(headCell);
        }

        board.append(top);

        // make main part of board
        for (let y = 0; y < this.height; y++) {
            const row = document.createElement('tr');

            for (let x = 0; x < this.width; x++) {
                const cell = document.createElement('td');
                cell.setAttribute('id', `${y}-${x}`);
                row.append(cell);
            }

            board.append(row);
        }
    }

    findSpotForCol(x) {
        /** findSpotForCol: given column x, return top empty y (null if filled) */
        for (let y = this.height - 1; y >= 0; y--) {
            if (!this.board[y][x]) {
            return y;
            }
        }
        return null;
    }

    placeInTable(y, x) {
      /** placeInTable: update DOM to place piece into HTML table of board */
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.classList.add(`p${this.currPlayer}`);
    piece.style.top = -50 * (y + 2);

    const spot = document.getElementById(`${y}-${x}`);
    spot.append(piece);
    }

    endGame(msg) {
        // endGame: announce game end
        this.gameOver = true;
        window.alert(msg);
    }

  handleClick(evt) {
    if (this.gameOver) return;
    /** handleClick: handle click of column top to play piece */
        // get x from ID of clicked cell
        const x = +evt.target.id;
        
        // get next spot in column (if none, ignore click)
        const y = this.findSpotForCol(x);
        if (y === null) {
            return;
        }

        // place piece in board and add to HTML table
        this.board[y][x] = this.currPlayer;
        this.placeInTable(y, x);
        
        // check for win
        if (this.checkForWin()) {
            return this.endGame(`Player ${this.currPlayer} won!`);
        }
        
        // check for tie
        if (this.board.every(row => row.every(cell => cell))) {
            return this.endGame('Tie!');
        }
            
        // switch players
        this.currPlayer = this.currPlayer === 1 ? 2 : 1;
        }

    checkForWin() {
    /** checkForWin: check board cell-by-cell for "does a win start here?" */
  for (let y = 0; y < this.height; y++) {
    for (let x = 0; x < this.width; x++) {
      // get "check list" of 4 cells (starting here) for each of the different
      // ways to win
      const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      // find winner (only checking each win-possibility as needed)
      if (this._win(horiz) || this._win(vert) || this._win(diagDR) || this._win(diagDL)) {
        return true;
      }
    }
  }
    }
    _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < this.height &&
        x >= 0 &&
        x < this.width &&
        this.board[y][x] === this.currPlayer
    );
  }


}

let game = new ConnectFour();
game.makeBoard();
game.makeHtmlBoard();