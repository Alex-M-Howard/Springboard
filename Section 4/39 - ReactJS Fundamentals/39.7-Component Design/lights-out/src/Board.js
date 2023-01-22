import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       0  0  0
 *       1  1  0     (where 0 is off, and 1 is on)
 *       0  0  0
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows=3, ncols=3, chanceLightStartsOn=.5 }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
      for(let i=0; i < nrows; i++){
        let row = []
        for(let j=0; j < ncols; j++){
          let roll = Math.random();
          roll < chanceLightStartsOn ? row.push(1) : row.push(0);
        }
        initialBoard.push(row);
      }
    return initialBoard;
  }

  function hasWon(currBoard) {
    console.log(currBoard);
    let lit = 0;
      board.forEach(row=>{
        row.forEach(cell=>{
          if(cell) lit++;
        })
      })
    if(!lit) return true
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const boardCopy = Array.from(oldBoard);
      const x = coord.target.cellIndex;
      const y = coord.target.parentElement.rowIndex;

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };


      flipCell(y, x, boardCopy);    //Flip original, then 1 up, down, 1 over each direction
      flipCell(y-1, x, boardCopy)
      flipCell(y+1, x, boardCopy)
      flipCell(y, x-1, boardCopy)
      flipCell(y, x+1, boardCopy)

      return boardCopy;
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  if (hasWon(board)) {
    return(
      <div className="Board-winner">
        <h1 className="Board-winner-message">You win!</h1>
      </div>
    )
  }
  

  // make table board
  return (
    <div className="Board">
    <table className="Board-table">
      <tbody className="Board-table-body">
        {board.map((row, rowIdx) => {    
          return (
            <tr className="Board-table-body-tr" key={rowIdx}>
              {
                row.map((cell, colIdx) => {
                  return (
                    <Cell
                      flipCellsAroundMe={flipCellsAround}
                      isLit={cell}
                      key={[colIdx]}
                    />
                  )
                })
              }
            </tr>
            )
          })
        }
      </tbody>
    </table>
    </div>
  );
}

export default Board;
