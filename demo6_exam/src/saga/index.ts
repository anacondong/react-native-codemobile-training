import * as actionTypes from './../constants/Constants';
import {takeEvery, all} from 'redux-saga/effects';
import {fetchJSONSaga} from './jsonfeed.saga';
import {addActivitySaga,clearActivitySaga} from './activity.saga';
import { setAuthLogin } from '../actions/auth.action';
import { setAuthLoginSaga, setAuthLogoutSaga } from './auth.saga';

export function* watchAll() {
    yield all([takeEvery(actionTypes.JSON_REQUEST, fetchJSONSaga)]);

    yield all([takeEvery(actionTypes.ACTIVITY_ADD_REQUEST, addActivitySaga)]);
    yield all([takeEvery(actionTypes.ACTIVITY_CLEAR_REQUEST, clearActivitySaga)]);

    yield all([takeEvery(actionTypes.AUTH_LOGIN_REQUEST, setAuthLoginSaga)]);
    yield all([takeEvery(actionTypes.AUTH_LOGOUT_REQUEST, setAuthLogoutSaga)]);
}

