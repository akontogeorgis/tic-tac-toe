import {TOGGLE_SORT, JUMP, CLICK, API_CALL_REQUEST} from '../constants/constants.js'

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


