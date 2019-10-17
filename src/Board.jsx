import React, { useState, useEffect, Component } from 'react';
import Row from './Row.jsx';
// Pseudo for converting class component to a functional component
// Define functional component
function Board(props) {
  // Use 'useState' hook for each piece of state we're looking to replicate
  const [board, setBoard] = useState({
    0: ['-', '-', '-'],
    1: ['-', '-', '-'],
    2: ['-', '-', '-']
  });
  const [isPlayerX, setPlayerX] = useState(true);
  const [totalMoves, setTotalMoves] = useState(1);
  // Declare a function expression inside of functional component to be invoked when events relative to the component occur
  const moveMaker = (boxID, rowID) => {
    const copyOfBoard = JSON.parse(JSON.stringify(board));
    const currentSquare = board[rowID][boxID];
    if (currentSquare === '-' && isPlayerX) {
      copyOfBoard[rowID][boxID] = 'X';
      setBoard(copyOfBoard);
      setPlayerX(false);
      setTotalMoves(totalMoves + 1);
    } else if (currentSquare === '-' && !isPlayerX) {
      copyOfBoard[rowID][boxID] = 'O';
      setBoard(copyOfBoard);
      setPlayerX(true);
      setTotalMoves(totalMoves + 1);
    }
    if (totalMoves === 9) alert('You both suck!');
    console.log(totalMoves);
  };
  // Use the useEffect hook to emulate componentDidMount functionality of class components
  useEffect(() => {
    const row1left = board[0][0];
    const row1center = board[0][1];
    const row1right = board[0][2];
    const row2left = board[1][0];
    const row2center = board[1][1];
    const row2right = board[1][2];
    const row3left = board[2][0];
    const row3center = board[2][1];
    const row3right = board[2][2];
    //win for X across rows
    if (row1left === 'X' && row1center === 'X' && row1right === 'X') alert('Player X Wins!!!');
    if (row2left === 'X' && row2center === 'X' && row2right === 'X') alert('Player X Wins!!!');
    if (row3left === 'X' && row3center === 'X' && row3right === 'X') alert('Player X Wins!!!');
    //win for X across columns
    if (row1left === 'X' && row2left === 'X' && row3left === 'X') alert('Player X Wins!!!');
    if (row1center === 'X' && row2center === 'X' && row3center === 'X') alert('Player X Wins!!!');
    if (row1right === 'X' && row2right === 'X' && row3right === 'X') alert('Player X Wins!!!');
    //win for X diagonally
    if (row1left === 'X' && row2center === 'X' && row3right === 'X') alert('Player X Wins!!!');
    if (row1right === 'X' && row2center === 'X' && row3left === 'X') alert('Player X Wins!!!');
    //win for O across rows
    if (row1left === 'O' && row1center === 'O' && row1right === 'O') alert('Player O Wins!!!');
    if (row2left === 'O' && row2center === 'O' && row2right === 'O') alert('Player O Wins!!!');
    if (row3left === 'O' && row3center === 'O' && row3right === 'O') alert('Player O Wins!!!');
    //win for O across columns
    if (row1right === 'O' && row2right === 'O' && row3right === 'O') alert('Player O Wins!!!');
    if (row1center === 'O' && row2center === 'O' && row3center === 'O') alert('Player O Wins!!!');
    if (row1left === 'O' && row2left === 'O' && row3left === 'O') alert('Player O Wins!!!');
    //win for O diagonally
    if (row1left === 'O' && row2center === 'O' && row3right === 'O') alert('Player O Wins!!!');
    if (row1right === 'O' && row2center === 'O' && row3left === 'O') alert('Player O Wins!!!');
  });
  // Use the 'return' method of the functional component to present all necessary elements/components with the according functionality
    return (
      <div className="boxContainer">
        <Row
          key="row1"
          id="0"
          rowID="0"
          state={board[0]}
          stateChanger={moveMaker} />
        <Row
          key="row2"
          id="1"
          rowID="1"
          state={board[1]}
          stateChanger={moveMaker} />
        <Row
          key="row3"
          id="2"
          rowID="2"
          state={board[2]}
          stateChanger={moveMaker} />
      </div>
    )
}

