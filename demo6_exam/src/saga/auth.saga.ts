import * as actions from '../actions/auth.action';
import { put, call } from 'redux-saga/effects';

export function* authLoginWorker({ type, payload }) {
  try {
    const response = yield call(actions.doAuthServer, payload);
    console.log('authLoginWorker response', response);
    if (response.data.user) {
      yield put(actions.setAuthSuccess(response.data.user));
    } else {
      yield put(actions.setAuthFailed());
    }
  } catch (error) {
    yield put(actions.setAuthFailed());
  }
}

export function* authLogoutWorker() {
  yield put(actions.setAuthLogout());
}
