import { combineReducers, createStore } from 'redux';
import { gameStateReducer } from './game/reducers';
import { GameStateType } from './game/types';
import { userReducer } from './user/reducers';
import { UserState } from './user/types';

const rootReducer = combineReducers({
  user: userReducer,
  game: gameStateReducer,
});

export type StateType = {
  user: UserState;
  game: GameStateType;
};

export const store = createStore(rootReducer);
