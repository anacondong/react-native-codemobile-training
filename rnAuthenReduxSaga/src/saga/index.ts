import * as actionTypes from './../Constants';
import {takeEvery, all} from 'redux-saga/effects';
import {fetchJSONSaga} from './jsonfeed.saga';
import {addActivitySaga,clearActivitySaga} from './activity.saga';

export function* watchAll() {
    yield all([takeEvery(actionTypes.JSON_REQUEST, fetchJSONSaga)]);

    yield all([takeEvery(actionTypes.ACTIVITY_ADD_REQUEST, addActivitySaga)]);
    yield all([takeEvery(actionTypes.ACTIVITY_CLEAR_REQUEST, clearActivitySaga)]);
}