// class Board extends Component {
//   constructor(props) {
//     super();
//     board = {
//       0: ['-', '-', '-'],
//       1: ['-', '-', '-'],
//       2: ['-', '-', '-'],
//       isPlayerX: true,
//       totalMoves: 0,
//     };
//     this.stateChanger = this.stateChanger.bind(this);
//     this.test = 'poo';
//     console.log(`Here is props: ${this.props}`);
//   }

//   componentDidUpdate() {
//     const row1left = this.state[0][0];
//     const row1center = this.state[0][1];
//     const row1right = this.state[0][2];
//     const row2left = this.state[1][0];
//     const row2center = this.state[1][1];
//     const row2right = this.state[1][2];
//     const row3left = this.state[2][0];
//     const row3center = this.state[2][1];
//     const row3right = this.state[2][2];
//     //win for X across rows
//     if (row1left === 'X' && row1center === 'X' && row1right === 'X') alert('Player X Wins!!!');
//     if (row2left === 'X' && row2center === 'X' && row2right === 'X') alert('Player X Wins!!!');
//     if (row3left === 'X' && row3center === 'X' && row3right === 'X') alert('Player X Wins!!!');
//     //win for X across columns
//     if (row1left === 'X' && row2left === 'X' && row3left === 'X') alert('Player X Wins!!!');
//     if (row1center === 'X' && row2center === 'X' && row3center === 'X') alert('Player X Wins!!!');
//     if (row1right === 'X' && row2right === 'X' && row3right === 'X') alert('Player X Wins!!!');
//     //win for X diagonally
//     if (row1left === 'X' && row2center === 'X' && row3right === 'X') alert('Player X Wins!!!');
//     if (row1right === 'X' && row2center === 'X' && row3left === 'X') alert('Player X Wins!!!');
//     //win for O across rows
//     if (row1left === 'O' && row1center === 'O' && row1right === 'O') alert('Player O Wins!!!');
//     if (row2left === 'O' && row2center === 'O' && row2right === 'O') alert('Player O Wins!!!');
//     if (row3left === 'O' && row3center === 'O' && row3right === 'O') alert('Player O Wins!!!');
//     //win for O across columns
//     if (row1right === 'O' && row2right === 'O' && row3right === 'O') alert('Player O Wins!!!');
//     if (row1center === 'O' && row2center === 'O' && row3center === 'O') alert('Player O Wins!!!');
//     if (row1left === 'O' && row2left === 'O' && row3left === 'O') alert('Player O Wins!!!');
//     //win for O diagonally
//     if (row1left === 'O' && row2center === 'O' && row3right === 'O') alert('Player O Wins!!!');
//     if (row1right === 'O' && row2center === 'O' && row3left === 'O') alert('Player O Wins!!!');
//   }

//   stateChanger(boxID, rowID) {
//     const state = this.state[rowID].slice();
//     if (state[boxID] === '-' && this.state.isPlayerX) {
//       state[boxID] = 'X';
//       this.setState({ isPlayerX: !this.state.isPlayerX, [rowID]: state, totalMoves: this.state.totalMoves += 1 });
//     }
//     else if (state[boxID] === '-' && !this.state.isPlayerX) {
//       state[boxID] = 'O';
//       this.setState({ isPlayerX: !this.state.isPlayerX, [rowID]: state, totalMoves: this.state.totalMoves += 1 });
//     }
//     if (this.state.totalMoves === 9) alert('You both suck!');
//   }

//   render() {
//     return (
//       <div className="boxContainer">
//         <Row
//           key="row1"
//           id="0"
//           rowID="0"
//           state={this.state[0]}
//           stateChanger={this.stateChanger} />
//         <Row
//           key="row2"
//           id="1"
//           rowID="1"
//           state={this.state[1]}
//           stateChanger={this.stateChanger} />
//         <Row
//           key="row3"
//           id="2"
//           rowID="2"
//           state={this.state[2]}
//           stateChanger={this.stateChanger} />
//       </div>
//     )
//   }
// }

export default Board;
























