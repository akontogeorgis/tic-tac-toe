import React from 'react';
import Immutable from 'immutable'
import { connect } from 'react-redux';
import './index.css';
import Board from './board.js';
import {toggleSort, jumpTo, handleClick} from './actions.js'

function Game(props) {
    //console.log(props)

    function handleClicked(index){
        const history = props.history.toJS(); // if we go back in previous move, we slice all the next moves of the "future"
        const current = history[history.length -1];
        const squares = current.squares; //gia copy, kai oxi panw sto idio to squares array

        if (calculateWinner(squares).winner || squares[index]){
          return;
        }
        squares[index] = props.xIsNext ? 'X' : 'O';

        props.handleClick(index,squares,props.stepNumber+1,props.xIsNext)
    }



    const history = props.history.toJS();
    const current = history[props.stepNumber];
    const squares = current.squares;
    const winnerInfo = calculateWinner(squares); // pernaw to object poy epistrefei h calculateWInner se mia metabliti gia na mhn thn kalw synexeia

    let moves = history.map((step, move) => {  //allaksa to moves apo const se let giati pleon den menei stathero
      const index = step.index;
      const row = 1 + Math.floor(index / 3);
      const col = 1 + index % 3;

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
            onClick = {index => handleClicked(index)}
            winnerLine = {winnerInfo.winnerLine}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <p><strong>Sort: </strong>{isAscending ? "Ascending" : "Descending"}</p>
          <button onClick={() => props.handleToggleSort(isAscending)}>
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
    isAscending: state.get('isAscending'),
    xIsNext: state.get('xIsNext'),
    stepNumber: state.get('stepNumber'),
    history: state.get('history'),
    //squares: state.getIn(['history', 'squares'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleToggleSort: (isAscending) => { dispatch(toggleSort(isAscending))},
    jumpTo: (move) => { dispatch(jumpTo(move))},
    handleClick: (...props) => {dispatch(handleClick(...props))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);
//export default Game;
