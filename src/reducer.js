import {fromJS, setIn, set} from 'immutable'
import {TOGGLE_SORT, JUMP, CLICK} from './constants.js'
import {calculateWinner} from './game.js'

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

      /*etsi ginetai setIn genika, alla edw thelw update sto yparxon state kai na mhn grafw panw sto previous
      return state.setIn(['history', 'squares'],action.squares).setIn(['history', 'moveLocation'],action.index)
          .set('stepNumber',action.stepNumber)
          .set('xIsNext', !state.xIsNext)
      */

      //second way for concat on state and not erase the previous, but doing update
      //return state.setIn(['history'], state.get('history').concat({squares: action.squares, index: action.index}))

      return state.update('history', history => history.concat({squares: action.squares, index: action.index}))
          .set('stepNumber', action.stepNumber)
          .set('xIsNext', !action.xIsNext)
    default:
        return state;
  }
}
