import {
	TOGGLE_SORT, JUMP, CLICK, API_CALL_REQUEST, LOGIN_USER, REGISTER_USER, SET_TAB, EXISTS_USER,
} from '../constants/constants';

export function toggleSort(isAscending) {
	return {
		type: TOGGLE_SORT,
		isAscending,
	};
}

export function jumpTo(move) {
	return {
		type: JUMP,
		move,
	};
}

export function handleClick(index, squares, stepNumber, xIsNext) {
	return {
		type: CLICK,
		index,
		squares,
		stepNumber,
		xIsNext,
	};
}

export function apiCallRequest(apiCall) {
	return {
		type: API_CALL_REQUEST,
		apiCall,
	};
}

export function loginUser(credentials) {
	return {
		type: LOGIN_USER,
		credentials,
	};
}

export function registerUser(credentials) {
	return {
		type: REGISTER_USER,
		credentials,
	};
}

export function existsUser(existUser) {
	return {
		type: EXISTS_USER,
		existUser,
	};
}

export function setTab(currentTab) {
	return {
		type: SET_TAB,
		currentTab,
	};
}
