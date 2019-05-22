import React, {useState,useEffect} from 'react';
//import Immutable from 'immutable'
import { connect } from 'react-redux';
import Board from '../board/board.js';
import {toggleSort, jumpTo, handleClick, apiCallRequest} from '../../actions/actions.js'
import {calculateWinner} from '../../utils/calculateWinner.js'


function Game (props) {

    useEffect(() => {
        props.apiCall();
    },[]);


    function handleClicked(index) {
        const history = props.history.toJS();
        const current = history[history.length - 1];
        const squares = current.squares;

        if (calculateWinner(squares).winner || squares[index]) {
            return;
        }
        squares[index] = props.xIsNext ? 'X' : 'O';

        props.handleClick(index, squares, props.stepNumber + 1, props.xIsNext)
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
                `Go to move #${move} (${row}, ${col})` :
                'Go to game start';

            return (
                <li key={move}>
                    <button
                        className={move === props.stepNumber ? 'selected-move' : ''}
                        onClick={() => props.jumpTo(move)}>
                        {desc}
                    </button>
                </li>
            );
        })

        let status;
        if (winnerInfo.winner) {
            status = 'Winner: ' + winnerInfo.winner;
        } else if (winnerInfo.isDraw) {
            status = "Draw";
        } else {
            status = 'Next player: ' + (props.xIsNext ? 'X' : 'O');
        }

        const isAscending = props.isAscending;
        if (!isAscending) {
            moves.reverse();
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        square={current.squares}
                        onClick={index => handleClicked(index)}
                        winnerLine={winnerInfo.winnerLine}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <p><strong>Sort: </strong>{isAscending ? "Ascending" : "Descending"}</p>
                    <button onClick={() => {props.handleToggleSort(isAscending);}}>
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
    apiCall: state.get('apiCall'),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleToggleSort: (isAscending) => { dispatch(toggleSort(isAscending))},
    jumpTo: (move) => { dispatch(jumpTo(move))},
    handleClick: (...props) => {dispatch(handleClick(...props))},
    apiCall: (apiCall) => {dispatch(apiCallRequest(apiCall))},

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);
