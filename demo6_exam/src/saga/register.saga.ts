import * as actions from '../actions/register.action';
import { put, call, delay } from 'redux-saga/effects';

export function* registerRequestWorker({ type, payload }) {

    try {
        const response = yield call(actions.doRegisterServer, payload);
        console.log('response', response);
        if (response.data.user !== null) {
            yield put(actions.setRegisterSuccess(response.data.user));
        } else {
            yield put(actions.setRegisterFailed());
        }
    } catch (error) {
        yield put(actions.setRegisterFailed());
    }
}
