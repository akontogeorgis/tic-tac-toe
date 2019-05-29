import {TOGGLE_SORT, JUMP, CLICK, API_CALL_REQUEST, LOGIN_USER, REGISTER_USER, SET_TAB} from '../constants/constants.js'

export function toggleSort(isAscending){
  return {
    type: TOGGLE_SORT,
    isAscending:isAscending,
  }
}

export function jumpTo(move){
  return {
    type: JUMP,
    move: move,
  }
}

export function handleClick(index,squares,stepNumber,xIsNext){
  return {
    type: CLICK,
    index: index,
    squares: squares,
    stepNumber: stepNumber,
    xIsNext: xIsNext,
  }
}

export function apiCallRequest(apiCall){
  return{
    type: API_CALL_REQUEST,
    apiCall:apiCall,
  }
}

export function loginUser (credentials) {
  return{
    type: LOGIN_USER,
    credentials: credentials,
  }
}

export function registerUser (credentials) {
  return{
    type: REGISTER_USER,
    credentials: credentials,
  }
}

export function setTab (currentTab) {
  return{
    type: SET_TAB,
    currentTab: currentTab,
  }
}


