import {TOGGLE_SORT, JUMP, CLICK, API_CALL_REQUEST, GET_USERNAME, GET_PASSWORD, GET_EMAIL, GET_USER, CHANGE_TAB} from '../constants/constants.js'

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

export function getUsername(username) {
  return{
    type: GET_USERNAME,
    username: username,
  }
}

export function getPassword(password) {
  return{
    type: GET_PASSWORD,
    password: password,
  }
}

export function getEmail(email) {
  return{
    type: GET_EMAIL,
    email: email,
  }
}

export function getUser (existsUser) {
  return{
    type: GET_USER,
    existsUser: existsUser,
  }
}

export function changeTab (flag) {
  return{
    type: CHANGE_TAB,
    flag: flag,
  }
}

