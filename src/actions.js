import {TOGGLE_SORT, JUMP, CLICK} from './constants.js'

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
