import {fromJS, setIn, set} from 'immutable'
import {TOGGLE_SORT, JUMP, CLICK} from './constants.js'
import {calculateWinner} from './calculateWinner.js'

const initialState = fromJS( {
  isAscending: true,
  xIsNext: true,
  stepNumber: 0,
  history: [{
    squares: Array(9).fill(null)
  }],
})

export default (state = initialState, action) => {
  switch (action.type){

    case TOGGLE_SORT:
      return state.set('isAscending', !action.isAscending)

    case JUMP:
      return state.set('stepNumber', action.move).set('xIsNext', (action.move%2) === 0)

    case CLICK:

      return state.update('history', history => history.concat({squares: action.squares, index: action.index}))
          .set('stepNumber', action.stepNumber)
          .set('xIsNext', !action.xIsNext)
    default:
        return state;
  }
}
