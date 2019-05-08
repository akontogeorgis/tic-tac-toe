import React from 'react';
import Immutable from 'immutable'
import { connect } from 'react-redux';
import './index.css';
import Board from './board.js';
import {toggleSort, jumpTo, handleClick} from './actions.js'
import {calculateWinner} from './calculateWinner.js'

function Game(props) {

    function handleClicked(index){
        const history = props.history.toJS();
        const current = history[history.length -1];
        const squares = current.squares;

        if (calculateWinner(squares).winner || squares[index]){
          return;
        }
        squares[index] = props.xIsNext ? 'X' : 'O';

        props.handleClick(index,squares,props.stepNumber+1,props.xIsNext)
    }



    const history = props.history.toJS();
    const current = history[props.stepNumber];
    const squares = current.squares;
    const winnerInfo = calculateWinner(squares);

    let moves = history.map((step, move) => {
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
    if(winnerInfo.winner) {
      status = 'Winner: ' + winnerInfo.winner;
    }else if (winnerInfo.isDraw) {
      status = "Draw";
    }else {
      status = 'Next player: ' + (props.xIsNext ? 'X' :'O');
    }

    const isAscending = props.isAscending;
    if (!isAscending) {
      moves.reverse();
    }

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

const mapStateToProps = state=> {
  return {
    isAscending: state.get('isAscending'),
    xIsNext: state.get('xIsNext'),
    stepNumber: state.get('stepNumber'),
    history: state.get('history'),
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
