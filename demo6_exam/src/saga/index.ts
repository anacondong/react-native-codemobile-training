import * as actionTypes from './../constants/Constants';
import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import { fetchJSONSaga } from './jsonfeed.saga';
import { addActivitySaga, clearActivitySaga } from './activity.saga';
import { authLoginWorker, authLogoutWorker } from './auth.saga';
import { registerRequestWorker } from './register.saga';

export function* watchAll() {
    yield all([takeEvery(actionTypes.JSON_REQUEST, fetchJSONSaga)]);

    yield all([takeEvery(actionTypes.ACTIVITY_ADD_REQUEST, addActivitySaga)]);
    yield all([takeEvery(actionTypes.ACTIVITY_CLEAR_REQUEST, clearActivitySaga)]);

    yield all([takeEvery(actionTypes.AUTH_LOGIN_REQUEST, authLoginWorker)]);

    yield all([takeEvery(actionTypes.REGISTER_REQUEST, registerRequestWorker)]);
}

