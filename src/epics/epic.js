
import { combineEpics, ofType } from 'redux-observable';
import {
	mergeMap, map, pluck, catchError,
	// tap
} from 'rxjs/operators';
import { from } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const apiCallEpic = action => action.pipe(
	ofType('API_CALL_REQUEST'),
	mergeMap(() => ajax.get('a').pipe(
		// tap(console.log),
		pluck('response', 'message'),
		map(response => ({ type: 'API_CALL_SUCCESS', response })),

		catchError(response => from([{ type: 'API_CALL_FAIL', response }])),
	)),
);

const loginUserEpic = action => action.pipe(

	ofType('LOGIN_USER'),
	mergeMap(({ credentials }) => ajax.post('login', credentials, { 'Content-Type': 'application/json' })
		.pipe(
			// tap(console.log),
			map(response => ({ type: 'LOGIN_USER_SUCCESS', response })),

			catchError(response => from([{ type: 'LOGIN_USER_FAIL', response }])),
		)),
);

const registerUserEpic = action => action.pipe(
	ofType('REGISTER_USER'),
	mergeMap(({ credentials }) => ajax.post('register', credentials, { 'Content-Type': 'application/json' })
		.pipe(
			// tap(console.log),
			pluck('response', 'existsUser'),
			map(response => ({ type: 'EXISTS_USER', existsUser: response })),

			catchError(response => from([{ type: 'REGISTER_USER_FAIL', response }])),

		)),
);

export default combineEpics(
	apiCallEpic,
	loginUserEpic,
	registerUserEpic,
);
