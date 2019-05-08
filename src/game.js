import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import Board from './board.js';
import {toggleSort, jumpTo, handleClick} from './actions.js'

function Game(props) {

    const history = props.history;
    const current = history[props.stepNumber];
    const winnerInfo = calculateWinner(current.squares); // pernaw to object poy epistrefei h calculateWInner se mia metabliti gia na mhn thn kalw synexeia

    let moves = history.map((step, move) => {  //allaksa to moves apo const se let giati pleon den menei stathero
      const moveLocation = step.moveLocation;
      const row = 1 + Math.floor(moveLocation / 3);
      const col = 1 + moveLocation % 3;

      const desc = move ?
        `Go to move #${move} (${row}, ${col})`:
        'Go to game start';

      return (
        <li key ={move}>
          <button
          className = {move === props.stepNumber ? 'selected-move' : ''}
          onClick = { () => props.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    })

    let status;
    if(winnerInfo.winner) { //if not null
      status = 'Winner: ' + winnerInfo.winner;
    }else if (winnerInfo.isDraw) {
      status = "Draw";
    }else {
      status = 'Next player: ' + (props.xIsNext ? 'X' :'O');
    }

    const isAscending = props.isAscending;
    if (!isAscending) {
      moves.reverse(); //antistrefw thn seira otan einai desceding
    }
    //console.log(this.props);
    return (
      <div className="game">
        <div className="game-board">
          <Board
            square = {current.squares}
            onClick = {index => props.handleClick(index)}
            winnerLine = {winnerInfo.winnerLine}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <p><strong>Sort: </strong>{isAscending ? "Ascending" : "Descending"}</p>
          <button onClick={() => props.handleToggleSort()}>
            Toggle Sort
          </button>
          <ol>{moves}</ol>
        </div>
      </div>
    );

}


export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner:squares[a],
        winnerLine:lines[i], //take the line of the winner
        isDraw:false,
      };
    }
  }

  let isDraw = true;
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      isDraw = false;
      break;
    }
  }
  return {
    winner: null,
    line: null,
    isDraw: isDraw
  };
}

const mapStateToProps = state=> {
  //console.log(state)
  return {
    isAscending: state.isAscending,
    xIsNext: state.xIsNext,
    stepNumber: state.stepNumber,
    history: state.history,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleToggleSort: () => { dispatch(toggleSort())},
    jumpTo: (move) => { dispatch(jumpTo(move))},
    handleClick: (index) => {dispatch(handleClick(index))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);
//export default Game;
