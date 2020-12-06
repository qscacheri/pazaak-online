import { takeEvery } from 'redux-saga/effects';
import { socket } from '../api';
import { CHANGE_USERNAME } from './user/types';

function* connect(action: any) {
  socket.emit('login', action.payload);
}

export function* rootSaga() {
  yield takeEvery(CHANGE_USERNAME, connect);
}
