import * as actions from '../actions/auth.action';
import {put, call, delay} from 'redux-saga/effects';

export function* setAuthLoginSaga(payload:any) {
    yield put(actions.setAuthLogin(payload));
}

export function* setAuthLogoutSaga() {
  yield put(actions.setAuthLogout());
}
