import React from 'react';
//import Immutable from 'immutable'
import { connect } from 'react-redux';
import Board from '../board/board.js';
import {toggleSort, jumpTo, handleClick} from '../../actions/actions.js'
import {calculateWinner} from '../../utils/calculateWinner.js'
import {apiCallRequest} from "../../actions/actions";



class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.apiCall();
    }


    handleClicked(index) {
        const history = this.props.history.toJS();
        const current = history[history.length - 1];
        const squares = current.squares;

        if (calculateWinner(squares).winner || squares[index]) {
            return;
        }
        squares[index] = this.props.xIsNext ? 'X' : 'O';

        this.props.handleClick(index, squares, this.props.stepNumber + 1, this.props.xIsNext)
    }

    render() {

        const history = this.props.history.toJS();
        const current = history[this.props.stepNumber];
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
                        className={move === this.props.stepNumber ? 'selected-move' : ''}
                        onClick={() => this.props.jumpTo(move)}>
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
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        }

        const isAscending = this.props.isAscending;
        if (!isAscending) {
            moves.reverse();
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        square={current.squares}
                        onClick={index => this.handleClicked(index)}
                        winnerLine={winnerInfo.winnerLine}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <p><strong>Sort: </strong>{isAscending ? "Ascending" : "Descending"}</p>
                    <button onClick={() => {this.props.handleToggleSort(isAscending);}}>
                        Toggle Sort
                    </button>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state=> {
  return {
    isAscending: state.get('isAscending'),
    xIsNext: state.get('xIsNext'),
    stepNumber: state.get('stepNumber'),
    history: state.get('history'),
    apiCall: state.get('apiCall')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleToggleSort: (isAscending) => { dispatch(toggleSort(isAscending))},
    jumpTo: (move) => { dispatch(jumpTo(move))},
    handleClick: (...props) => {dispatch(handleClick(...props))},
    apiCall: (apiCall) => {dispatch(apiCallRequest(apiCall))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);
