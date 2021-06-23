import * as actions from '../actions/auth.action';
import {put, call, delay} from 'redux-saga/effects';

export function* setAuthLoginSaga({ type, payload }) {
    const response = yield call(actions.doAuthServer,payload);
    console.log('response', response);
    yield put(actions.setAuthLogin(response.data.user));
}

export function* setAuthLogoutSaga() {
  yield put(actions.setAuthLogout());
}
