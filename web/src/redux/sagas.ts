import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

export function* rootSaga() {
  yield takeEvery('FIND_GAME_REQUEST', () => 'HELLO');
}
