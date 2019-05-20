import {call, put, takeEvery,all} from 'redux-saga/effects';
import axios from "axios";


function* workerSaga() {
    try {
        const response = yield call(() =>axios.get('/a'));

        console.log(response);
        const message = response.data.message;
        yield put({ type: 'API_CALL_SUCCESS', message });
    } catch (error) {
        yield put({ type: 'API_CALL_FAILURE', error });
    }
}

export function* watcherSaga() {
    yield takeEvery('API_CALL_REQUEST', workerSaga)
}

export default function* rootSaga() {
    yield all([
        watcherSaga()
    ])
}