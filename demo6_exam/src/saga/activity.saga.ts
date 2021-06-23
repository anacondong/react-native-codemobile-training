import * as actions from '../actions/activity.action';
import {put, call, delay} from 'redux-saga/effects';
import {YoutubeResult} from '../types/youtube.interface';

export function* addActivitySaga(payload:any) {
    yield put(actions.setActivityToAdd(payload));
}

export function* clearActivitySaga() {
  yield put(actions.setActivityToClear());
}
