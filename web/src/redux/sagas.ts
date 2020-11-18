import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { api } from '../api';
import { CHANGE_USERNAME } from './user/types';

function* connect(action: any) {
  api.connect(action.payload);
}

export function* rootSaga() {
  yield takeEvery(CHANGE_USERNAME, connect);
}
