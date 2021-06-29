import * as actions from '../actions/activity.action';
import { put } from 'redux-saga/effects';

export function* addActivitySaga(payload: any) {
  yield put(actions.setActivityToAdd(payload));
}

export function* clearActivitySaga() {
  yield put(actions.setActivityToClear());
}
