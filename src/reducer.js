import {TOGGLE_SORT, JUMP} from './constants.js'
import actions from './actions.js'

const initialState = {
  isAscending: true,
  xIsNext: true,
  stepNumber: 0,
  history: [{
    squares: Array(9).fill(null)
  }],
}

export default (state = initialState, action) => {
  console.log(state)
  switch (action.type){

    case TOGGLE_SORT:
      return Object.assign({}, state, {
        isAscending: !state.isAscending
      })

    case JUMP:
      return Object.assign({}, state, {
        stepNumber: action.move,
        xIsNext: (action.move%2) === 0
      })

    case CLICK:
      return Object.assign({}, state, {
        const history = state.history.slice(0, state.stepNumber + 1); // if we go back in previous move, we slice all the next moves of the "future"
        const current = history[history.length -1];
        const squares = current.squares.slice(); //gia copy, kai oxi panw sto idio to squares array

        if (calculateWinner(squares).winner || squares[i]){
          return;
        }
        squares[i] = state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
            squares:squares,
            moveLocation: i
          }]),
          stepNumber: history.length,
          xIsNext: !state.xIsNext
        });
      })

    default:
        return state;
  }
}
