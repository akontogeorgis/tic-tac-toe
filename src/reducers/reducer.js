import {fromJS, setIn, set} from 'immutable'
import {TOGGLE_SORT, JUMP, CLICK, API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAIL, GET_USER_SUCCESS, GET_USER_FAIL, GET_PASSWORD, GET_USERNAME, GET_EMAIL, CHANGE_TAB} from '../constants/constants.js'

const initialState = fromJS( {
  isAscending: true,
  xIsNext: true,
  stepNumber: 0,
  history: [{
    squares: Array(9).fill(null)
  }],
  isApiCallSuccessful: false,
  apiCall: false,
  existsUser: false,
  username: '',
  password:'',
  email: '',
  flag: true,
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

    case API_CALL_SUCCESS:
      return state.set('isApiCallSuccessful', true)

    case API_CALL_FAIL:
      return state.set('isApiCallSuccessful', false)

    case GET_USER_SUCCESS:
      return state.set('exitsUser', true)

    case GET_USER_FAIL:
      return state.set('exitsUser', false)

    case GET_USERNAME:
      return state.set ('username', action.username)

    case GET_PASSWORD:
      return state.set ('password', action.password)

    case GET_EMAIL:
      return state.set ('email', action.email)

    case CHANGE_TAB:
      return state.set ('flag', !action.flag)


    default:
        return state;
  }
}
