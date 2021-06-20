import { all } from 'redux-saga/effects';
import Authentication from './AuthSaga'

export default function *rootSaga() {
    yield all([
        Authentication()
    ])
}