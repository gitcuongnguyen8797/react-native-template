import { all, call, fork, put, takeEvery} from 'redux-saga/effects';
import { LOG_IN, LOGIN_SOCIAL, LOGIN_FORM } from '../constants/ActionTypes';

function* handleUserLogin(action) {
    console.log('payload',action)
}

export function* watchUserLogin() {
    yield takeEvery(LOG_IN, handleUserLogin)
}

export default function *rootSaga() {
    yield all([
        watchUserLogin()
    ])
}