import {fromJS,} from 'immutable'
import {TOGGLE_SORT, JUMP, CLICK, API_CALL_SUCCESS, API_CALL_FAIL, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL, EXISTS_USER, SET_TAB} from '../constants/constants.js'

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
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  password:'',
  email: '',
  currentTab: 'Login',
  isLoginSuccessful: false,
  isRegisterSuccessful: false
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

    case LOGIN_USER_SUCCESS:
      return state.set('isLoginSuccessful', true)

    case LOGIN_USER_FAIL:
      return state.set('isLoginSuccessful', false)

    case REGISTER_USER_SUCCESS:
      return state.set('isRegisterSuccessful', true)

    case REGISTER_USER_FAIL:
      return state.set('isRegisterSuccessful', false)

    case EXISTS_USER:
      return state.set('existsUser', action.existsUser)


    case SET_TAB:
      return state.set ('currentTab', action.currentTab)

    default:
        return state;
  }
}
