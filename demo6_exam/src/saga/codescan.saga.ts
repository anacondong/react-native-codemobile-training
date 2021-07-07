import * as actions from '../actions/codescan.action';
import { put } from 'redux-saga/effects';

export function* addCodeScanSaga(payload: any) {
    yield put(actions.setCodeScanToAdd(payload));
}

export function* clearCodeScanSaga() {
    yield put(actions.setCodeScanToClear());
}
