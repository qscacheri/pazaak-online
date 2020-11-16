import { CHANGE_USERNAME, UserActionType, UserState } from './types';

const initialState = {
  username: 'Player 1',
};

export const userReducer = (
  state: UserState = initialState,
  action: UserActionType
) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      return {
        username: action.payload,
      };
    default:
      return state;
  }
};
