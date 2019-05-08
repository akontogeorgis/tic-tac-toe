import {TOGGLE_SORT, JUMP, CLICK} from './constants.js'

export function toggleSort(){
  return {
    type: TOGGLE_SORT,
  }
}

export function jumpTo(move){
  return {
    type: JUMP,
    move: move,
  }
}

export function handleClick(index){
  return {
    type: CLICK,
    index: index,
  }
}
