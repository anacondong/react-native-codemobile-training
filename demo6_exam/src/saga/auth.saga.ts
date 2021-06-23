import * as actions from '../actions/auth.action';
import { put, call, delay } from 'redux-saga/effects';

export function* setAuthLoginSaga({ type, payload }) {

  try {
    const response = yield call(actions.doAuthServer, payload);
    console.log('response', response);
    if (response.data.user !== null) {
      yield put(actions.setAuthSuccess(response.data.user));
    } else {
      yield put(actions.setAuthFailed());
    }
  } catch (error) {
    yield put(actions.setAuthFailed());
  }
}

export function* setAuthLogoutSaga() {
  yield put(actions.setAuthLogout());
}
