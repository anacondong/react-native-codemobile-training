import * as actions from '../actions/jsonfeed.action';
import { put, call } from 'redux-saga/effects';
import { YoutubeResult } from '../types/youtube.interface';
import { AxiosResponse } from 'axios';

export function* fetchJSONSaga() {
  try {
    yield put(actions.setJSONToFetching()); // put >> sync call action
    const response: AxiosResponse<YoutubeResult> = yield call(
      actions.doFeedJSON,
    ); // call action method
    yield put(actions.setJSONToSuccess(response.data.youtubes));
  } catch (error) {
    yield put(actions.setJSONToFailed(error));
  }
}
