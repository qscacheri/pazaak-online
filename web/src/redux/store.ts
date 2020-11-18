import { applyMiddleware, combineReducers, createStore } from 'redux';
import { gameStateReducer } from './game/reducers';
import { GameStateType } from './game/types';
import { userReducer } from './user/reducers';
import { UserState } from './user/types';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  user: userReducer,
  game: gameStateReducer,
});

export type StateType = {
  user: UserState;
  game: GameStateType;
};

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
